<script>
	let {
		eyebrow = 'Browse coverage',
		headline = 'Choose your',
		headlineAccent = 'insurance.',
		sub = 'Explore our range of coverage options tailored to protect what matters most to you.',
		categories = [
			{ icon: 'fa fa-home',      label: 'Home',      tagline: 'House, condo or rental' },
			{ icon: 'fa fa-building',  label: 'Corporate', tagline: 'Commercial & liability' },
			{ icon: 'fa fa-car',       label: 'Auto',      tagline: 'Car, motorcycle, RV' },
			{ icon: 'fa fa-heartbeat', label: 'Life',      tagline: 'Family & income protection' },
			{ icon: 'fa fa-th-large',  label: 'Bundle',    tagline: 'Combine & save' }
		]
	} = $props();

	import SectionHeader from './SectionHeader.svelte';
</script>

<section class="ci">
	<div class="ci-inner">
		<SectionHeader {eyebrow} {headline} {headlineAccent} {sub} maxWidth="36rem" />

		<div class="cat-grid">
			{#each categories as cat, i}
				<a
					href="/our-services?type={cat.label.toLowerCase()}"
					class="card"
					class:cat-last={i === categories.length - 1 && categories.length % 2 !== 0}
				>
					<span class="card-icon {cat.icon}"></span>
					<h4 class="card-title">{cat.label}</h4>
					<p class="card-tag">{cat.tagline}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.ci {
		background: #fff;
		padding: 5rem 1.5rem;
	}
	.ci-inner { max-width: 1180px; margin: 0 auto; }

	.cat-grid {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 1rem;
	}

	.card {
		aspect-ratio: 1 / 1;
		display: flex; flex-direction: column;
		justify-content: center; align-items: center;
		gap: 0.5rem;
		padding: 1rem;
		border: 1.5px solid #e5e9ef;
		border-radius: 10px;
		background: #fff;
		text-decoration: none;
		transition: border-color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;
	}
	.card:hover {
		border-color: #204a77;
		background: #f4f8fd;
		box-shadow: 0 0 0 3px rgba(32,74,119,0.08);
		transform: translateY(-2px);
	}
	.card-icon {
		color: #204a77;
		font-size: 2rem;
		margin-bottom: 0.4rem;
		transition: transform 0.18s ease;
	}
	.card:hover .card-icon { transform: scale(1.08); }
	.card-title {
		margin: 0;
		font-size: 1rem; font-weight: 600;
		color: #0f1e2e;
		letter-spacing: -0.005em;
	}
	.card-tag {
		margin: 0;
		font-size: 0.74rem;
		font-weight: 400;
		color: #6b7c92;
		text-align: center;
		line-height: 1.35;
	}

	@media (max-width: 767px) {
		.ci { padding: 3rem 1rem; }
		.cat-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
		.card-icon { font-size: 2.6rem; margin-bottom: 0.6rem; }
		.cat-last { grid-column: 1 / -1; aspect-ratio: 2 / 1; }
	}
</style>
