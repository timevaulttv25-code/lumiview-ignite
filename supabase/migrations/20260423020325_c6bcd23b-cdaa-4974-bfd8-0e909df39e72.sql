create table public.faq_questions (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  question text not null,
  status text not null default 'new',
  internal_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.faq_questions enable row level security;

create policy "Anyone can submit a faq question"
  on public.faq_questions for insert
  to anon, authenticated
  with check (public.can_submit_public_form());

create policy "Admins can view faq questions"
  on public.faq_questions for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'::public.app_role));

create policy "Admins can update faq questions"
  on public.faq_questions for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'::public.app_role))
  with check (public.has_role(auth.uid(), 'admin'::public.app_role));

create policy "Admins can delete faq questions"
  on public.faq_questions for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'::public.app_role));