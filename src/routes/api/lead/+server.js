import { json } from '@sveltejs/kit';
import { checkSpam } from '$lib/server/spamGuard.js';

export async function POST({ request, getClientAddress }) {
	const body = await request.json().catch(() => ({}));

	const guard = await checkSpam({ body, clientIp: getClientAddress() });
	if (!guard.ok) {
		if (guard.silent) return new Response(null, { status: 204 });
		return json({ error: guard.reason }, { status: 400 });
	}

	const { category, name, phone, email, details } = body;
	if (!category || !name || !email) return json({ error: 'missing-fields' }, { status: 400 });

	// TODO: send to Microsoft 365 mailbox / CRM / Cloudflare email worker
	console.log('LEAD (quote):', { category, name, phone, email, details });

	return json({ ok: true });
}
