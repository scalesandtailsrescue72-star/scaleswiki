import type { SupabaseClient, User } from "@supabase/supabase-js";

const personalEmailDomains = new Set([
  "aol.com", "gmail.com", "hotmail.com", "icloud.com", "live.com",
  "me.com", "msn.com", "outlook.com", "proton.me", "protonmail.com",
  "yahoo.com", "ymail.com",
]);

const organizationDomainAliases = new Map([
  ["arrowheadreprilerescue.org", "arrowheadreptilerescue.org"],
]);

function normalizeOrganizationName(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export async function ensurePartnerOrganization(admin: SupabaseClient, user: User) {
  const { data: membership, error: membershipLookupError } = await admin
    .from("partner_organization_members")
    .select("organization_id")
    .eq("user_id", user.id)
    .maybeSingle();
  if (membershipLookupError) {
    console.error("[Partner Organization] Membership lookup failed", membershipLookupError.message);
    return null;
  }
  if (membership?.organization_id) return membership.organization_id as string;

  const role = String(user.user_metadata?.community_role || "");
  if (!["rescue", "veterinary", "store", "educator"].includes(role)) return null;

  const suppliedName = String(user.user_metadata?.organization_name || "").trim();
  const normalizedName = suppliedName ? normalizeOrganizationName(suppliedName) : null;
  const emailDomain = user.email?.split("@").pop()?.toLowerCase();
  const canonicalDomain = emailDomain ? organizationDomainAliases.get(emailDomain) || emailDomain : null;
  const customDomain = canonicalDomain && !personalEmailDomains.has(canonicalDomain) ? canonicalDomain : null;
  if (!customDomain && !normalizedName) return null;

  let organizationId: string | undefined;
  if (customDomain) {
    const { data: existing, error: lookupError } = await admin
      .from("partner_organizations")
      .select("id")
      .eq("email_domain", customDomain)
      .maybeSingle();
    if (lookupError) {
      console.error("[Partner Organization] Organization lookup failed", lookupError.message);
      return null;
    }
    organizationId = existing?.id;
  } else if (normalizedName) {
    const { data: existing, error: lookupError } = await admin
      .from("partner_organizations")
      .select("id")
      .eq("normalized_name", normalizedName)
      .maybeSingle();
    if (lookupError) {
      console.error("[Partner Organization] Organization lookup failed", lookupError.message);
      return null;
    }

    // Personal-email accounts cannot claim an existing organization by name alone.
    if (existing?.id) return null;
  }

  if (!organizationId) {
    const fallbackName = customDomain
      ? customDomain.split(".")[0].replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
      : "Partner Organization";
    const { data: created, error: createError } = await admin
      .from("partner_organizations")
      .insert({
        name: suppliedName || fallbackName,
        normalized_name: normalizedName,
        email_domain: customDomain,
        organization_type: role,
      })
      .select("id")
      .single();
    if (createError) {
      console.error("[Partner Organization] Organization creation failed", createError.message);
      return null;
    }
    organizationId = created.id;
  }

  const localPart = user.email?.split("@")[0].toLowerCase() || "";
  const organizationAccount = ["admin", "contact", "hello", "info", "office", "team"].includes(localPart);
  const { error: membershipError } = await admin.from("partner_organization_members").upsert(
    {
      organization_id: organizationId,
      user_id: user.id,
      member_kind: organizationAccount ? "organization_account" : "staff",
    },
    { onConflict: "user_id" },
  );
  if (membershipError) {
    console.error("[Partner Organization] Membership creation failed", membershipError.message);
    return null;
  }

  return organizationId;
}
