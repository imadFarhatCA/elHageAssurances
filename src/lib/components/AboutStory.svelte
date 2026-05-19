<script>
	let {
		eyebrow = 'Our story',
		headline = 'Built on a',
		headlineAccent = 'promise.',
		paragraphs = [],
		ctas = []
	} = $props();
</script>

<section class="story">
	<div class="inner">
		<div class="head">
			<div class="eyebrow">
				<span class="rule"></span>
				<span class="text">{eyebrow}</span>
			</div>
			<h2 class="headline">
				{headline} <span class="accent">{headlineAccent}</span>
			</h2>
		</div>

		<div class="body">
			{#each paragraphs as p}
				<p class="para">{@html p}</p>
			{/each}

			{#if ctas.length}
				<div class="cta-row">
					{#each ctas as c}
						<a href={c.href} class="cta cta-{c.variant || 'primary'}">
							{c.label}
							<span class="arrow">→</span>
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.story {
		background: linear-gradient(180deg, #ffffff 0%, #f4f8fd 100%);
		padding: 5rem 1.5rem;
	}
	.inner {
		max-width: 980px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 0.85fr 1.4fr;
		gap: 3.5rem;
		align-items: start;
	}

	.head { position: sticky; top: 6rem; }
	.eyebrow { display: inline-flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
	.rule { width: 2.5rem; height: 1px; background: #c8a96e; }
	.text {
		font-size: 0.72rem; font-weight: 700;
		letter-spacing: 0.22em; text-transform: uppercase;
		color: #c8a96e;
	}
	.headline {
		margin: 0;
		font-size: clamp(2.2rem, 4vw, 3.4rem);
		font-weight: 300;
		letter-spacing: -0.02em; line-height: 1.08;
		color: #0f1e2e;
	}
	.headline .accent { color: #204a77; font-weight: 600; }

	.body { display: flex; flex-direction: column; gap: 1.25rem; }
	.para {
		margin: 0;
		font-size: clamp(1rem, 1.2vw, 1.1rem);
		line-height: 1.75;
		color: #4a5a6e;
	}

	.cta-row { display: flex; flex-wrap: wrap; gap: 0.85rem; margin-top: 1.5rem; }
	.cta {
		display: inline-flex; align-items: center; gap: 0.5rem;
		padding: 0.95rem 1.5rem;
		font-size: 0.85rem; font-weight: 700;
		letter-spacing: 0.04em; text-transform: uppercase;
		border-radius: 999px;
		text-decoration: none;
		transition: background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
	}
	.cta-primary {
		background: #204a77; color: #fff;
	}
	.cta-primary:hover { background: #1a3d63; transform: translateY(-1px); }
	.cta-ghost {
		background: transparent; color: #204a77;
		border: 1.5px solid #d4dde8;
	}
	.cta-ghost:hover { border-color: #204a77; background: rgba(32,74,119,0.04); }
	.arrow { transition: transform 0.2s ease; }
	.cta:hover .arrow { transform: translateX(3px); }

	@media (max-width: 900px) {
		.story { padding: 3.5rem 1.25rem; }
		.inner { grid-template-columns: 1fr; gap: 2rem; }
		.head { position: static; }
	}
</style>
