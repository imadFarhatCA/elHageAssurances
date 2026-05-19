<script>
	import { onMount } from 'svelte';
	import Select from './Select.svelte';
	import Turnstile from './Turnstile.svelte';
	import { formCategoryOptions as categoryOptions } from '$lib/data/heroCategories.js';

	let category = $state('');
	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let details = $state('');
	let website = $state(''); // honeypot — must stay empty
	let turnstileToken = $state('');
	let startedAt = $state(0);
	let status = $state('idle'); // idle | sending | success | error
	let errorMsg = $state('');

	onMount(() => { startedAt = Date.now(); });

	async function submit(e) {
		e.preventDefault();
		if (!turnstileToken) { errorMsg = 'Please complete the verification.'; status = 'error'; return; }
		status = 'sending';
		errorMsg = '';
		try {
			const res = await fetch('/api/lead', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ category, name, phone, email, details, website, startedAt, turnstileToken })
			});
			if (res.ok) status = 'success';
			else { errorMsg = 'Something went wrong. Please try again.'; status = 'error'; }
		} catch {
			errorMsg = 'Network error. Please try again.'; status = 'error';
		}
	}
</script>

{#if status === 'success'}
	<div class="qf-success">
		<span class="qf-success-icon fa fa-check-circle"></span>
		<h3 class="qf-success-title">Quote request received.</h3>
		<p class="qf-success-text">One of our advisors will reach out within 15 minutes during business hours.</p>
	</div>
{:else}
	<form class="qf" onsubmit={submit}>
		<div class="qf-fields">
			<div class="field full">
				<label class="lbl" for="qf-cat">What do you need to insure?</label>
				<Select id="qf-cat" bind:value={category} options={categoryOptions} placeholder="Choose a category" accent="blue" required />
			</div>
			<div class="field">
				<label class="lbl" for="qf-name">Full name</label>
				<input id="qf-name" type="text" bind:value={name} class="input" placeholder="Jane Doe" required />
			</div>
			<div class="field">
				<label class="lbl" for="qf-phone">Phone</label>
				<input id="qf-phone" type="tel" bind:value={phone} class="input" placeholder="(514) 555-0123" required />
			</div>
			<div class="field full">
				<label class="lbl" for="qf-email">Email</label>
				<input id="qf-email" type="email" bind:value={email} class="input" placeholder="jane@example.com" required />
			</div>
			<div class="field full">
				<label class="lbl" for="qf-details">Additional details <span class="opt">(optional)</span></label>
				<textarea id="qf-details" bind:value={details} class="input textarea" placeholder="Tell us about your situation, what you currently have, what you're looking for…" rows="4"></textarea>
			</div>
			<input type="text" tabindex="-1" autocomplete="off" class="hp" bind:value={website} aria-hidden="true" />
		</div>

		<div class="qf-foot">
			<Turnstile bind:token={turnstileToken} />
			{#if status === 'error'}<p class="qf-error">{errorMsg}</p>{/if}
			<button type="submit" class="cta" disabled={status === 'sending'}>
				{status === 'sending' ? 'Sending…' : 'Send quote request'}
				<span class="arrow">→</span>
			</button>
			<p class="micro"><span class="fa fa-lock"></span> Encrypted · Used only to contact you · No spam</p>
		</div>
	</form>
{/if}

<style>
	.qf { display: flex; flex-direction: column; flex: 1; gap: 1.25rem; }
	.qf-fields {
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
	.textarea { resize: vertical; min-height: 110px; line-height: 1.5; }

	.hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; pointer-events: none; }

	.qf-foot { margin-top: auto; display: flex; flex-direction: column; gap: 0.7rem; }
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

	.qf-error {
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

	.qf-success {
		text-align: center;
		padding: 2rem 1rem;
		display: flex; flex-direction: column; gap: 0.75rem;
		align-items: center;
	}
	.qf-success-icon { font-size: 3rem; color: #30c47a; }
	.qf-success-title { margin: 0; font-size: 1.4rem; font-weight: 600; color: #0f1e2e; }
	.qf-success-text { margin: 0; font-size: 0.95rem; color: #4a5a6e; line-height: 1.6; max-width: 24rem; }

	@media (max-width: 540px) {
		.qf-fields { grid-template-columns: 1fr; }
	}
</style>
