<script>
	import SectionHeader from './SectionHeader.svelte';

	let {
		eyebrow = 'A look back',
		headline = 'Past',
		headlineAccent = 'events.',
		sub = 'Moments from our community, advisory clinics, and educational forums.',
		events = []
	} = $props();
</script>

<section class="pe">
	<div class="pe-inner">
		<SectionHeader {eyebrow} {headline} {headlineAccent} {sub} maxWidth="40rem" />

		<div class="pe-list">
			{#each events as ev, i}
				<article class="row" class:reverse={i % 2 === 1}>
					<div class="row-img">
						<img src={ev.image} alt={ev.title} loading="lazy" />
					</div>
					<div class="row-content">
						<div class="meta">
							<span class="meta-chip">
								<span class="fa fa-calendar"></span> {ev.date}
							</span>
							<span class="meta-chip">
								<span class="fa fa-map-marker"></span> {ev.location}
							</span>
						</div>
						<h3 class="row-title">{ev.title}</h3>
						<p class="row-text">{ev.text}</p>
						<div class="row-footer">
							<div class="rule-thin"></div>
							<span class="row-tag">Past event</span>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.pe {
		background: #fff;
		padding: 5rem 1.5rem;
	}
	.pe-inner { max-width: 1200px; margin: 0 auto; }

	.pe-list { display: flex; flex-direction: column; gap: 2rem; }

	.row {
		display: grid;
		grid-template-columns: 1.05fr 1fr;
		gap: 2.5rem;
		align-items: center;
		background: #fff;
		border: 1px solid #eef1f5;
		border-radius: 18px;
		padding: 1.5rem;
		box-shadow: 0 1px 0 rgba(15,30,46,0.04), 0 18px 48px -22px rgba(32,74,119,0.14);
		transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
	}
	.row:hover {
		transform: translateY(-3px);
		border-color: #d4dde8;
		box-shadow: 0 1px 0 rgba(15,30,46,0.04), 0 28px 64px -22px rgba(32,74,119,0.22);
	}
	.row.reverse .row-img { order: 2; }

	.row-img {
		border-radius: 12px;
		overflow: hidden;
		aspect-ratio: 16 / 10;
		background: #f4f8fd;
	}
	.row-img img {
		display: block;
		width: 100%; height: 100%;
		object-fit: cover;
		object-position: center;
		transition: transform 0.6s ease;
	}
	.row:hover .row-img img { transform: scale(1.04); }

	.row-content { padding: 1rem 0.5rem 1rem 1rem; }

	.meta { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.1rem; }
	.meta-chip {
		display: inline-flex; align-items: center; gap: 0.4rem;
		font-size: 0.74rem; font-weight: 600;
		color: #4a5a6e;
		padding: 0.35rem 0.7rem;
		background: #f4f8fd;
		border: 1px solid #e5e9ef;
		border-radius: 999px;
	}
	.meta-chip .fa { color: #c8a96e; font-size: 0.78rem; }

	.row-title {
		margin: 0 0 0.85rem;
		font-size: clamp(1.4rem, 2vw, 1.75rem);
		font-weight: 600;
		color: #0f1e2e;
		letter-spacing: -0.015em;
		line-height: 1.2;
	}
	.row-text {
		margin: 0 0 1.5rem;
		font-size: 1rem; line-height: 1.7;
		color: #4a5a6e;
	}

	.row-footer {
		display: flex; align-items: center; gap: 1rem;
	}
	.rule-thin { flex: 1; height: 1px; background: #e5e9ef; }
	.row-tag {
		font-size: 0.66rem; font-weight: 700;
		letter-spacing: 0.2em; text-transform: uppercase;
		color: #8b97a8;
	}

	@media (max-width: 900px) {
		.pe { padding: 3.5rem 1.25rem; }
		.row { grid-template-columns: 1fr; gap: 1.25rem; padding: 1.25rem; }
		.row.reverse .row-img { order: 0; }
		.row-content { padding: 0.25rem 0.5rem 0.5rem; }
	}
</style>
