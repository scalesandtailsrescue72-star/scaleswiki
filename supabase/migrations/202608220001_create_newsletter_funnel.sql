create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  first_name text,
  track text not null default 'ball-python',
  status text not null default 'active' check (status in ('active','unsubscribed')),
  unsubscribe_token uuid not null default gen_random_uuid() unique,
  subscribed_at timestamptz not null default now(),
  unsubscribed_at timestamptz,
  last_sent_week integer,
  last_sent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists newsletter_subscribers_status_idx on public.newsletter_subscribers(status);
create index if not exists newsletter_subscribers_subscribed_at_idx on public.newsletter_subscribers(subscribed_at);

alter table public.newsletter_subscribers enable row level security;

drop policy if exists "Anyone can subscribe" on public.newsletter_subscribers;
create policy "Anyone can subscribe"
on public.newsletter_subscribers
for insert
to anon, authenticated
with check (status = 'active' and track = 'ball-python');

drop policy if exists "Subscribers can unsubscribe themselves" on public.newsletter_subscribers;
drop policy if exists "Admins can view newsletter subscribers" on public.newsletter_subscribers;
create policy "Admins can view newsletter subscribers"
on public.newsletter_subscribers
for select
to authenticated
using ((auth.jwt() ->> 'email') = current_setting('app.settings.admin_email', true));

create or replace function public.unsubscribe_newsletter(p_token uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.newsletter_subscribers
  set status = 'unsubscribed', unsubscribed_at = now()
  where unsubscribe_token = p_token and status = 'active';
  return found;
end;
$$;

grant execute on function public.unsubscribe_newsletter(uuid) to anon, authenticated;

create or replace function public.touch_newsletter_subscriber()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists newsletter_subscribers_touch on public.newsletter_subscribers;
create trigger newsletter_subscribers_touch
before update on public.newsletter_subscribers
for each row execute function public.touch_newsletter_subscriber();
