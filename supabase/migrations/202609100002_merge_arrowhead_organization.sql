do $$
declare
  canonical_id uuid;
  duplicate_id uuid;
begin
  select id into canonical_id
  from public.partner_organizations
  where email_domain = 'arrowheadreptilerescue.org';

  select id into duplicate_id
  from public.partner_organizations
  where email_domain = 'arrowheadreprilerescue.org';

  if canonical_id is not null and duplicate_id is not null and canonical_id <> duplicate_id then
    update public.partner_organization_members
    set organization_id = canonical_id
    where organization_id = duplicate_id;

    delete from public.partner_organizations
    where id = duplicate_id;
  end if;

  update public.partner_organizations
  set
    name = 'Arrowhead Reptile Rescue',
    normalized_name = 'arrowhead-reptile-rescue'
  where id = canonical_id;
end;
$$;
