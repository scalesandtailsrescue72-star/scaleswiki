create table if not exists public.rescue_partner_feedback (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.partner_organizations(id) on delete cascade,
  submitted_by uuid not null references auth.users(id) on delete cascade,
  species_handled text[] not null default '{}',
  adopter_challenges text not null,
  requested_resources text not null,
  collaboration_notes text,
  spotlight_interest boolean not null default false,
  follow_up_ok boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists rescue_partner_feedback_org_idx
  on public.rescue_partner_feedback(organization_id);

create index if not exists rescue_partner_feedback_submitter_idx
  on public.rescue_partner_feedback(submitted_by);

alter table public.rescue_partner_feedback enable row level security;

drop policy if exists "Rescue partners can submit feedback" on public.rescue_partner_feedback;
create policy "Rescue partners can submit feedback"
on public.rescue_partner_feedback for insert to authenticated
with check (
  submitted_by = auth.uid()
  and exists (
    select 1 from public.partner_organization_members membership
    where membership.organization_id = rescue_partner_feedback.organization_id
      and membership.user_id = auth.uid()
  )
);

drop policy if exists "Rescue partners can view their feedback" on public.rescue_partner_feedback;
create policy "Rescue partners can view their feedback"
on public.rescue_partner_feedback for select to authenticated
using (submitted_by = auth.uid());
