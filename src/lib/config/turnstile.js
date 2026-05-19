// Cloudflare Turnstile config.
//
// ── CURRENT MODE: TEST KEYS (always passes, no real protection) ──
//
// To go live with real protection:
//  1. Cloudflare dashboard → Turnstile → Add Site
//  2. Choose mode: Managed (recommended) · Add domains: elhageassurances.com
//  3. Copy the Site Key + Secret Key
//  4. Replace SITE_KEY below with the real site key
//  5. In Cloudflare Pages → your project → Settings → Environment Variables,
//     add a SECRET variable named TURNSTILE_SECRET with the real secret key
//
// More info: https://developers.cloudflare.com/turnstile/

// Public — safe to expose to the browser.
export const TURNSTILE_SITE_KEY = '0x4AAAAAADSkODm6rEWxg-jm';

// Test secret — used only as a fallback when the TURNSTILE_SECRET env var
// is missing (e.g. in local dev). In production, the real secret MUST be set
// as TURNSTILE_SECRET in Cloudflare Pages → Settings → Variables and Secrets.
export const TURNSTILE_TEST_SECRET = '1x0000000000000000000000000000000AA';
