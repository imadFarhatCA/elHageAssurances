<script>
	import ContactForm from './forms/ContactForm.svelte';
	import SectionHeader from './SectionHeader.svelte';

	let {
		contactInfo = [],
		hours = []
	} = $props();
</script>

<section class="cb">
	<div class="cb-inner">
		<SectionHeader
			eyebrow="Get in touch"
			headline="Send us a"
			headlineAccent="message."
			sub="Have a question, need a quote, or want to review your current coverage? A licensed advisor will reach out — usually within one business day."
			maxWidth="38rem"
		/>

		<div class="cb-grid">
			<article class="cb-card cb-card-info">
				<header class="cb-card-head">
					<div class="cb-badge cb-badge-gold">
						<span class="fa fa-comments-o"></span>
					</div>
					<div class="cb-card-meta">
						<span class="cb-chip gold">Reach us directly</span>
						<h3 class="cb-card-title">Contact details</h3>
						<p class="cb-card-tag">Prefer the phone or email? Here's how to find us.</p>
					</div>
				</header>

				<ul class="cb-info-list">
					{#each contactInfo as info}
						<li class="cb-info-row">
							<span class="cb-info-icon {info.icon}"></span>
							<div class="cb-info-text">
								<div class="cb-info-label">{info.label}</div>
								{#if info.href}
									<a href={info.href} class="cb-info-value">{info.value}</a>
								{:else}
									<span class="cb-info-value">{info.value}</span>
								{/if}
							</div>
						</li>
					{/each}
				</ul>

				{#if hours.length}
					<div class="cb-hours">
						<div class="cb-hours-head"><span class="fa fa-clock-o"></span> Office hours</div>
						{#each hours as h}
							<div class="cb-hours-row">
								<span>{h.day}</span>
								<span class:closed={h.time === 'Closed'}>{h.time}</span>
							</div>
						{/each}
					</div>
				{/if}
			</article>

			<article class="cb-card cb-card-form">
				<header class="cb-card-head">
					<div class="cb-badge cb-badge-blue">
						<span class="fa fa-paper-plane"></span>
					</div>
					<div class="cb-card-meta">
						<span class="cb-chip blue">Write to us</span>
						<h3 class="cb-card-title">Send a message</h3>
						<p class="cb-card-tag">Tell us a bit about what you need — we'll take it from there.</p>
					</div>
				</header>
				<ContactForm />
			</article>
		</div>
	</div>
</section>

<style>
	.cb {
		position: relative;
		z-index: 10;
		background: linear-gradient(180deg, #f4f8fd 0%, #ffffff 100%);
		padding: 5rem 1.5rem;
	}
	.cb-inner { max-width: 1280px; margin: 0 auto; }

	.cb-grid {
		display: grid;
		grid-template-columns: 1fr 1.4fr;
		gap: 1.75rem;
		align-items: stretch;
	}

	.cb-card {
		display: flex; flex-direction: column;
		position: relative;
		--stripe-grad: linear-gradient(90deg, #c8a96e, #e6c995);
		background:
			var(--stripe-grad) top / 100% 4px no-repeat,
			linear-gradient(180deg, #fafcff 0%, #ffffff 130px),
			#ffffff;
		border-radius: 18px;
		padding: 2.25rem;
		border: 1px solid #eef1f5;
		box-shadow:
			0 1px 0 rgba(15,30,46,0.04),
			0 22px 56px -18px rgba(32,74,119,0.16);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}
	.cb-card:hover {
		transform: translateY(-2px);
		box-shadow:
			0 1px 0 rgba(15,30,46,0.04),
			0 28px 72px -18px rgba(32,74,119,0.22);
	}
	.cb-card-form { --stripe-grad: linear-gradient(90deg, #204a77, #3a6ea8); }

	.cb-card-head { display: flex; gap: 1.1rem; margin-bottom: 1.75rem; flex-shrink: 0; }
	.cb-badge {
		flex-shrink: 0;
		width: 56px; height: 56px;
		display: flex; align-items: center; justify-content: center;
		border-radius: 14px;
		font-size: 1.45rem;
	}
	.cb-badge-blue { background: #e8f0fa; color: #204a77; }
	.cb-badge-gold { background: #f7eede; color: #8a6f3a; }

	.cb-card-meta { display: flex; flex-direction: column; gap: 0.4rem; min-width: 0; }
	.cb-chip {
		align-self: flex-start;
		font-size: 0.66rem; font-weight: 700;
		letter-spacing: 0.18em; text-transform: uppercase;
		padding: 0.28rem 0.65rem;
		border-radius: 999px;
	}
	.cb-chip.blue { background: #e8f0fa; color: #204a77; }
	.cb-chip.gold { background: #f7eede; color: #8a6f3a; }
	.cb-card-title {
		margin: 0.15rem 0 0.3rem;
		font-size: clamp(1.5rem, 2.2vw, 1.85rem);
		font-weight: 600;
		color: #0f1e2e;
		letter-spacing: -0.015em;
	}
	.cb-card-tag { margin: 0; font-size: 0.92rem; color: #4a5a6e; line-height: 1.55; }

	.cb-info-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.1rem; }
	.cb-info-row { display: flex; align-items: flex-start; gap: 0.85rem; }
	.cb-info-icon {
		flex-shrink: 0;
		width: 36px; height: 36px;
		display: inline-flex; align-items: center; justify-content: center;
		background: #f4f8fd; color: #204a77;
		border-radius: 10px;
		font-size: 0.95rem;
	}
	.cb-info-text { display: flex; flex-direction: column; min-width: 0; }
	.cb-info-label {
		font-size: 0.7rem; font-weight: 700;
		letter-spacing: 0.18em; text-transform: uppercase;
		color: #6b7c92;
		margin-bottom: 0.2rem;
	}
	.cb-info-value {
		font-size: 0.98rem; color: #0f1e2e;
		text-decoration: none;
		transition: color 0.15s ease;
	}
	a.cb-info-value:hover { color: #204a77; }

	.cb-hours {
		margin-top: auto;
		padding-top: 1.5rem;
		border-top: 1px dashed #e5e9ef;
	}
	.cb-hours-head {
		display: flex; align-items: center; gap: 0.5rem;
		font-size: 0.7rem; font-weight: 700;
		letter-spacing: 0.18em; text-transform: uppercase;
		color: #c8a96e;
		margin-bottom: 0.85rem;
	}
	.cb-hours-row {
		display: flex; justify-content: space-between;
		font-size: 0.9rem; color: #4a5a6e;
		padding: 0.25rem 0;
	}
	.cb-hours-row span:last-child { color: #0f1e2e; font-variant-numeric: tabular-nums; }
	.cb-hours-row .closed { color: #8b97a8; }

	@media (max-width: 980px) {
		.cb { padding: 3.5rem 1.25rem; }
		.cb-grid { grid-template-columns: 1fr; gap: 1.25rem; }
		.cb-card { padding: 1.75rem; }
	}
</style>
