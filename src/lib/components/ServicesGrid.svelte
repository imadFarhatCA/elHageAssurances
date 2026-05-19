<script>
	import SectionHeader from './SectionHeader.svelte';

	let {
		eyebrow = 'Our coverage areas',
		headline = 'We stand by our clients,',
		headlineAccent = 'at every step.',
		sub = 'Three pillars of coverage built around real-life risks and goals.',
		services = []
	} = $props();
</script>

<section class="sg">
	<div class="sg-inner">
		<SectionHeader {eyebrow} {headline} {headlineAccent} {sub} maxWidth="42rem" />

		<div class="sg-grid">
			{#each services as svc}
				<article class="card">
					<div class="card-img">
						<img src={svc.image} alt={svc.title} loading="lazy" />
					</div>
					<div class="card-body">
						<span class="card-chip">{svc.label}</span>
						<h3 class="card-title">{svc.title}</h3>
						<p class="card-text">{svc.text}</p>

						<ul class="hl-list">
							{#each svc.highlights as h}
								<li class="hl-item">
									<span class="hl-check">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
									</span>
									<span class="hl-text">{h}</span>
								</li>
							{/each}
						</ul>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.sg {
		background: #fff;
		padding: 5rem 1.5rem;
	}
	.sg-inner { max-width: 1280px; margin: 0 auto; }

	.sg-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.75rem;
	}

	.card {
		display: flex; flex-direction: column;
		background: #fff;
		border: 1px solid #eef1f5;
		border-radius: 18px;
		overflow: hidden;
		box-shadow: 0 1px 0 rgba(15,30,46,0.04), 0 18px 48px -22px rgba(32,74,119,0.14);
		transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
	}
	.card:hover {
		transform: translateY(-4px);
		border-color: #d4dde8;
		box-shadow: 0 1px 0 rgba(15,30,46,0.04), 0 28px 64px -22px rgba(32,74,119,0.22);
	}

	.card-img {
		aspect-ratio: 16 / 10;
		background: #f4f8fd;
		overflow: hidden;
	}
	.card-img img {
		display: block; width: 100%; height: 100%;
		object-fit: cover; object-position: center;
		transition: transform 0.6s ease;
	}
	.card:hover .card-img img { transform: scale(1.04); }

	.card-body {
		padding: 1.75rem;
		display: flex; flex-direction: column; flex: 1;
		gap: 0.65rem;
	}
	.card-chip {
		align-self: flex-start;
		font-size: 0.66rem; font-weight: 700;
		letter-spacing: 0.18em; text-transform: uppercase;
		padding: 0.28rem 0.65rem;
		background: #e8f0fa; color: #204a77;
		border-radius: 999px;
		margin-bottom: 0.25rem;
	}
	.card-title {
		margin: 0;
		font-size: 1.35rem; font-weight: 600;
		color: #0f1e2e; letter-spacing: -0.01em;
	}
	.card-text {
		margin: 0;
		font-size: 0.94rem; line-height: 1.65;
		color: #4a5a6e;
	}

	.hl-list {
		list-style: none;
		padding: 0; margin: 1rem 0 0;
		display: flex; flex-direction: column;
		gap: 0.55rem;
	}
	.hl-item {
		display: flex; align-items: center; gap: 0.7rem;
		padding: 0.7rem 0.95rem;
		background: #fff;
		border: 1.5px solid #e5e9ef;
		border-radius: 10px;
		font-size: 0.9rem;
		color: #0f1e2e;
		font-weight: 500;
		transition: border-color 0.15s ease, background 0.15s ease, transform 0.15s ease;
	}
	.hl-item:hover {
		border-color: #c8a96e;
		background: #fffaf0;
		transform: translateX(2px);
	}
	.hl-check {
		flex-shrink: 0;
		width: 22px; height: 22px;
		display: inline-flex; align-items: center; justify-content: center;
		background: #f7eede; color: #8a6f3a;
		border-radius: 6px;
	}
	.hl-text { line-height: 1.4; }

	@media (max-width: 980px) {
		.sg { padding: 3.5rem 1.25rem; }
		.sg-grid { grid-template-columns: 1fr; gap: 1.25rem; }
	}
</style>
