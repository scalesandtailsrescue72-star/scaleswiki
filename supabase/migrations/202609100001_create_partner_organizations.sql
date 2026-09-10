create table if not exists public.partner_organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  normalized_name text unique,
  email_domain text unique,
  organization_type text not null check (organization_type in ('rescue', 'veterinary', 'store', 'educator')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.partner_organization_members (
  organization_id uuid not null references public.partner_organizations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  member_kind text not null default 'staff' check (member_kind in ('staff', 'organization_account')),
  joined_at timestamptz not null default now(),
  primary key (organization_id, user_id),
  unique (user_id)
);

create index if not exists partner_organization_members_org_idx
  on public.partner_organization_members(organization_id);

alter table public.partner_organizations enable row level security;
alter table public.partner_organization_members enable row level security;

drop policy if exists "Members can view their organizations" on public.partner_organizations;
create policy "Members can view their organizations"
on public.partner_organizations for select to authenticated
using (
  exists (
    select 1 from public.partner_organization_members membership
    where membership.organization_id = id and membership.user_id = auth.uid()
  )
);

drop policy if exists "Members can view their own membership" on public.partner_organization_members;
create policy "Members can view their own membership"
on public.partner_organization_members for select to authenticated
using (user_id = auth.uid());

with rescue_domains as (
  select distinct
    split_part(lower(email), '@', 2) as email_domain,
    raw_user_meta_data ->> 'organization_name' as supplied_name
  from auth.users
  where raw_user_meta_data ->> 'community_role' = 'rescue'
    and split_part(lower(email), '@', 2) not in (
      'aol.com', 'gmail.com', 'hotmail.com', 'icloud.com', 'live.com', 'me.com',
      'msn.com', 'outlook.com', 'proton.me', 'protonmail.com', 'yahoo.com', 'ymail.com'
    )
)
insert into public.partner_organizations(name, normalized_name, email_domain, organization_type)
select
  coalesce(
    nullif(trim(supplied_name), ''),
    initcap(replace(replace(split_part(email_domain, '.', 1), '-', ' '), '_', ' '))
  ),
  case when nullif(trim(supplied_name), '') is not null
    then trim(both '-' from regexp_replace(lower(trim(supplied_name)), '[^a-z0-9]+', '-', 'g'))
    else null
  end,
  email_domain,
  'rescue'
from rescue_domains
on conflict (email_domain) do nothing;

insert into public.partner_organization_members(organization_id, user_id, member_kind)
select
  organization.id,
  auth_user.id,
  case when split_part(lower(auth_user.email), '@', 1) in ('admin', 'contact', 'hello', 'info', 'office', 'team')
    then 'organization_account'
    else 'staff'
  end
from auth.users auth_user
join public.partner_organizations organization
  on organization.email_domain = split_part(lower(auth_user.email), '@', 2)
where auth_user.raw_user_meta_data ->> 'community_role' = 'rescue'
on conflict (user_id) do nothing;

create or replace function public.touch_partner_organization()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists partner_organizations_touch on public.partner_organizations;
create trigger partner_organizations_touch
before update on public.partner_organizations
for each row execute function public.touch_partner_organization();
