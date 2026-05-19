<script>
	import SectionHeader from './SectionHeader.svelte';

	const promises = [
		{ icon: 'fa fa-search',    title: 'Choosing the right coverage' },
		{ icon: 'fa fa-life-ring', title: 'Standing by you during claims' },
		{ icon: 'fa fa-refresh',   title: 'Adapting as your life grows' }
	];

	const services = [
		{
			icon: 'fa fa-car',
			tone: 'blue',
			title: 'Motor Insurance',
			text: 'Coverage for your car, motorcycle, or RV — protecting against accidents, theft, fire, and third-party liability.',
			href: '/our-services?type=auto'
		},
		{
			icon: 'fa fa-home',
			tone: 'gold',
			title: 'Property Insurance',
			text: 'Secure your home, condo, or commercial property against fire, theft, water damage, and natural disasters.',
			href: '/our-services?type=home'
		},
		{
			icon: 'fa fa-heartbeat',
			tone: 'blue',
			title: 'Health Insurance',
			text: 'Medical coverage for individuals, families, and companies with access to trusted clinics and hospitals.',
			href: '/our-services?type=health'
		}
	];
</script>

<section class="oc">
	<div class="inner">
		<SectionHeader
			eyebrow="Our commitment"
			headline="We stand with you,"
			headlineAccent="at every step."
			sub="From the day you sign your first policy to the day you file your hundredth claim, your trust is the only thing we don't compromise on."
			maxWidth="44rem"
		/>

		<div class="oc-promises">
			{#each promises as p}
				<div class="promise">
					<span class="promise-icon {p.icon}"></span>
					<span class="promise-text">{p.title}</span>
				</div>
			{/each}
		</div>

		<div class="oc-grid">
			{#each services as svc}
				<a href={svc.href} class="card">
					<div class="card-icon tone-{svc.tone}">
						<span class={svc.icon}></span>
					</div>
					<h3 class="card-title">{svc.title}</h3>
					<p class="card-text">{svc.text}</p>
					<span class="card-link">View details <span class="arrow">→</span></span>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.oc {
		background: #fff;
		padding: 5rem 1.5rem;
	}
	.inner { max-width: 1200px; margin: 0 auto; }

	.oc-promises {
		display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem;
		margin-top: -1.5rem;
		margin-bottom: 3.5rem;
	}
	.promise {
		display: inline-flex; align-items: center; gap: 0.55rem;
		padding: 0.55rem 1rem;
		background: #f4f8fd;
		border: 1px solid #e3ecf6;
		border-radius: 999px;
		font-size: 0.86rem;
		color: #204a77;
		font-weight: 500;
	}
	.promise-icon { color: #c8a96e; font-size: 0.9rem; }

	.oc-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.75rem;
	}

	.card {
		display: flex; flex-direction: column; gap: 0.75rem;
		padding: 2.25rem 2rem;
		background: linear-gradient(180deg, #fafcff 0%, #ffffff 130px), #ffffff;
		border: 1px solid #eef1f5;
		border-radius: 16px;
		text-decoration: none;
		color: inherit;
		box-shadow: 0 1px 0 rgba(15,30,46,0.04), 0 12px 32px -16px rgba(32,74,119,0.12);
		transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
	}
	.card:hover {
		transform: translateY(-4px);
		border-color: #d4dde8;
		box-shadow: 0 1px 0 rgba(15,30,46,0.04), 0 24px 56px -18px rgba(32,74,119,0.22);
	}

	.card-icon {
		width: 64px; height: 64px;
		display: flex; align-items: center; justify-content: center;
		border-radius: 14px;
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		transition: transform 0.25s ease;
	}
	.card:hover .card-icon { transform: scale(1.06); }
	.tone-blue { background: #e8f0fa; color: #204a77; }
	.tone-gold { background: #f7eede; color: #8a6f3a; }

	.card-title {
		margin: 0;
		font-size: 1.25rem; font-weight: 600;
		color: #0f1e2e;
		letter-spacing: -0.01em;
	}
	.card-text {
		margin: 0;
		font-size: 0.94rem; line-height: 1.6;
		color: #4a5a6e;
	}
	.card-link {
		margin-top: auto;
		padding-top: 0.85rem;
		display: inline-flex; align-items: center; gap: 0.4rem;
		font-size: 0.85rem; font-weight: 600;
		color: #204a77;
		letter-spacing: 0.01em;
	}
	.card-link .arrow { transition: transform 0.2s ease; }
	.card:hover .card-link .arrow { transform: translateX(4px); }

	@media (max-width: 900px) {
		.oc { padding: 3.5rem 1.25rem; }
		.oc-head { margin-bottom: 2.5rem; }
		.oc-grid { grid-template-columns: 1fr; gap: 1.25rem; }
		.card { padding: 1.75rem; }
	}
</style>
