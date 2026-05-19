import { json } from '@sveltejs/kit';
import { checkSpam } from '$lib/server/spamGuard.js';

export async function POST({ request, getClientAddress }) {
	const body = await request.json().catch(() => ({}));

	const guard = await checkSpam({ body, clientIp: getClientAddress() });
	if (!guard.ok) {
		if (guard.silent) return new Response(null, { status: 204 });
		return json({ error: guard.reason }, { status: 400 });
	}

	const { yourName, yourEmail, clientName, clientPhone, clientEmail, clientCategory } = body;
	if (!yourName || !yourEmail || !clientName || !clientCategory) {
		return json({ error: 'missing-fields' }, { status: 400 });
	}

	// TODO: send to Microsoft 365 mailbox / CRM
	console.log('LEAD (referral):', { yourName, yourEmail, clientName, clientPhone, clientEmail, clientCategory });

	return json({ ok: true });
}
