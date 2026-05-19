<script>
	import QuoteFullForm from './forms/QuoteFullForm.svelte';
	import ReferralForm from './forms/ReferralForm.svelte';
	import SectionHeader from './SectionHeader.svelte';
</script>

<section class="qr">
	<div class="qr-inner">
		<SectionHeader
			eyebrow="Get started"
			headline="Start your"
			headlineAccent="ease of mind here."
			sub="Request a personalized quote — or refer someone who could use one. We respond within 15 minutes during business hours."
			maxWidth="38rem"
		/>

		<div class="qr-grid">
			<article class="qr-card qr-card-primary">
				<header class="qr-card-head">
					<div class="qr-badge qr-badge-blue">
						<span class="fa fa-file-text-o"></span>
					</div>
					<div class="qr-card-meta">
						<span class="qr-chip blue">For yourself</span>
						<h3 class="qr-card-title">Get a quote</h3>
						<p class="qr-card-tag">Tell us about your situation and we'll come back with a tailored offer.</p>
					</div>
				</header>
				<QuoteFullForm />
			</article>

			<article class="qr-card qr-card-secondary">
				<header class="qr-card-head">
					<div class="qr-badge qr-badge-gold">
						<span class="fa fa-users"></span>
					</div>
					<div class="qr-card-meta">
						<span class="qr-chip gold">Know someone?</span>
						<h3 class="qr-card-title">Refer a client</h3>
						<p class="qr-card-tag">Introduce a friend or family member — we'll take it from there.</p>
					</div>
				</header>
				<ReferralForm />
			</article>
		</div>
	</div>
</section>

<style>
	.qr {
		position: relative;
		z-index: 10;
		background: linear-gradient(180deg, #f4f8fd 0%, #ffffff 100%);
		padding: 5rem 1.5rem;
	}
	.qr-inner { max-width: 1280px; margin: 0 auto; }

	.qr-grid {
		display: grid;
		grid-template-columns: 1.4fr 1fr;
		gap: 1.75rem;
		align-items: stretch;
	}

	.qr-card {
		display: flex;
		flex-direction: column;
		position: relative;
		--stripe-grad: linear-gradient(90deg, #204a77, #3a6ea8);
		background:
			var(--stripe-grad) top / 100% 4px no-repeat,
			linear-gradient(180deg, #fafcff 0%, #ffffff 130px),
			#ffffff;
		border-radius: 18px;
		padding: 2.25rem;
		border: 1px solid #eef1f5;
		box-shadow:
			0 1px 0 rgba(15,30,46,0.04),
			0 22px 56px -18px rgba(32,74,119,0.16);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}
	.qr-card:hover {
		transform: translateY(-2px);
		box-shadow:
			0 1px 0 rgba(15,30,46,0.04),
			0 28px 72px -18px rgba(32,74,119,0.22);
	}
	.qr-card-secondary {
		--stripe-grad: linear-gradient(90deg, #c8a96e, #e6c995);
	}

	.qr-card-head {
		display: flex; gap: 1.1rem;
		margin-bottom: 1.75rem;
		flex-shrink: 0;
	}
	.qr-badge {
		flex-shrink: 0;
		width: 56px; height: 56px;
		display: flex; align-items: center; justify-content: center;
		border-radius: 14px;
		font-size: 1.45rem;
	}
	.qr-badge-blue { background: #e8f0fa; color: #204a77; }
	.qr-badge-gold { background: #f7eede; color: #8a6f3a; }

	.qr-card-meta { display: flex; flex-direction: column; gap: 0.4rem; min-width: 0; }
	.qr-chip {
		align-self: flex-start;
		font-size: 0.66rem; font-weight: 700;
		letter-spacing: 0.18em; text-transform: uppercase;
		padding: 0.28rem 0.65rem;
		border-radius: 999px;
	}
	.qr-chip.blue { background: #e8f0fa; color: #204a77; }
	.qr-chip.gold { background: #f7eede; color: #8a6f3a; }

	.qr-card-title {
		margin: 0.15rem 0 0.3rem;
		font-size: clamp(1.5rem, 2.2vw, 1.85rem);
		font-weight: 600;
		color: #0f1e2e;
		letter-spacing: -0.015em;
	}
	.qr-card-tag {
		margin: 0;
		font-size: 0.92rem;
		color: #4a5a6e;
		line-height: 1.55;
	}

	@media (max-width: 980px) {
		.qr { padding: 3.5rem 1.25rem; }
		.qr-grid { grid-template-columns: 1fr; gap: 1.25rem; }
		.qr-card { padding: 1.75rem; }
	}
</style>
