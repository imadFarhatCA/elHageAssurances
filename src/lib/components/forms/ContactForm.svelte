<script>
	import { onMount } from 'svelte';
	import Select from './Select.svelte';
	import Turnstile from './Turnstile.svelte';

	const subjects = [
		{ value: 'quote',    label: 'Get a quote' },
		{ value: 'claim',    label: 'Claim help' },
		{ value: 'update',   label: 'Update an existing policy' },
		{ value: 'general',  label: 'General inquiry' },
		{ value: 'other',    label: 'Something else' }
	];

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let subject = $state('');
	let message = $state('');
	let website = $state(''); // honeypot
	let turnstileToken = $state('');
	let startedAt = $state(0);
	let status = $state('idle');
	let errorMsg = $state('');

	onMount(() => { startedAt = Date.now(); });

	async function submit(e) {
		e.preventDefault();
		if (!turnstileToken) { errorMsg = 'Please complete the verification.'; status = 'error'; return; }
		status = 'sending';
		errorMsg = '';
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ name, email, phone, subject, message, website, startedAt, turnstileToken })
			});
			if (res.ok) status = 'success';
			else { errorMsg = 'Something went wrong. Please try again.'; status = 'error'; }
		} catch {
			errorMsg = 'Network error. Please try again.'; status = 'error';
		}
	}
</script>

{#if status === 'success'}
	<div class="cf-success">
		<span class="cf-success-icon fa fa-paper-plane"></span>
		<h3 class="cf-success-title">Message sent.</h3>
		<p class="cf-success-text">We'll get back to you within one business day.</p>
	</div>
{:else}
	<form class="cf" onsubmit={submit}>
		<div class="cf-fields">
			<div class="field">
				<label class="lbl" for="cf-name">Full name</label>
				<input id="cf-name" type="text" bind:value={name} class="input" placeholder="Jane Doe" required />
			</div>
			<div class="field">
				<label class="lbl" for="cf-email">Email</label>
				<input id="cf-email" type="email" bind:value={email} class="input" placeholder="jane@example.com" required />
			</div>
			<div class="field">
				<label class="lbl" for="cf-phone">Phone <span class="opt">(optional)</span></label>
				<input id="cf-phone" type="tel" bind:value={phone} class="input" placeholder="(514) 555-0123" />
			</div>
			<div class="field">
				<label class="lbl" for="cf-subject">Subject</label>
				<Select id="cf-subject" bind:value={subject} options={subjects} placeholder="What's this about?" accent="blue" required />
			</div>
			<div class="field full">
				<label class="lbl" for="cf-msg">Message</label>
				<textarea id="cf-msg" bind:value={message} class="input textarea" placeholder="Tell us a bit about what you need…" rows="5" required></textarea>
			</div>
			<input type="text" tabindex="-1" autocomplete="off" class="hp" bind:value={website} aria-hidden="true" />
		</div>

		<div class="cf-foot">
			<Turnstile bind:token={turnstileToken} />
			{#if status === 'error'}<p class="cf-error">{errorMsg}</p>{/if}
			<button type="submit" class="cta" disabled={status === 'sending'}>
				{status === 'sending' ? 'Sending…' : 'Send message'}
				<span class="arrow">→</span>
			</button>
			<p class="micro"><span class="fa fa-lock"></span> Encrypted · Used only to contact you · No spam</p>
		</div>
	</form>
{/if}

<style>
	.cf { display: flex; flex-direction: column; flex: 1; gap: 1.25rem; }
	.cf-fields {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 1rem 0.85rem;
	}
	.full { grid-column: 1 / -1; }
	.field { display: flex; flex-direction: column; gap: 0.45rem; }
	.lbl { font-size: 0.78rem; font-weight: 600; color: #4a5a6e; letter-spacing: 0.02em; }
	.opt { font-weight: 400; color: #8b97a8; }

	.input {
		box-sizing: border-box; width: 100%;
		padding: 0.85rem 0.95rem;
		border: 1.5px solid #e5e9ef;
		border-radius: 8px;
		font-size: 0.95rem;
		background: #fff; color: #0f1e2e;
		font-family: inherit;
		transition: border-color 0.15s ease, box-shadow 0.15s ease;
	}
	.input:focus {
		outline: none;
		border-color: #204a77;
		box-shadow: 0 0 0 3px rgba(32,74,119,0.1);
	}
	.textarea { resize: vertical; min-height: 130px; line-height: 1.5; }

	.hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; pointer-events: none; }

	.cf-foot { margin-top: auto; display: flex; flex-direction: column; gap: 0.7rem; }
	.cta {
		box-sizing: border-box;
		display: flex; align-items: center; justify-content: center; gap: 0.5rem;
		width: 100%;
		padding: 1.05rem 1.5rem;
		background: #204a77; color: #fff;
		font-size: 0.95rem; font-weight: 600;
		letter-spacing: 0.02em;
		border: none; border-radius: 10px;
		cursor: pointer;
		transition: background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
	}
	.cta:hover:not(:disabled) {
		background: #1a3d63; transform: translateY(-1px);
		box-shadow: 0 12px 28px -10px rgba(32,74,119,0.5);
	}
	.cta:disabled { opacity: 0.7; cursor: not-allowed; }
	.arrow { transition: transform 0.2s ease; }
	.cta:hover:not(:disabled) .arrow { transform: translateX(3px); }

	.cf-error {
		margin: 0;
		padding: 0.65rem 0.85rem;
		background: #fdecec;
		border: 1px solid #f5c2c2;
		border-radius: 8px;
		color: #b32424;
		font-size: 0.85rem;
		text-align: center;
	}

	.micro { margin: 0; text-align: center; font-size: 0.74rem; color: #6b7c92; }
	.micro .fa { margin-right: 0.3rem; color: #30c47a; }

	.cf-success {
		text-align: center;
		padding: 2rem 1rem;
		display: flex; flex-direction: column; gap: 0.75rem;
		align-items: center;
	}
	.cf-success-icon { font-size: 3rem; color: #204a77; }
	.cf-success-title { margin: 0; font-size: 1.4rem; font-weight: 600; color: #0f1e2e; }
	.cf-success-text { margin: 0; font-size: 0.95rem; color: #4a5a6e; line-height: 1.6; max-width: 24rem; }

	@media (max-width: 540px) {
		.cf-fields { grid-template-columns: 1fr; }
	}
</style>
