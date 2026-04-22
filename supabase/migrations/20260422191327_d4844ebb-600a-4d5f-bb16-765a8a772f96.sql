CREATE TABLE public.referral_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  referred_customer_name TEXT,
  referrer_name TEXT NOT NULL,
  referrer_email TEXT NOT NULL,
  referrer_phone TEXT,
  referral_type TEXT NOT NULL,
  referred_company_name TEXT,
  referred_contact_name TEXT,
  referred_email TEXT,
  referred_phone TEXT,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.referral_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a referral"
ON public.referral_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can view referral submissions"
ON public.referral_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update referral submissions"
ON public.referral_submissions
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete referral submissions"
ON public.referral_submissions
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER set_referral_submissions_updated_at
BEFORE UPDATE ON public.referral_submissions
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();