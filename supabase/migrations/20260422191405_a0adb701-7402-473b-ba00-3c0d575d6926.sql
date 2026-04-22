CREATE OR REPLACE FUNCTION public.can_submit_public_form()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT auth.role() IN ('anon', 'authenticated')
$$;

DROP POLICY IF EXISTS "Anyone can submit a referral" ON public.referral_submissions;

CREATE POLICY "Anyone can submit a referral"
ON public.referral_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (public.can_submit_public_form());