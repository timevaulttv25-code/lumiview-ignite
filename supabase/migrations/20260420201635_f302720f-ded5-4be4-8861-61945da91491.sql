ALTER TABLE public.quote_requests
  ADD CONSTRAINT quote_full_name_len CHECK (char_length(full_name) BETWEEN 1 AND 120),
  ADD CONSTRAINT quote_company_len CHECK (company_name IS NULL OR char_length(company_name) <= 160),
  ADD CONSTRAINT quote_email_len CHECK (email IS NULL OR char_length(email) <= 254),
  ADD CONSTRAINT quote_phone_len CHECK (phone IS NULL OR char_length(phone) <= 40),
  ADD CONSTRAINT quote_address_len CHECK (street_address IS NULL OR char_length(street_address) <= 200),
  ADD CONSTRAINT quote_city_len CHECK (city IS NULL OR char_length(city) <= 80),
  ADD CONSTRAINT quote_state_len CHECK (state IS NULL OR char_length(state) <= 40),
  ADD CONSTRAINT quote_zip_len CHECK (zip IS NULL OR char_length(zip) <= 20),
  ADD CONSTRAINT quote_details_len CHECK (project_details IS NULL OR char_length(project_details) <= 4000),
  ADD CONSTRAINT quote_addl_len CHECK (additional_info IS NULL OR char_length(additional_info) <= 4000),
  ADD CONSTRAINT quote_services_len CHECK (array_length(services,1) IS NULL OR array_length(services,1) <= 20);