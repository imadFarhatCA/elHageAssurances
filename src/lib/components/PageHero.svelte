<script>
	let { label = '', title = '', text = '', image = '' } = $props();
</script>

<section class="page-hero" style={image ? `--hero-img: url('${image}');` : ''}>

	<!-- gradient only at the bottom — top of image is fully clear -->
	<div class="hero-gradient"></div>

	<div class="container hero-body">
		<div class="row">
			<div class="col-12 col-lg-8">

				{#if label}
					<div class="hero-tag">
						<span class="hero-tag-pip"></span>
						{label}
					</div>
				{/if}

				<h1 class="hero-title">{@html title}</h1>

				{#if text}
					<p class="hero-desc">{@html text}</p>
				{/if}

			</div>
		</div>
	</div>

</section>

<style>
	.page-hero {
		position: relative;
		min-height: 580px;
		display: flex;
		/* text anchored to the bottom */
		align-items: flex-end;
		background-image: var(--hero-img, none);
		background-color: #0d1f35;
		background-size: cover;
		background-position: center top;
		overflow: hidden;
	}

	/* gradient rises from the bottom — top portion of image is 100% clear */
	.hero-gradient {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(6, 14, 28, 0.97) 0%,
			rgba(6, 14, 28, 0.80) 22%,
			rgba(6, 14, 28, 0.35) 45%,
			transparent           70%
		);
		z-index: 1;
	}

	.hero-body {
		position: relative;
		z-index: 2;
		padding-bottom: 3.5rem;
		width: 100%;
	}

	/* ── EYEBROW TAG ────────────────────────────────────── */
	.hero-tag {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: #c8a96e;
		border: 1px solid rgba(200, 169, 110, 0.40);
		border-radius: 100px;
		padding: 0.35rem 0.85rem;
		margin-bottom: 1.4rem;
	}

	.hero-tag-pip {
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #c8a96e;
		flex-shrink: 0;
	}

	/* ── TITLE ──────────────────────────────────────────── */
	.hero-title {
		font-size: 3.8rem;
		font-weight: 300;
		color: #fff;
		line-height: 1.08;
		letter-spacing: -0.03em;
		margin: 0 0 1.1rem;
	}

	/* ── SUBTITLE ───────────────────────────────────────── */
	.hero-desc {
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.60);
		line-height: 1.7;
		margin: 0;
		max-width: 540px;
	}

	/* ── MOBILE ─────────────────────────────────────────── */
	@media (max-width: 768px) {
		.page-hero {
			min-height: 440px;
			background-position: center;
		}

		.hero-body {
			padding-bottom: 2.8rem;
		}

		.hero-title {
			font-size: 2.2rem;
			letter-spacing: -0.02em;
		}

		.hero-desc {
			font-size: 0.93rem;
		}
	}
</style>
