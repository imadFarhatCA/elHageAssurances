<script>
	import SectionHeader from './SectionHeader.svelte';

	let {
		eyebrow = 'Meet the team',
		headline = 'The people behind',
		headlineAccent = 'the promise.',
		sub = 'Bilingual, fully licensed, and on your side from quote to claim.',
		featured = [],
		featuredAlt = 'Our team',
		members = []
	} = $props();
</script>

<section class="team">
	<div class="inner">
		<SectionHeader {eyebrow} {headline} {headlineAccent} {sub} maxWidth="44rem" />

		{#if featured.length}
			<div class="featured featured-{featured.length}">
				{#each featured as src}
					<figure class="feat">
						<img {src} alt={featuredAlt} loading="lazy" />
						<div class="feat-fade"></div>
					</figure>
				{/each}
			</div>
		{/if}

		<div class="grid">
			{#each members as m}
				<article class="card">
					<div class="card-img">
						<img src={m.image} alt={m.name} loading="lazy" />
					</div>
					<div class="card-body">
						<h3 class="card-name">{m.name}</h3>
						<p class="card-role">{m.role}</p>
						{#if m.bio}<p class="card-bio">{m.bio}</p>{/if}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.team {
		background: #fff;
		padding: 5rem 1.5rem;
	}
	.inner { max-width: 1200px; margin: 0 auto; }

	.featured {
		display: grid;
		gap: 1.25rem;
		margin-bottom: 3rem;
	}
	.featured-1 { grid-template-columns: 1fr; }
	.featured-2 { grid-template-columns: 1fr 1fr; }
	.featured-3 { grid-template-columns: repeat(3, 1fr); }

	.feat {
		position: relative;
		margin: 0;
		border-radius: 18px;
		overflow: hidden;
		box-shadow: 0 1px 0 rgba(15,30,46,0.04), 0 22px 56px -18px rgba(32,74,119,0.16);
	}
	.featured-1 .feat img { height: clamp(280px, 42vw, 460px); object-fit: cover; }
	.featured-2 .feat img { aspect-ratio: 3 / 4; height: auto; }
	.featured-3 .feat img { aspect-ratio: 3 / 4; height: auto; }
	.feat img {
		display: block;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
	.feat-fade {
		position: absolute; inset: 0;
		background: linear-gradient(180deg, transparent 60%, rgba(15,30,46,0.18) 100%);
		pointer-events: none;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.5rem;
	}

	.card {
		display: flex; flex-direction: column;
		background: #fff;
		border: 1px solid #eef1f5;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 1px 0 rgba(15,30,46,0.04), 0 12px 32px -16px rgba(32,74,119,0.12);
		transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
	}
	.card:hover {
		transform: translateY(-4px);
		border-color: #d4dde8;
		box-shadow: 0 1px 0 rgba(15,30,46,0.04), 0 24px 56px -18px rgba(32,74,119,0.22);
	}
	.card-img {
		aspect-ratio: 4 / 5;
		overflow: hidden;
		background: #f4f8fd;
	}
	.card-img img {
		display: block;
		width: 100%; height: 100%;
		object-fit: cover;
		object-position: center top;
		transition: transform 0.6s ease;
	}
	.card:hover .card-img img { transform: scale(1.04); }

	.card-body { padding: 1.5rem 1.5rem 1.75rem; }
	.card-name {
		margin: 0;
		font-size: 1.2rem; font-weight: 600;
		color: #0f1e2e; letter-spacing: -0.01em;
	}
	.card-role {
		margin: 0.3rem 0 0.7rem;
		font-size: 0.78rem; font-weight: 700;
		letter-spacing: 0.14em; text-transform: uppercase;
		color: #c8a96e;
	}
	.card-bio {
		margin: 0;
		font-size: 0.92rem; line-height: 1.6;
		color: #4a5a6e;
	}

	@media (max-width: 900px) {
		.team { padding: 3.5rem 1.25rem; }
		.featured { margin-bottom: 2rem; gap: 1rem; }
		.featured-2, .featured-3 { grid-template-columns: 1fr; }
		.feat { border-radius: 14px; }
		.grid { grid-template-columns: 1fr; gap: 1rem; }
	}
</style>
