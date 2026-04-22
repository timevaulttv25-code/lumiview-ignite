CREATE OR REPLACE FUNCTION public.validate_referral_submission()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.referrer_name := btrim(NEW.referrer_name);
  NEW.referrer_email := lower(btrim(NEW.referrer_email));
  NEW.referrer_phone := NULLIF(btrim(COALESCE(NEW.referrer_phone, '')), '');
  NEW.referral_type := lower(btrim(NEW.referral_type));
  NEW.referred_customer_name := NULLIF(btrim(COALESCE(NEW.referred_customer_name, '')), '');
  NEW.referred_company_name := NULLIF(btrim(COALESCE(NEW.referred_company_name, '')), '');
  NEW.referred_contact_name := NULLIF(btrim(COALESCE(NEW.referred_contact_name, '')), '');
  NEW.referred_email := NULLIF(lower(btrim(COALESCE(NEW.referred_email, ''))), '');
  NEW.referred_phone := NULLIF(btrim(COALESCE(NEW.referred_phone, '')), '');
  NEW.notes := NULLIF(btrim(COALESCE(NEW.notes, '')), '');

  IF NEW.referrer_name IS NULL OR char_length(NEW.referrer_name) < 2 OR char_length(NEW.referrer_name) > 120 THEN
    RAISE EXCEPTION 'Referrer name must be between 2 and 120 characters';
  END IF;

  IF NEW.referrer_email IS NULL OR NEW.referrer_email !~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$' OR char_length(NEW.referrer_email) > 254 THEN
    RAISE EXCEPTION 'Enter a valid referrer email address';
  END IF;

  IF NEW.referrer_phone IS NOT NULL AND (char_length(NEW.referrer_phone) > 40 OR NEW.referrer_phone !~ '^(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$') THEN
    RAISE EXCEPTION 'Enter a valid referrer phone number';
  END IF;

  IF NEW.referral_type NOT IN ('residential', 'commercial') THEN
    RAISE EXCEPTION 'Referral type must be residential or commercial';
  END IF;

  IF NEW.notes IS NOT NULL AND char_length(NEW.notes) > 2000 THEN
    RAISE EXCEPTION 'Notes must be 2000 characters or less';
  END IF;

  IF NEW.referred_email IS NOT NULL AND (char_length(NEW.referred_email) > 254 OR NEW.referred_email !~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$') THEN
    RAISE EXCEPTION 'Enter a valid referred email address';
  END IF;

  IF NEW.referred_phone IS NOT NULL AND (char_length(NEW.referred_phone) > 40 OR NEW.referred_phone !~ '^(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$') THEN
    RAISE EXCEPTION 'Enter a valid referred phone number';
  END IF;

  IF NEW.referral_type = 'residential' THEN
    IF NEW.referred_customer_name IS NULL OR char_length(NEW.referred_customer_name) < 2 OR char_length(NEW.referred_customer_name) > 120 THEN
      RAISE EXCEPTION 'Residential referrals require a referred customer name';
    END IF;
    NEW.referred_company_name := NULL;
  END IF;

  IF NEW.referral_type = 'commercial' THEN
    IF NEW.referred_company_name IS NULL OR char_length(NEW.referred_company_name) < 2 OR char_length(NEW.referred_company_name) > 160 THEN
      RAISE EXCEPTION 'Commercial referrals require a company name';
    END IF;
    IF NEW.referred_contact_name IS NOT NULL AND (char_length(NEW.referred_contact_name) < 2 OR char_length(NEW.referred_contact_name) > 120) THEN
      RAISE EXCEPTION 'Referred contact name must be between 2 and 120 characters';
    END IF;
    NEW.referred_customer_name := NULL;
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS validate_referral_submission_trigger ON public.referral_submissions;

CREATE TRIGGER validate_referral_submission_trigger
BEFORE INSERT OR UPDATE ON public.referral_submissions
FOR EACH ROW
EXECUTE FUNCTION public.validate_referral_submission();