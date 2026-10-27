PORTFOLIO AUTH + UI SETUP

This package contains the portfolio with a redesigned responsive sign-in screen and session-only authentication (MFA has been removed as requested).

FILES
- index.html: login-first flow and portfolio content
- style.css: portfolio styles plus responsive sign-in UI
- auth.js: email/password sign-in, account creation, Google OAuth, password reset, logout, and portfolio interactions
- auth-config.js: Supabase project URL and browser publishable key
- dashboard.html / dashboard.js: optional session-only account page; no MFA check

RUN LOCALLY
1. Keep all files in this folder together.
2. Open this folder in VS Code.
3. In Terminal, run: python -m http.server 5500
4. Open http://localhost:5500/index.html

SUPABASE CONFIGURATION
1. In Supabase Authentication, enable Email provider.
2. Set Site URL to http://localhost:5500.
3. Add http://localhost:5500/** to the redirect URL allowlist.
4. For Google Sign-In, configure the Google provider in Supabase and set the OAuth callback URL exactly as shown by Supabase.
5. For password reset, ensure the redirect URL is allowed.

SECURITY
- The Supabase publishable/anon key is intended for browser use. Never place service_role or other secret keys in client files.
- This static portfolio only gates the UI based on the Supabase session. Do not put sensitive/private data in client-side HTML; protect database access with appropriate Supabase Row Level Security and server-side authorization.
- Email confirmation may need to be completed before first sign-in, depending on your Supabase settings.
