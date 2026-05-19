<script>
	import { onMount } from 'svelte';
	import HeroLead from './HeroLead.svelte';
	import QuoteFinderCard from './QuoteFinderCard.svelte';
	import { heroBackgrounds } from '$lib/data/heroCategories.js';

	let bgIdx = $state(0);
	const bg = $derived(heroBackgrounds[bgIdx] || '');

	onMount(() => {
		if (heroBackgrounds.length) bgIdx = Math.floor(Math.random() * heroBackgrounds.length);
	});
</script>

<section class="hero">
	<div class="bg-photo" style={bg ? `background-image: url('${bg}');` : ''}></div>
	<div class="bg-wash"></div>
	<div class="bg-pattern"></div>
	<div class="bg-glow"></div>

	<div class="inner">
		<div class="left">
			<HeroLead />
		</div>
		<div class="right">
			<QuoteFinderCard />
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		color: #0f1e2e;
		overflow: hidden;
		padding-top: 3rem;
		isolation: isolate;
	}

	.bg-photo {
		position: absolute; inset: 0;
		background-size: cover;
		background-position: center 15%;
		transform: scale(1.05);
		z-index: -3;
	}

	.bg-wash {
		position: absolute; inset: 0;
		background:
			linear-gradient(95deg,
				rgba(247,250,255,0.95) 0%,
				rgba(247,250,255,0.78) 35%,
				rgba(247,250,255,0.15) 70%,
				rgba(247,250,255,0) 100%),
			linear-gradient(180deg,
				rgba(255,255,255,0) 0%,
				rgba(255,255,255,0.1) 60%,
				rgba(255,255,255,0.7) 100%);
		z-index: -2;
	}

	.bg-pattern {
		position: absolute; inset: 0;
		background-image:
			radial-gradient(circle, rgba(32,74,119,0.08) 1px, transparent 1px);
		background-size: 22px 22px;
		mask-image: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 75%);
		-webkit-mask-image: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 75%);
		pointer-events: none;
		z-index: -1;
	}
	.bg-glow {
		position: absolute;
		top: -20%; right: -15%;
		width: 60%; height: 80%;
		background: radial-gradient(ellipse at center, rgba(200,169,110,0.22) 0%, transparent 65%);
		pointer-events: none;
		z-index: -1;
	}

	.inner {
		position: relative;
		max-width: 1280px;
		margin: 0 auto;
		padding: 1.5rem 1.5rem 3.5rem;
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: 3rem;
		align-items: center;
	}

	@media (max-width: 980px) {
		.hero { padding-top: 2.5rem; }
		.inner {
			grid-template-columns: 1fr;
			gap: 1.5rem;
			padding-bottom: 2.5rem;
		}
	}
</style>
