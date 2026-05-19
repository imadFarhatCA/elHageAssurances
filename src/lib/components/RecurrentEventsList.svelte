<script>
	import SectionHeader from './SectionHeader.svelte';

	let {
		eyebrow = 'Every year, without exception',
		headline = 'Yearly recurrent',
		headlineAccent = 'events.',
		sub = 'Mark your calendar — we host these every year for our community.',
		events = []
	} = $props();
</script>

<section class="re">
	<div class="re-inner">
		<SectionHeader {eyebrow} {headline} {headlineAccent} {sub} maxWidth="40rem" />

		<div class="re-grid">
			{#each events as ev}
				<article class="card">
					<div class="card-head">
						<div class="card-badge"><span class={ev.icon}></span></div>
						<div class="card-month">
							<span class="month">{ev.month}</span>
							<span class="cycle">↻ Yearly</span>
						</div>
					</div>

					<h3 class="card-title">{ev.title}</h3>
					<p class="card-location">
						<span class="fa fa-map-marker"></span> {ev.location}
					</p>
					<p class="card-text">{ev.text}</p>

					<button type="button" class="card-cta" disabled aria-disabled="true">
						Register interest
					</button>
					<p class="card-microcopy">Online registration coming soon</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.re {
		background: linear-gradient(180deg, #ffffff 0%, #f4f8fd 100%);
		padding: 5rem 1.5rem;
	}
	.re-inner { max-width: 1280px; margin: 0 auto; }

	.re-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.5rem;
	}

	.card {
		display: flex; flex-direction: column;
		position: relative;
		background:
			linear-gradient(90deg, #204a77, #3a6ea8) top / 100% 4px no-repeat,
			linear-gradient(180deg, #fafcff 0%, #ffffff 130px),
			#ffffff;
		border: 1px solid #eef1f5;
		border-radius: 16px;
		padding: 2rem;
		box-shadow: 0 1px 0 rgba(15,30,46,0.04), 0 16px 40px -18px rgba(32,74,119,0.16);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}
	.card:hover {
		transform: translateY(-3px);
		box-shadow: 0 1px 0 rgba(15,30,46,0.04), 0 24px 56px -18px rgba(32,74,119,0.22);
	}

	.card-head {
		display: flex; align-items: center; gap: 0.85rem;
		margin-bottom: 1.4rem;
	}
	.card-badge {
		flex-shrink: 0;
		width: 52px; height: 52px;
		display: flex; align-items: center; justify-content: center;
		background: #e8f0fa; color: #204a77;
		border-radius: 12px;
		font-size: 1.35rem;
	}
	.card-month {
		display: flex; flex-direction: column;
		gap: 0.15rem;
	}
	.month {
		font-size: 1.1rem; font-weight: 700;
		color: #0f1e2e; letter-spacing: 0.1em;
	}
	.cycle {
		font-size: 0.7rem; font-weight: 600;
		color: #c8a96e; letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.card-title {
		margin: 0 0 0.6rem;
		font-size: 1.25rem; font-weight: 600;
		color: #0f1e2e; letter-spacing: -0.01em;
	}
	.card-location {
		margin: 0 0 1rem;
		font-size: 0.85rem; color: #6b7c92;
	}
	.card-location .fa { color: #c8a96e; margin-right: 0.4rem; }
	.card-text {
		margin: 0 0 1.5rem;
		font-size: 0.92rem; line-height: 1.6;
		color: #4a5a6e;
	}

	.card-cta {
		margin-top: auto;
		box-sizing: border-box;
		display: flex; align-items: center; justify-content: center;
		width: 100%;
		padding: 0.85rem 1.25rem;
		background: #eef1f5;
		color: #8b97a8;
		font-size: 0.8rem; font-weight: 700;
		letter-spacing: 0.12em; text-transform: uppercase;
		border: 1px solid #e5e9ef;
		border-radius: 8px;
		cursor: not-allowed;
		font-family: inherit;
	}
	.card-microcopy {
		margin: 0.5rem 0 0;
		text-align: center;
		font-size: 0.72rem; color: #8b97a8;
		font-style: italic;
	}

	@media (max-width: 900px) {
		.re { padding: 3.5rem 1.25rem; }
		.re-grid { grid-template-columns: 1fr; gap: 1.25rem; }
		.card { padding: 1.75rem; }
	}
</style>
