# ScalesWiki 52-Week Newsletter Setup

The funnel is designed to run without Academy accounts. Visitors subscribe with an email address and are enrolled in the Ball Python 52-week track.

## Database

Apply `supabase/migrations/202608220001_create_newsletter_funnel.sql` to the production Supabase project.

## Production environment variables

Set these in the Cloudflare/production environment:

- `SUPABASE_SERVICE_ROLE_KEY` — server-only Supabase service role key. Never expose this to the browser.
- `NEWSLETTER_ADMIN_EMAIL` — the email address allowed to view `/newsletter/admin`.
- `RESEND_API_KEY` — server-only Resend API key used for delivery.
- `NEWSLETTER_FROM_EMAIL` — verified sender, for example `ScalesWiki <learn@scaleswiki.org>`.
- `NEWSLETTER_CRON_SECRET` — long random secret used by the scheduled delivery job.

The existing `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` remain required by the app.

## Automation

`.github/workflows/newsletter.yml` calls `/api/newsletter/process` once per day. The processor sends only the next due lesson for each active subscriber, records the week sent, and includes a one-click unsubscribe link.

## Admin view

After signing in with the configured admin email, visit `/newsletter/admin` to see subscriber email, first name, track, status, signup date and last sent week.

## Email provider

Resend is intentionally isolated behind the processor endpoint. The 52-week content and subscriber database are owned by ScalesWiki, so the email provider can be replaced later without rebuilding the funnel.
