<script>
	import { site } from '$lib/data/site.js';

	const panels = [
		{
			variant: 'life',
			eyebrow: "Let's talk insurance",
			title: 'Life',
			titleAccent: 'is important.',
			text: "Protect what your family is building. Flexible life plans tailored to your stage, your budget, and what you want to leave behind.",
			cta: 'Plan your coverage',
			href: '/our-services?type=life'
		},
		{
			variant: 'biz',
			eyebrow: "Let's talk corporate",
			title: 'Business',
			titleAccent: 'without worry.',
			text: "Liability, property, employee benefits, and beyond. Comprehensive coverage that scales as your business grows.",
			cta: 'Discuss business needs',
			href: '/our-services?type=commercial'
		}
	];
</script>

<section class="lbp">
	<div class="inner">
		{#each panels as p}
			<article class="panel panel-{p.variant}">
				<div class="ornament"></div>
				<div class="content">
					<div class="eyebrow">
						<span class="rule"></span>
						<span class="text">{p.eyebrow}</span>
					</div>
					<h3 class="title">
						{p.title}<br>
						<span class="accent">{p.titleAccent}</span>
					</h3>
					<p class="sub">{p.text}</p>

					<div class="actions">
						<a href={p.href} class="cta">
							{p.cta}
							<span class="arrow">→</span>
						</a>
						<a href={site.phone.href} class="phone">
							<span class="phone-icon fa fa-phone"></span>
							{site.phone.display}
						</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.lbp {
		padding: 4.5rem 1.5rem 5.5rem;
		background: #fff;
	}
	.inner {
		max-width: 1280px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.75rem;
	}

	.panel {
		position: relative;
		overflow: hidden;
		border-radius: 22px;
		padding: 3rem 2.75rem;
		min-height: 460px;
		color: #fff;
		display: flex;
		transition: transform 0.25s ease, box-shadow 0.25s ease;
	}
	.panel:hover {
		transform: translateY(-3px);
		box-shadow: 0 32px 64px -24px rgba(15,30,46,0.35);
	}

	.panel-life {
		background:
			radial-gradient(ellipse at top right, rgba(200,169,110,0.22) 0%, transparent 55%),
			linear-gradient(135deg, #2a5a8c 0%, #163a60 100%);
		box-shadow: 0 24px 56px -22px rgba(22,58,96,0.55);
	}
	.panel-biz {
		background:
			radial-gradient(ellipse at top right, rgba(200,169,110,0.3) 0%, transparent 55%),
			linear-gradient(135deg, #1a2536 0%, #0c1626 100%);
		box-shadow: 0 24px 56px -22px rgba(12,22,38,0.6);
	}

	.ornament {
		position: absolute;
		bottom: -120px; right: -120px;
		width: 360px; height: 360px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
		pointer-events: none;
	}

	.content { position: relative; z-index: 1; display: flex; flex-direction: column; flex: 1; }

	.eyebrow { display: inline-flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; }
	.rule { width: 2.5rem; height: 1px; background: #c8a96e; }
	.text {
		font-size: 0.72rem; font-weight: 700;
		letter-spacing: 0.22em; text-transform: uppercase;
		color: #c8a96e;
	}

	.title {
		margin: 0;
		font-size: clamp(2.6rem, 4.5vw, 3.8rem);
		font-weight: 300;
		line-height: 1.05;
		letter-spacing: -0.025em;
		color: #fff;
	}
	.title .accent { font-weight: 700; color: #fff; }

	.sub {
		margin: 1.5rem 0 0;
		max-width: 28rem;
		font-size: 1.02rem;
		line-height: 1.65;
		color: rgba(255,255,255,0.78);
	}

	.actions {
		margin-top: auto;
		padding-top: 2.5rem;
		display: flex; flex-wrap: wrap; align-items: center;
		gap: 1.25rem 1.75rem;
	}

	.cta {
		display: inline-flex; align-items: center; gap: 0.55rem;
		padding: 0.95rem 1.6rem;
		background: #fff;
		color: #0f1e2e;
		font-size: 0.9rem; font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		text-decoration: none;
		border-radius: 999px;
		transition: background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
	}
	.panel-biz .cta { background: #c8a96e; color: #0c1626; }
	.cta:hover {
		transform: translateY(-1px);
		box-shadow: 0 12px 28px -10px rgba(0,0,0,0.4);
	}
	.panel-life .cta:hover { background: #f0f4f9; }
	.panel-biz .cta:hover { background: #d8bb7c; }
	.arrow { transition: transform 0.2s ease; }
	.cta:hover .arrow { transform: translateX(3px); }

	.phone {
		display: inline-flex; align-items: center; gap: 0.55rem;
		font-size: 0.95rem;
		color: rgba(255,255,255,0.85);
		text-decoration: none;
		transition: color 0.15s ease;
	}
	.phone:hover { color: #c8a96e; }
	.phone-icon {
		width: 32px; height: 32px;
		display: inline-flex; align-items: center; justify-content: center;
		background: rgba(255,255,255,0.1);
		border-radius: 50%;
		font-size: 0.82rem;
	}

	@media (max-width: 900px) {
		.lbp { padding: 3rem 1.25rem 4rem; }
		.inner { grid-template-columns: 1fr; gap: 1.25rem; }
		.panel { padding: 2.25rem 1.75rem; min-height: 380px; }
	}
</style>
