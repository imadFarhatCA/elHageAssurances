// Server-side defense-in-depth check for all form submissions.
//
// Combines:
//   1. Honeypot — a hidden form field that real users never fill
//   2. Time-trap — reject forms submitted faster than a human could
//   3. Cloudflare Turnstile — invisible bot challenge
//
// Returns { ok: true } if all checks pass, or { ok: false, reason } otherwise.

import { env } from '$env/dynamic/private';
import { TURNSTILE_TEST_SECRET } from '$lib/config/turnstile.js';

const MIN_FILL_MS = 2000;
const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export async function checkSpam({ body, clientIp }) {
	// Layer 1 — honeypot
	if (body.website) {
		return { ok: false, reason: 'honeypot', silent: true };
	}

	// Layer 2 — time-trap
	const elapsed = Date.now() - Number(body.startedAt || 0);
	if (!body.startedAt || elapsed < MIN_FILL_MS) {
		return { ok: false, reason: 'too-fast', silent: true };
	}

	// Layer 3 — Turnstile
	const secret = env.TURNSTILE_SECRET || TURNSTILE_TEST_SECRET;
	const params = new URLSearchParams({
		secret,
		response: body.turnstileToken || ''
	});
	if (clientIp) params.set('remoteip', clientIp);

	let result;
	try {
		const res = await fetch(VERIFY_URL, {
			method: 'POST',
			headers: { 'content-type': 'application/x-www-form-urlencoded' },
			body: params
		});
		result = await res.json();
	} catch (err) {
		return { ok: false, reason: 'verify-network-error' };
	}

	if (!result.success) {
		return { ok: false, reason: 'turnstile-failed', codes: result['error-codes'] };
	}

	return { ok: true };
}
