<script>
	let {
		eyebrow,
		headline,
		headlineAccent = '',
		sub = '',
		align = 'center',
		accent = 'blue',
		eyebrowAccent = 'gold',
		maxWidth = '40rem'
	} = $props();
</script>

<header class="sh sh-{align}" style="--sh-max: {maxWidth};">
	<div class="sh-eyebrow eye-{eyebrowAccent}">
		<span class="sh-rule"></span>
		<span class="sh-text">{eyebrow}</span>
	</div>
	<h2 class="sh-headline">
		{headline}{#if headlineAccent} <span class="sh-accent acc-{accent}">{headlineAccent}</span>{/if}
	</h2>
	{#if sub}<p class="sh-sub">{sub}</p>{/if}
</header>

<style>
	.sh { max-width: var(--sh-max); margin: 0 0 3rem; }
	.sh-center { text-align: center; margin: 0 auto 3rem; }
	.sh-left { text-align: left; }

	.sh-eyebrow { display: inline-flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
	.sh-rule { width: 2.5rem; height: 1px; }
	.eye-gold .sh-rule { background: #c8a96e; }
	.eye-gold .sh-text { color: #c8a96e; }
	.eye-purple .sh-rule { background: linear-gradient(90deg, #784878 0%, #f09078 100%); }
	.eye-purple .sh-text { color: #784878; }
	.sh-text {
		font-size: 0.72rem; font-weight: 700;
		letter-spacing: 0.22em; text-transform: uppercase;
	}

	.sh-headline {
		margin: 0;
		font-size: clamp(2rem, 3.8vw, 3.2rem);
		font-weight: 300;
		letter-spacing: -0.02em; line-height: 1.15;
		color: #0f1e2e;
	}
	.sh-accent { font-weight: 600; }
	.acc-blue { color: #204a77; }
	.acc-gold { color: #c8a96e; }
	.acc-purple { color: #784878; }
	.acc-gradient {
		background: linear-gradient(90deg, #784878 0%, #f09078 70%, #f0a878 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
	}

	.sh-sub {
		margin: 1.15rem auto 0;
		font-size: clamp(1rem, 1.2vw, 1.15rem);
		color: #4a5a6e; line-height: 1.6;
		max-width: 38rem;
	}
	.sh-left .sh-sub { margin: 1.15rem 0 0; }
</style>
