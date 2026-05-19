<script>
	import SectionHeader from './SectionHeader.svelte';

	const steps = [
		{
			num: '01',
			icon: 'fa fa-pencil-square-o',
			title: 'Tell us what you need',
			text: 'Pick a coverage type and share a few quick details. Takes less than a minute.'
		},
		{
			num: '02',
			icon: 'fa fa-balance-scale',
			title: 'We compare 20+ insurers',
			text: 'Our licensed advisors shop the market and match you with the right insurer for your situation.'
		},
		{
			num: '03',
			icon: 'fa fa-check-circle',
			title: 'You get a tailored quote',
			text: 'A personalized offer within 15 minutes during business hours. No obligation, no fees.'
		}
	];
</script>

<section class="how">
	<div class="inner">
		<SectionHeader
			eyebrow="How it works"
			headline="Simple, transparent, fast."
			sub="Three steps between you and the right coverage — no jargon, no hard sells."
			maxWidth="40rem"
		/>

		<div class="steps">
			<div class="track"></div>
			{#each steps as step, i}
				<div class="step">
					<div class="step-num">{step.num}</div>
					<div class="step-icon"><span class={step.icon}></span></div>
					<h3 class="step-title">{step.title}</h3>
					<p class="step-text">{step.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.how {
		background: #fff;
		padding: 5rem 1.5rem;
	}

	.inner {
		max-width: 1180px;
		margin: 0 auto;
	}

	.steps {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 3rem;
	}
	.track {
		position: absolute;
		top: 60px;
		left: 16%; right: 16%;
		height: 1px;
		background: linear-gradient(90deg,
			transparent 0%, #d4dde8 12%, #d4dde8 88%, transparent 100%);
		z-index: 0;
	}

	.step {
		position: relative;
		z-index: 1;
		text-align: center;
		padding: 0 0.5rem;
	}
	.step-num {
		display: inline-block;
		width: 120px; height: 120px;
		line-height: 120px;
		background: #fff;
		border: 1.5px solid #e5e9ef;
		border-radius: 50%;
		color: #204a77;
		font-size: 1.5rem; font-weight: 700;
		letter-spacing: 0.06em;
		margin-bottom: 1.75rem;
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
	}
	.step:hover .step-num {
		border-color: #204a77;
		box-shadow: 0 0 0 5px rgba(32,74,119,0.08);
	}
	.step-icon {
		font-size: 2.2rem;
		color: #c8a96e;
		margin-bottom: 1.1rem;
	}
	.step-title {
		margin: 0 0 0.8rem;
		font-size: clamp(1.35rem, 1.65vw, 1.55rem);
		font-weight: 600;
		color: #0f1e2e;
		letter-spacing: -0.01em;
	}
	.step-text {
		margin: 0 auto;
		max-width: 22rem;
		font-size: clamp(1rem, 1.15vw, 1.1rem);
		line-height: 1.65;
		color: #4a5a6e;
	}

	@media (max-width: 820px) {
		.how { padding: 3.5rem 1.25rem; }
		.steps { grid-template-columns: 1fr; gap: 2.5rem; }
		.track { display: none; }
	}
</style>
