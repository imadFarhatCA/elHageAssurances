<script>
	import { slide } from 'svelte/transition';

	let {
		items = [],
		label = 'Frequently asked questions'
	} = $props();

	let openIdx = $state(-1);
	function toggle(i) { openIdx = openIdx === i ? -1 : i; }
</script>

<section class="faq">
	<div class="inner">
		<header class="head">
			<div class="eyebrow">
				<span class="rule"></span>
				<span class="text">FAQ</span>
			</div>
			<h2 class="headline">{label}</h2>
			<p class="sub">
				Can't find what you're looking for? <a href="/contact-us" class="sub-link">Reach out</a> — we're glad to help.
			</p>
		</header>

		<ul class="list">
			{#each items as item, i}
				<li class="item" class:open={openIdx === i}>
					<button
						type="button"
						class="q-btn"
						aria-expanded={openIdx === i}
						aria-controls="faq-a-{i}"
						onclick={() => toggle(i)}
					>
						<span class="q-text">{item.q}</span>
						<span class="q-icon" class:open={openIdx === i} aria-hidden="true">
							<span class="bar bar-h"></span>
							<span class="bar bar-v"></span>
						</span>
					</button>
					{#if openIdx === i}
						<div id="faq-a-{i}" class="a-wrap" transition:slide={{ duration: 220 }}>
							<p class="a-text">{item.a}</p>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.faq {
		background: linear-gradient(180deg, #ffffff 0%, #f4f8fd 100%);
		padding: 5rem 1.5rem;
	}
	.inner { max-width: 820px; margin: 0 auto; }

	.head { text-align: center; margin-bottom: 3rem; }
	.eyebrow { display: inline-flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
	.rule { width: 2.5rem; height: 1px; background: #c8a96e; }
	.text {
		font-size: 0.72rem; font-weight: 700;
		letter-spacing: 0.22em; text-transform: uppercase;
		color: #c8a96e;
	}
	.headline {
		margin: 0;
		font-size: clamp(2rem, 3.6vw, 3rem);
		font-weight: 300;
		letter-spacing: -0.02em;
		line-height: 1.15;
		color: #0f1e2e;
	}
	.sub {
		margin: 1.1rem auto 0;
		font-size: 1rem;
		color: #4a5a6e;
		line-height: 1.6;
	}
	.sub-link {
		color: #204a77; font-weight: 600;
		text-decoration: none;
		border-bottom: 1px solid rgba(32,74,119,0.3);
	}
	.sub-link:hover { border-bottom-color: #204a77; }

	.list {
		list-style: none;
		padding: 0; margin: 0;
		display: flex; flex-direction: column;
		gap: 0.75rem;
	}

	.item {
		background: #fff;
		border: 1px solid #e5e9ef;
		border-radius: 12px;
		overflow: hidden;
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
	}
	.item:hover { border-color: #c8d4e3; }
	.item.open {
		border-color: #204a77;
		box-shadow: 0 1px 0 rgba(15,30,46,0.04), 0 12px 32px -16px rgba(32,74,119,0.18);
	}

	.q-btn {
		width: 100%;
		display: flex; align-items: center; justify-content: space-between;
		gap: 1.5rem;
		padding: 1.25rem 1.4rem;
		background: transparent;
		border: none; cursor: pointer;
		text-align: left;
		font-family: inherit;
		transition: background 0.15s ease;
	}
	.q-btn:hover { background: #fafbfd; }
	.q-text {
		font-size: 1.02rem;
		font-weight: 600;
		color: #0f1e2e;
		line-height: 1.45;
	}
	.item.open .q-text { color: #204a77; }

	.q-icon {
		flex-shrink: 0;
		position: relative;
		width: 22px; height: 22px;
		display: inline-flex;
		align-items: center; justify-content: center;
	}
	.bar {
		position: absolute;
		background: #204a77;
		border-radius: 1px;
		transition: transform 0.2s ease, background 0.2s ease;
	}
	.bar-h { top: 50%; left: 3px; right: 3px; height: 2px; margin-top: -1px; }
	.bar-v { left: 50%; top: 3px; bottom: 3px; width: 2px; margin-left: -1px; }
	.q-icon.open .bar-v { transform: scaleY(0); }

	.a-wrap {
		padding: 0 1.4rem 1.4rem;
	}
	.a-text {
		margin: 0;
		padding-top: 0.5rem;
		border-top: 1px dashed #e5e9ef;
		font-size: 0.97rem;
		line-height: 1.7;
		color: #4a5a6e;
	}
	.a-wrap .a-text { padding-top: 1rem; }

	@media (max-width: 720px) {
		.faq { padding: 3.5rem 1.25rem; }
		.head { margin-bottom: 2rem; }
		.q-btn { padding: 1.1rem 1.15rem; gap: 1rem; }
		.q-text { font-size: 0.97rem; }
		.a-wrap { padding: 0 1.15rem 1.15rem; }
	}
</style>
