<script>
	import SectionHeader from './SectionHeader.svelte';

	const items = [
		{
			icon: 'fa fa-unlock-alt',
			word: 'Independent',
			title: 'Not tied to one insurer.',
			text: 'As an independent broker, we shop the market on your behalf — comparing coverage, terms, and pricing from 20+ trusted insurers to find the best fit for you.'
		},
		{
			icon: 'fa fa-graduation-cap',
			word: 'Experienced',
			title: 'Decades of know-how.',
			text: 'Our advisors are fully licensed across Québec and Ontario, with decades of combined experience across personal, commercial, and life insurance lines.'
		},
		{
			icon: 'fa fa-handshake-o',
			word: 'On your side',
			title: 'Long after the sale.',
			text: 'We review your policies annually, help you navigate every claim, and adjust your coverage as your life evolves — your interests come first.'
		}
	];
</script>

<section class="wu">
	<div class="wu-inner">
		<SectionHeader
			eyebrow="Why El-Hage Assurances"
			headline="Independent. Experienced."
			headlineAccent="On your side."
			sub="Three reasons our clients stay with us — and refer their friends and family year after year."
			maxWidth="44rem"
		/>

		<div class="wu-grid">
			{#each items as it, i}
				<article class="card">
					<div class="card-num">0{i + 1}</div>
					<div class="card-icon"><span class={it.icon}></span></div>
					<div class="card-word">{it.word}</div>
					<h3 class="card-title">{it.title}</h3>
					<p class="card-text">{it.text}</p>
				</article>
			{/each}
		</div>

		<div class="wu-cta-row">
			<a href="/#quote" class="wu-cta">
				Get a free quote
				<span class="arrow">→</span>
			</a>
		</div>
	</div>
</section>

<style>
	.wu {
		background: linear-gradient(180deg, #f4f8fd 0%, #ffffff 100%);
		padding: 5rem 1.5rem;
	}
	.wu-inner { max-width: 1200px; margin: 0 auto; }

	.wu-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.5rem;
	}

	.card {
		position: relative;
		display: flex; flex-direction: column;
		padding: 2.25rem 2rem 2rem;
		background:
			linear-gradient(180deg, #fafcff 0%, #ffffff 120px),
			#ffffff;
		border: 1px solid #eef1f5;
		border-radius: 16px;
		box-shadow: 0 1px 0 rgba(15,30,46,0.04), 0 16px 40px -18px rgba(32,74,119,0.14);
		transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
	}
	.card:hover {
		transform: translateY(-4px);
		border-color: #d4dde8;
		box-shadow: 0 1px 0 rgba(15,30,46,0.04), 0 28px 64px -18px rgba(32,74,119,0.22);
	}

	.card-num {
		position: absolute;
		top: 1.5rem; right: 1.75rem;
		font-size: 1rem; font-weight: 700;
		color: rgba(200,169,110,0.55);
		letter-spacing: 0.06em;
		font-variant-numeric: tabular-nums;
	}
	.card-icon {
		width: 60px; height: 60px;
		display: flex; align-items: center; justify-content: center;
		background: #e8f0fa; color: #204a77;
		border-radius: 14px;
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
	}
	.card-word {
		font-size: 0.7rem; font-weight: 700;
		letter-spacing: 0.2em; text-transform: uppercase;
		color: #c8a96e;
		margin-bottom: 0.65rem;
	}
	.card-title {
		margin: 0 0 0.85rem;
		font-size: 1.35rem; font-weight: 600;
		color: #0f1e2e; letter-spacing: -0.01em;
	}
	.card-text {
		margin: 0;
		font-size: 0.94rem; line-height: 1.7;
		color: #4a5a6e;
	}

	.wu-cta-row { display: flex; justify-content: center; margin-top: 3rem; }
	.wu-cta {
		display: inline-flex; align-items: center; gap: 0.55rem;
		padding: 1rem 1.75rem;
		background: #204a77; color: #fff;
		font-size: 0.85rem; font-weight: 700;
		letter-spacing: 0.04em; text-transform: uppercase;
		border-radius: 999px;
		text-decoration: none;
		transition: background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
	}
	.wu-cta:hover {
		background: #1a3d63; transform: translateY(-1px);
		box-shadow: 0 12px 28px -10px rgba(32,74,119,0.5);
	}
	.arrow { transition: transform 0.2s ease; }
	.wu-cta:hover .arrow { transform: translateX(3px); }

	@media (max-width: 900px) {
		.wu { padding: 3.5rem 1.25rem; }
		.wu-grid { grid-template-columns: 1fr; gap: 1.25rem; }
		.wu-cta-row { margin-top: 2rem; }
	}
</style>
