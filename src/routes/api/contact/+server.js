import { json } from '@sveltejs/kit';
import { checkSpam } from '$lib/server/spamGuard.js';

export async function POST({ request, getClientAddress }) {
	const body = await request.json().catch(() => ({}));

	const guard = await checkSpam({ body, clientIp: getClientAddress() });
	if (!guard.ok) {
		if (guard.silent) return new Response(null, { status: 204 });
		return json({ error: guard.reason }, { status: 400 });
	}

	const { name, email, phone, subject, message } = body;
	if (!name || !email || !subject || !message) return json({ error: 'missing-fields' }, { status: 400 });

	// TODO: send to Microsoft 365 mailbox / CRM
	console.log('LEAD (contact):', { name, email, phone, subject, message });

	return json({ ok: true });
}
