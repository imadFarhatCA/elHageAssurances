<script>
	import { site } from '$lib/data/site.js';
	const bookingsUrl = site.bookings;
</script>

<section class="booking">
	<div class="inner">
		<div class="left">
			<div class="eyebrow">
				<span class="rule"></span>
				<span class="text">Our promise</span>
			</div>
			<h2 class="headline">
				Classic and trust-driven,<br>
				<span class="accent">protecting what matters most.</span>
			</h2>
			<p class="sub">
				Sit down with a licensed advisor — we'll review your situation, answer
				questions, and recommend coverage that actually fits.
			</p>
			<a href={bookingsUrl} class="cta" target="_blank" rel="noopener">
				<span class="cta-icon fa fa-calendar"></span>
				Book an appointment
				<span class="cta-arrow">→</span>
			</a>
		</div>

		<div class="right">
			<div class="card">
				<div class="card-icon">
					<span class="fa fa-calendar-check-o"></span>
				</div>
				<div class="card-title">Free 15-minute consultation</div>
				<ul class="card-list">
					<li><span class="dot"></span>No obligation, no fees</li>
					<li><span class="dot"></span>Online or in-person in Montréal</li>
					<li><span class="dot"></span>Bilingual: English &amp; Français</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	.booking {
		background:
			linear-gradient(180deg, #ffffff 0%, #f4f8fd 100%);
		padding: 5rem 1.5rem;
	}

	.inner {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		gap: 3.5rem;
		align-items: center;
	}

	.eyebrow {
		display: inline-flex; align-items: center; gap: 0.75rem;
		margin-bottom: 1.25rem;
	}
	.rule { width: 2.5rem; height: 1px; background: #c8a96e; }
	.text {
		font-size: 0.72rem; font-weight: 700;
		letter-spacing: 0.22em; text-transform: uppercase;
		color: #c8a96e;
	}

	.headline {
		margin: 0;
		font-size: clamp(1.75rem, 3.2vw, 2.6rem);
		font-weight: 300;
		line-height: 1.18;
		letter-spacing: -0.018em;
		color: #0f1e2e;
	}
	.headline .accent { color: #204a77; font-weight: 600; }

	.sub {
		margin: 1.5rem 0 2rem;
		font-size: 1rem;
		line-height: 1.65;
		color: #4a5a6e;
		max-width: 32rem;
	}

	.cta {
		display: inline-flex; align-items: center;
		gap: 0.7rem;
		padding: 1rem 1.75rem;
		background: #204a77;
		color: #fff;
		font-size: 0.92rem; font-weight: 600;
		letter-spacing: 0.02em;
		text-decoration: none;
		border-radius: 8px;
		transition: background 0.15s ease, transform 0.15s ease;
	}
	.cta:hover { background: #1a3d63; transform: translateY(-1px); }
	.cta-icon { font-size: 1rem; }
	.cta-arrow { transition: transform 0.2s ease; }
	.cta:hover .cta-arrow { transform: translateX(3px); }

	.card {
		background: #fff;
		border: 1px solid #e5e9ef;
		border-radius: 14px;
		padding: 2rem;
		box-shadow:
			0 1px 0 rgba(15,30,46,0.04),
			0 18px 48px -16px rgba(32,74,119,0.12);
	}
	.card-icon {
		width: 48px; height: 48px;
		display: flex; align-items: center; justify-content: center;
		background: #f4f8fd;
		color: #204a77;
		border-radius: 10px;
		margin-bottom: 1.25rem;
		font-size: 1.25rem;
	}
	.card-title {
		font-size: 1.05rem;
		font-weight: 600;
		color: #0f1e2e;
		margin-bottom: 1rem;
	}
	.card-list {
		list-style: none;
		padding: 0; margin: 0;
		display: flex; flex-direction: column; gap: 0.65rem;
	}
	.card-list li {
		display: flex; align-items: center; gap: 0.65rem;
		font-size: 0.9rem;
		color: #4a5a6e;
	}
	.dot {
		width: 6px; height: 6px; border-radius: 50%;
		background: #30c47a;
		flex-shrink: 0;
	}

	@media (max-width: 900px) {
		.booking { padding: 3.5rem 1.25rem; }
		.inner { grid-template-columns: 1fr; gap: 2rem; }
	}
</style>
