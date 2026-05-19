<script>
	import SectionHeader from './SectionHeader.svelte';
	// EtiQ brand colors sampled from https://etiq.ca/wp-content/uploads/2024/10/etiq-logo-colored.png
	//   purple: #784878 · coral: #f09078 · orange: #f0a878 · mauve: #d890c0
</script>

<section class="pt">
	<div class="pt-inner">
		<SectionHeader
			eyebrow="Joint venture"
			headline="Stronger"
			headlineAccent="together with EtiQ."
			sub="Our partnership with EtiQ combines our local advisory expertise with one of Canada's most respected insurer groups — giving you broader coverage options, faster decisions, and a single point of contact you already trust."
			eyebrowAccent="purple"
			accent="gradient"
			maxWidth="44rem"
		/>

		<div class="pt-card">
			<div class="brands">
				<div class="brand">
					<img src="/assets/images/elhageassurances-logowhite.svg" alt="El-Hage Assurances" class="brand-logo" />
					<span class="brand-label">El-Hage Assurances</span>
				</div>

				<div class="brand-join">
					<span class="join-bar"></span>
					<span class="join-mark">×</span>
					<span class="join-bar"></span>
				</div>

				<div class="brand">
					<div class="partner-stack">
						<img src="/assets/images/etiq-logo-colored.png" alt="etiQ" class="partner-icon" />
						<span class="partner-wordmark">etiQ</span>
					</div>
					<span class="brand-label">Insurer partner network</span>
				</div>
			</div>

			<div class="benefits">
				<div class="benefit">
					<span class="benefit-icon fa fa-globe"></span>
					<div class="benefit-text">
						<div class="benefit-title">Broader market access</div>
						<div class="benefit-sub">Access EtiQ's full network of insurer partners through one advisor.</div>
					</div>
				</div>
				<div class="benefit">
					<span class="benefit-icon fa fa-bolt"></span>
					<div class="benefit-text">
						<div class="benefit-title">Faster decisions</div>
						<div class="benefit-sub">Direct underwriting channels mean quicker quotes and faster claims.</div>
					</div>
				</div>
				<div class="benefit">
					<span class="benefit-icon fa fa-shield"></span>
					<div class="benefit-text">
						<div class="benefit-title">Backed by scale</div>
						<div class="benefit-sub">EtiQ's national footprint, your local El-Hage relationship.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.pt {
		background:
			radial-gradient(ellipse at 80% 0%, rgba(240,144,120,0.10) 0%, transparent 55%),
			radial-gradient(ellipse at 10% 100%, rgba(120,72,120,0.10) 0%, transparent 60%),
			linear-gradient(180deg, #fff9f5 0%, #ffffff 100%);
		padding: 5rem 1.5rem;
	}
	.pt-inner { max-width: 1100px; margin: 0 auto; }

	.pt-card {
		position: relative;
		background:
			radial-gradient(ellipse at top right, rgba(240,144,120,0.22) 0%, transparent 55%),
			radial-gradient(ellipse at bottom left, rgba(216,144,192,0.18) 0%, transparent 55%),
			linear-gradient(180deg, #3d2540 0%, #221428 100%);
		color: #fff;
		border-radius: 22px;
		padding: 3rem 2.5rem;
		box-shadow: 0 24px 56px -22px rgba(45,26,47,0.55);
		overflow: hidden;
	}
	.pt-card::before {
		content: '';
		position: absolute; top: 0; left: 0; right: 0; height: 3px;
		background: linear-gradient(90deg, #784878 0%, #d890c0 35%, #f09078 70%, #f0a878 100%);
		border-radius: 22px 22px 0 0;
	}

	.brands {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		gap: 2rem;
		padding-bottom: 2.5rem;
		margin-bottom: 2.5rem;
		border-bottom: 1px solid rgba(240,144,120,0.18);
	}

	.brand {
		display: flex; flex-direction: column;
		align-items: center;
		gap: 0.85rem;
	}
	.brand-logo {
		height: 4.5rem;
		width: auto;
	}
	.partner-stack {
		display: flex; align-items: center; gap: 0.75rem;
		height: 4.5rem;
	}
	.partner-icon {
		height: 4.5rem;
		width: auto;
		display: block;
	}
	.partner-wordmark {
		font-size: 2.4rem; font-weight: 700;
		letter-spacing: -0.02em;
		color: #fff;
		line-height: 1;
	}
	.brand-label {
		font-size: 0.74rem; font-weight: 600;
		letter-spacing: 0.18em; text-transform: uppercase;
		color: rgba(255,255,255,0.6);
	}

	.brand-join {
		display: flex; flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}
	.join-bar {
		width: 1px; height: 1.5rem;
		background: rgba(240,144,120,0.5);
	}
	.join-mark {
		font-size: 1.4rem; font-weight: 300;
		background: linear-gradient(135deg, #c8a96e 0%, #f09078 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
		line-height: 1;
	}

	.benefits {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.5rem;
	}
	.benefit { display: flex; gap: 0.85rem; align-items: flex-start; }
	.benefit-icon {
		flex-shrink: 0;
		width: 36px; height: 36px;
		display: inline-flex; align-items: center; justify-content: center;
		background: rgba(240,144,120,0.18);
		color: #f0a878;
		border-radius: 8px;
		font-size: 0.95rem;
	}
	.benefit-title {
		font-size: 0.95rem; font-weight: 600;
		color: #fff;
		margin-bottom: 0.15rem;
	}
	.benefit-sub {
		font-size: 0.85rem; line-height: 1.5;
		color: rgba(255,255,255,0.6);
	}

	@media (max-width: 820px) {
		.pt { padding: 3.5rem 1.25rem; }
		.pt-head { margin-bottom: 2rem; }
		.pt-card { padding: 2rem 1.5rem; }
		.brands {
			grid-template-columns: 1fr;
			gap: 1.5rem;
			padding-bottom: 2rem; margin-bottom: 2rem;
		}
		.brand-join { flex-direction: row; }
		.join-bar { width: 1.5rem; height: 1px; }
		.benefits { grid-template-columns: 1fr; gap: 1.25rem; }
	}
</style>
