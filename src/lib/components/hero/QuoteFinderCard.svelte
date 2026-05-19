<script>
	import { insuranceCategories } from '$lib/data/heroCategories.js';

	let selected = $state('home');
	let postal = $state('');
	let email = $state('');

	const picked = $derived(insuranceCategories.find(c => c.id === selected));

	function submit(e) {
		e.preventDefault();
		const url = `/our-services?type=${selected}&postal=${encodeURIComponent(postal)}&email=${encodeURIComponent(email)}`;
		window.location.href = url;
	}
</script>

<div class="card">
	<div class="card-header">
		<div class="step">Step 1 of 2</div>
		<h2 class="card-title">What do you want to insure?</h2>
	</div>

	<div class="grid">
		{#each insuranceCategories as cat}
			<button
				type="button"
				class="tile"
				class:active={selected === cat.id}
				onclick={() => selected = cat.id}
			>
				<span class="tile-icon {cat.icon}"></span>
				<span class="tile-label">{cat.label}</span>
				<span class="tile-tag">{cat.tagline}</span>
			</button>
		{/each}
	</div>

	<form class="form" onsubmit={submit}>
		<div class="form-head">
			<span class="form-step">Step 2</span>
			<span class="form-context">Quick quote for <strong>{picked?.label}</strong> insurance</span>
		</div>
		<div class="form-grid">
			<input
				type="text"
				placeholder="Postal code (A1A 1A1)"
				bind:value={postal}
				class="input"
				required
			/>
			<input
				type="email"
				placeholder="Your email"
				bind:value={email}
				class="input"
				required
			/>
			<button type="submit" class="cta">
				Get my quote
				<span class="arrow">→</span>
			</button>
		</div>
		<p class="micro">Free, no obligation · Reply within 15 min during business hours</p>
	</form>
</div>

<style>
	.card {
		background: rgba(255,255,255,0.42);
		backdrop-filter: blur(38px) saturate(160%);
		-webkit-backdrop-filter: blur(38px) saturate(160%);
		border-radius: 14px;
		padding: 2rem;
		box-shadow:
			0 1px 0 rgba(255,255,255,0.6) inset,
			0 24px 64px -16px rgba(32,74,119,0.22),
			0 8px 24px -12px rgba(32,74,119,0.14);
		border: 1px solid rgba(255,255,255,0.55);
	}

	.card-header { margin-bottom: 1.5rem; }
	.step {
		display: inline-block;
		font-size: 0.66rem; font-weight: 700;
		letter-spacing: 0.18em; text-transform: uppercase;
		color: #204a77;
		margin-bottom: 0.5rem;
	}
	.card-title {
		margin: 0;
		font-size: 1.25rem;
		font-weight: 600;
		color: #0f1e2e;
		letter-spacing: -0.01em;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.65rem;
		margin-bottom: 1.5rem;
	}
	.tile {
		display: flex; flex-direction: column;
		align-items: flex-start;
		gap: 0.35rem;
		padding: 0.95rem 1rem;
		border: 1.5px solid #e5e9ef;
		border-radius: 10px;
		background: rgba(255,255,255,0.35);
		cursor: pointer;
		transition: all 0.15s ease;
		text-align: left;
	}
	.tile:hover { border-color: #c8d4e3; background: rgba(250,251,253,0.85); }
	.tile.active {
		border-color: #204a77;
		background: rgba(244,248,253,0.92);
		box-shadow: 0 0 0 3px rgba(32,74,119,0.08);
	}
	.tile-icon {
		font-size: 1.25rem;
		color: #204a77;
	}
	.tile-label {
		font-size: 0.95rem;
		font-weight: 600;
		color: #0f1e2e;
	}
	.tile-tag {
		font-size: 0.72rem;
		color: #6b7c92;
	}

	.form {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 0.75rem;
	}
	.form-head {
		display: flex; align-items: baseline; gap: 0.6rem;
		padding-top: 1rem;
		border-top: 1px dashed #e5e9ef;
	}
	.form-step {
		font-size: 0.66rem; font-weight: 700;
		letter-spacing: 0.18em; text-transform: uppercase;
		color: #204a77;
	}
	.form-context { font-size: 0.85rem; color: #4a5a6e; }
	.form-context strong { color: #204a77; }

	.form-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 0.5rem;
	}
	.cta { grid-column: 1 / -1; }
	.input {
		box-sizing: border-box;
		width: 100%;
		padding: 0.85rem 0.95rem;
		border: 1.5px solid rgba(229,233,239,0.9);
		border-radius: 8px;
		font-size: 0.92rem;
		background: rgba(255,255,255,0.4);
		color: #0f1e2e;
		transition: border-color 0.15s ease, box-shadow 0.15s ease;
	}
	.input:focus {
		outline: none;
		border-color: #204a77;
		box-shadow: 0 0 0 3px rgba(32,74,119,0.1);
	}

	.cta {
		box-sizing: border-box;
		display: flex; align-items: center; justify-content: center;
		gap: 0.5rem;
		width: 100%;
		padding: 1rem 1.5rem;
		background: #204a77;
		color: #fff;
		font-size: 0.92rem; font-weight: 600;
		letter-spacing: 0.02em;
		border: none; border-radius: 8px;
		cursor: pointer;
		transition: background 0.15s ease, transform 0.15s ease;
	}
	.cta:hover { background: #1a3d63; transform: translateY(-1px); }
	.arrow { transition: transform 0.2s ease; }
	.cta:hover .arrow { transform: translateX(3px); }

	.micro {
		margin: 0.25rem 0 0;
		font-size: 0.74rem;
		color: #6b7c92;
		text-align: center;
	}

	@media (max-width: 540px) {
		.card { padding: 1.5rem; border-radius: 12px; }
		.form-grid { grid-template-columns: 1fr; }
	}
</style>
