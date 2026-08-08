-- Enable Row Level Security on profiles
alter table public.profiles
enable row level security;


-- Allow users to view their own profile
create policy "Users can view their own profile"
on public.profiles
for select
to authenticated
using (
  auth.uid() = id
);


-- Allow users to create their own profile
create policy "Users can insert their own profile"
on public.profiles
for insert
to authenticated
with check (
  auth.uid() = id
);


-- Allow users to update their own profile
create policy "Users can update their own profile"
on public.profiles
for update
to authenticated
using (
  auth.uid() = id
)
with check (
  auth.uid() = id
);