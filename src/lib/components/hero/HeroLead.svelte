<script>
	import { heroTrustStats } from '$lib/data/heroCategories.js';
</script>

<div class="lead">
	<div class="eyebrow">
		<span class="dot"></span>
		<span>Insurance brokerage · Canada</span>
	</div>

	<h1 class="headline">
		Insurance,
		<span class="accent">simplified.</span>
	</h1>

	<p class="sub">
		Tell us what you want to insure. We compare offers from 20+ Canadian insurers
		and come back with a tailored quote — usually within 15 minutes.
	</p>

	<div class="trust">
		{#each heroTrustStats as s}
			<div class="trust-item">
				<div class="trust-value">{s.value}</div>
				<div class="trust-label">{s.label}</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.lead {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 4rem 3rem 4rem 0;
		max-width: 36rem;
	}

	.eyebrow {
		display: inline-flex; align-items: center; gap: 0.6rem;
		font-size: 0.72rem; font-weight: 600;
		letter-spacing: 0.16em; text-transform: uppercase;
		color: #4a6786;
		margin-bottom: 1.5rem;
	}
	.dot {
		width: 7px; height: 7px; border-radius: 50%;
		background: #30c47a;
		box-shadow: 0 0 0 4px rgba(48,196,122,0.18);
	}

	.headline {
		margin: 0;
		font-size: clamp(2.5rem, 5.2vw, 4.4rem);
		font-weight: 300;
		letter-spacing: -0.025em;
		line-height: 1.02;
		color: #0f1e2e;
	}
	.headline .accent {
		display: block;
		font-weight: 700;
		color: #204a77;
	}

	.sub {
		margin: 1.8rem 0 0;
		font-size: clamp(1rem, 1.2vw, 1.1rem);
		font-weight: 400;
		line-height: 1.65;
		color: #4a5a6e;
		max-width: 30rem;
	}

	.trust {
		display: flex;
		gap: 2.5rem;
		margin-top: 2.8rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e9ef;
	}
	.trust-value {
		font-size: 1.55rem;
		font-weight: 700;
		color: #204a77;
		letter-spacing: -0.02em;
	}
	.trust-label {
		font-size: 0.78rem;
		color: #6b7c92;
		margin-top: 0.15rem;
	}

	@media (max-width: 980px) {
		.lead { padding: 3rem 0 1.5rem; max-width: 100%; }
		.trust { gap: 1.5rem; margin-top: 2rem; padding-top: 1.5rem; }
	}
</style>
