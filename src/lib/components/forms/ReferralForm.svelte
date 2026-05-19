<script>
	import { onMount } from 'svelte';
	import Select from './Select.svelte';
	import Turnstile from './Turnstile.svelte';
	import { formCategoryOptions as categoryOptions } from '$lib/data/heroCategories.js';

	let yourName = $state('');
	let yourEmail = $state('');
	let clientName = $state('');
	let clientPhone = $state('');
	let clientEmail = $state('');
	let clientCategory = $state('');
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
			const res = await fetch('/api/refer', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ yourName, yourEmail, clientName, clientPhone, clientEmail, clientCategory, website, startedAt, turnstileToken })
			});
			if (res.ok) status = 'success';
			else { errorMsg = 'Something went wrong. Please try again.'; status = 'error'; }
		} catch {
			errorMsg = 'Network error. Please try again.'; status = 'error';
		}
	}
</script>

{#if status === 'success'}
	<div class="rf-success">
		<span class="rf-success-icon fa fa-heart"></span>
		<h3 class="rf-success-title">Referral received — thank you.</h3>
		<p class="rf-success-text">We'll reach out to your contact soon and keep you in the loop.</p>
	</div>
{:else}
	<form class="rf" onsubmit={submit}>
		<div class="rf-body">
			<div class="rf-section">
				<div class="rf-subhead"><span class="rf-dot gold"></span> About you</div>
				<div class="rf-row">
					<div class="field">
						<label class="lbl" for="rf-you-name">Your name</label>
						<input id="rf-you-name" type="text" bind:value={yourName} class="input" placeholder="Jane Doe" required />
					</div>
					<div class="field">
						<label class="lbl" for="rf-you-email">Your email</label>
						<input id="rf-you-email" type="email" bind:value={yourEmail} class="input" placeholder="jane@example.com" required />
					</div>
				</div>
			</div>

			<div class="rf-section">
				<div class="rf-subhead"><span class="rf-dot blue"></span> About the person you're referring</div>
				<div class="rf-row">
					<div class="field">
						<label class="lbl" for="rf-cli-name">Client name</label>
						<input id="rf-cli-name" type="text" bind:value={clientName} class="input" placeholder="John Smith" required />
					</div>
					<div class="field">
						<label class="lbl" for="rf-cli-phone">Client phone</label>
						<input id="rf-cli-phone" type="tel" bind:value={clientPhone} class="input" placeholder="(514) 555-0123" />
					</div>
				</div>
				<div class="field">
					<label class="lbl" for="rf-cli-email">Client email</label>
					<input id="rf-cli-email" type="email" bind:value={clientEmail} class="input" placeholder="john@example.com" />
				</div>
				<div class="field">
					<label class="lbl" for="rf-cli-cat">What do they need to insure?</label>
					<Select id="rf-cli-cat" bind:value={clientCategory} options={categoryOptions} placeholder="Choose a category" accent="gold" required />
				</div>
			</div>
			<input type="text" tabindex="-1" autocomplete="off" class="hp" bind:value={website} aria-hidden="true" />
		</div>

		<div class="rf-foot">
			<Turnstile bind:token={turnstileToken} />
			{#if status === 'error'}<p class="rf-error">{errorMsg}</p>{/if}
			<button type="submit" class="cta" disabled={status === 'sending'}>
				{status === 'sending' ? 'Sending…' : 'Send referral'}
				<span class="arrow">→</span>
			</button>
			<p class="micro"><span class="fa fa-heart"></span> Thank you — your referral keeps us going</p>
		</div>
	</form>
{/if}

<style>
	.rf { display: flex; flex-direction: column; flex: 1; gap: 1.5rem; }
	.rf-body { display: flex; flex-direction: column; gap: 1.5rem; }

	.rf-section { display: flex; flex-direction: column; gap: 0.85rem; }
	.rf-subhead {
		display: flex; align-items: center; gap: 0.6rem;
		font-size: 0.72rem; font-weight: 700;
		letter-spacing: 0.16em; text-transform: uppercase;
		color: #4a5a6e;
		padding-bottom: 0.55rem;
		border-bottom: 1px dashed #e5e9ef;
	}
	.rf-dot { width: 7px; height: 7px; border-radius: 50%; }
	.rf-dot.gold { background: #c8a96e; }
	.rf-dot.blue { background: #204a77; }

	.rf-row {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 0.75rem;
	}

	.field { display: flex; flex-direction: column; gap: 0.4rem; }
	.lbl { font-size: 0.78rem; font-weight: 600; color: #4a5a6e; letter-spacing: 0.02em; }

	.input {
		box-sizing: border-box; width: 100%;
		padding: 0.8rem 0.9rem;
		border: 1.5px solid #e5e9ef;
		border-radius: 8px;
		font-size: 0.92rem;
		background: #fff; color: #0f1e2e;
		font-family: inherit;
		transition: border-color 0.15s ease, box-shadow 0.15s ease;
	}
	.input:focus {
		outline: none;
		border-color: #c8a96e;
		box-shadow: 0 0 0 3px rgba(200,169,110,0.18);
	}

	.hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; pointer-events: none; }

	.rf-foot { margin-top: auto; display: flex; flex-direction: column; gap: 0.7rem; }
	.cta {
		box-sizing: border-box;
		display: flex; align-items: center; justify-content: center; gap: 0.5rem;
		width: 100%;
		padding: 1.05rem 1.5rem;
		background: #c8a96e; color: #0f1e2e;
		font-size: 0.92rem; font-weight: 700;
		letter-spacing: 0.04em; text-transform: uppercase;
		border: none; border-radius: 10px;
		cursor: pointer;
		transition: background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
	}
	.cta:hover:not(:disabled) {
		background: #b8996a;
		transform: translateY(-1px);
		box-shadow: 0 12px 28px -10px rgba(200,169,110,0.55);
	}
	.cta:disabled { opacity: 0.7; cursor: not-allowed; }
	.arrow { transition: transform 0.2s ease; }
	.cta:hover:not(:disabled) .arrow { transform: translateX(3px); }

	.rf-error {
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
	.micro .fa { margin-right: 0.3rem; color: #c8a96e; }

	.rf-success {
		text-align: center;
		padding: 2rem 1rem;
		display: flex; flex-direction: column; gap: 0.75rem;
		align-items: center;
	}
	.rf-success-icon { font-size: 3rem; color: #c8a96e; }
	.rf-success-title { margin: 0; font-size: 1.4rem; font-weight: 600; color: #0f1e2e; }
	.rf-success-text { margin: 0; font-size: 0.95rem; color: #4a5a6e; line-height: 1.6; max-width: 24rem; }

	@media (max-width: 540px) {
		.rf-row { grid-template-columns: 1fr; }
	}
</style>
