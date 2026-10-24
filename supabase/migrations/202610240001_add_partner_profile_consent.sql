alter table public.partner_organizations
  add column if not exists website_url text,
  add column if not exists city text,
  add column if not exists state_region text,
  add column if not exists service_area text,
  add column if not exists public_description text,
  add column if not exists species_handled text[] not null default '{}',
  add column if not exists services_offered text[] not null default '{}',
  add column if not exists facebook_url text,
  add column if not exists instagram_url text,
  add column if not exists logo_url text,
  add column if not exists preferred_contact_method text,
  add column if not exists profile_status text not null default 'draft',
  add column if not exists representative_authorized boolean not null default false,
  add column if not exists directory_consent boolean not null default false,
  add column if not exists name_logo_consent boolean not null default false,
  add column if not exists spotlight_contact_consent boolean not null default false,
  add column if not exists public_links_consent boolean not null default false,
  add column if not exists consent_version text,
  add column if not exists consented_by uuid references auth.users(id) on delete set null,
  add column if not exists consented_at timestamptz,
  add column if not exists profile_submitted_at timestamptz,
  add column if not exists profile_published_at timestamptz;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'partner_organizations_profile_status_check'
  ) then
    alter table public.partner_organizations
      add constraint partner_organizations_profile_status_check
      check (profile_status in ('draft', 'submitted', 'approved', 'published', 'declined'));
  end if;
end
$$;
