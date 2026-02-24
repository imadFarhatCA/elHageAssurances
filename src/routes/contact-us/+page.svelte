<script>
	import QuoteForm from '$lib/components/QuoteForm.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';

	const contactInfo = [
		{ icon: 'fa fa-envelope', label: 'Email', value: 'info@elhageassurances.com', href: 'mailto:info@elhageassurances.com' },
		{ icon: 'fa fa-phone', label: 'Phone', value: '+1 (514) 000-0000', href: 'tel:+15140000000' },
		{ icon: 'fa fa-map-marker', label: 'Office', value: '4220 blvd Saint-Martin O, Laval, QC H7T 1C1', href: null }
	];

	const hours = [
		{ day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
		{ day: 'Saturday', time: '10:00 AM – 3:00 PM' },
		{ day: 'Sunday', time: 'Closed' }
	];

	const faq = [
		{
			q: 'How do I report a claim?',
			a: 'Call us directly at +1 (514) 000-0000 during office hours and one of our advisors will open your claim file immediately. You can also email info@elhageassurances.com with your policy number, a brief description, and any photos. We will confirm receipt within a few hours and guide you through each next step.'
		},
		{
			q: 'What number should I call in an emergency outside office hours?',
			a: 'For urgent situations outside our regular hours — such as a car accident, fire, or water damage — contact your insurer\'s 24/7 emergency line directly. The number is printed on your policy certificate and insurance card. If you cannot locate it, leave us a voicemail at +1 (514) 000-0000 and we will call you back first thing the next business day.'
		},
		{
			q: 'What information should I have ready when I call?',
			a: 'To speed up your request, have your policy number, a description of the incident (date, location, what happened), and — for claims — any relevant photos or documents. For coverage questions, a copy of your current policy is helpful but not required.'
		},
		{
			q: 'How long does it take to process a claim?',
			a: 'Simple claims (minor auto damage, straightforward home incidents) are often resolved within 5 to 10 business days. More complex claims involving third parties or significant damage may take longer. Your advisor keeps you updated at every stage so you are never left wondering.'
		},
		{
			q: 'Can I update my policy or add coverage by phone or email?',
			a: 'Yes. Most policy changes — adding a driver, updating your address, increasing coverage limits — can be processed over the phone or by email. Contact us and we will confirm the change in writing once it is applied.'
		},
		{
			q: 'Do you offer services in French?',
			a: 'Absolutely. Our team is fully bilingual and serves clients in both French and English. You are welcome to communicate in the language of your choice.'
		}
	];
</script>

<svelte:head>
	<title>Contact Us – El-Hage Assurances</title>
</svelte:head>

<!-- Map Hero -->
<section class="contact-hero">
	<div class="contact-hero-map">
		<iframe
			src="https://www.google.com/maps?q=4220+blvd+Saint+Martin+O,+Laval,+QC+H7T+1C1&output=embed"
			width="100%"
			height="100%"
			style="border:0;"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="El-Hage Assurances office location"
		></iframe>
	</div>
	<div class="contact-hero-overlay">
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-5">
					<div class="contact-hero-card">
						<div class="hero-tag">
							<span class="hero-tag-pip"></span>
							We are here for you
						</div>
						<h1 class="hero-title">Contact Us</h1>
						<p class="hero-desc">Have a question, need a quote, or want to review your current coverage? Our team is ready to help.</p>
						<div class="hero-rule"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- What happens next -->
<section class="contact-steps">
	<div class="container">
		<div class="steps-header">
			<div class="steps-tag">
				<span class="steps-tag-pip"></span>
				After you submit
			</div>
			<h2 class="steps-title">What happens next</h2>
		</div>
		<div class="steps-grid">
			<div class="step-item">
				<div class="step-number">01</div>
				<div class="step-connector"></div>
				<h4 class="step-name">We review your request</h4>
				<p class="step-text">Your message is received immediately. One of our licensed advisors reads through your details and prepares a tailored response.</p>
			</div>
			<div class="step-item">
				<div class="step-number">02</div>
				<div class="step-connector"></div>
				<h4 class="step-name">We reach out to you</h4>
				<p class="step-text">You will hear from us within one business day — by email or phone, whichever suits you best. No automated bots, just a real person.</p>
			</div>
			<div class="step-item">
				<div class="step-number">03</div>
				<div class="step-connector step-connector-last"></div>
				<h4 class="step-name">You get covered</h4>
				<p class="step-text">We walk you through your options, answer every question, and set up coverage that fits your life — at no obligation.</p>
			</div>
		</div>
	</div>
</section>

<!-- Contact Info + Form -->
<section data-bs-version="5.1" class="form01 rebootm5 cid-vap8M4mCKq" id="contact-form">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-5 card">
				<div class="content-wrapper">
					<p class="mbr-label mbr-fonts-style display-7 eh-card-text">Get in touch</p>
					<h2 class="mbr-section-title mbr-fonts-style display-2 eh-main-title">Send us a Message</h2>
					<p class="mbr-text mbr-fonts-style display-7 eh-main-text">Fill out the form and one of our advisors will get back to you — usually within one business day.</p>

					<div style="margin-top:2rem;">
						{#each contactInfo as info}
							<div style="display:flex; align-items:flex-start; gap:1rem; margin-bottom:1.1rem;">
								<span class="{info.icon} mbr-iconfont" style="font-size:1.2rem; color:rgba(255,255,255,0.6); margin-top:0.2rem; min-width:1.2rem;"></span>
								<div>
									<p style="font-size:0.78rem; font-weight:600; color:rgba(255,255,255,0.5); letter-spacing:0.08em; margin:0 0 0.15rem; text-transform:uppercase;">{info.label}</p>
									{#if info.href}
										<a href={info.href} style="font-size:1rem; color:#fff; text-decoration:none;">{info.value}</a>
									{:else}
										<p style="font-size:1rem; color:#fff; margin:0;">{info.value}</p>
									{/if}
								</div>
							</div>
						{/each}
					</div>

					<div style="margin-top:2rem; border-top:1px solid rgba(255,255,255,0.15); padding-top:1.5rem;">
						<p style="font-size:0.78rem; font-weight:600; color:rgba(255,255,255,0.5); letter-spacing:0.08em; margin-bottom:0.8rem; text-transform:uppercase;">Office Hours</p>
						{#each hours as h}
							<div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
								<span style="font-size:0.9rem; color:rgba(255,255,255,0.7);">{h.day}</span>
								<span style="font-size:0.9rem; color:{h.time === 'Closed' ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.9)'};">{h.time}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-5 card">
				<div class="mbr-form form-wrap card-wrap form-col-right">
					<QuoteForm prefix="contact" btnLabel="SEND MESSAGE" />
				</div>
			</div>
		</div>
	</div>
</section>

<FaqAccordion
	items={faq}
	accordionId="contact-faq"
	label="Important Questions & Information you need to know !"
/>

<style>
	/* ── MAP HERO ──────────────────────────────────────── */
	.contact-hero {
		position: relative;
		min-height: 520px;
		overflow: hidden;
	}

	.contact-hero-map {
		position: absolute;
		inset: 0;
		z-index: 0;
	}
	.contact-hero-map iframe {
		width: 100%;
		height: 100%;
		display: block;
	}

	.contact-hero-overlay {
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
		min-height: 520px;
		padding: 5rem 0;
		background: linear-gradient(
			to right,
			rgba(10, 20, 38, 0.78) 0%,
			rgba(10, 20, 38, 0.35) 45%,
			transparent 70%
		);
	}

	.contact-hero-card {
		background: rgba(10, 20, 38, 0.62);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(255, 255, 255, 0.10);
		border-radius: 16px;
		padding: 2.4rem 2.4rem 2rem;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
	}

	.hero-tag {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: #c8a96e;
		border: 1px solid rgba(200, 169, 110, 0.4);
		border-radius: 100px;
		padding: 0.35rem 0.85rem;
		margin-bottom: 1.4rem;
	}
	.hero-tag-pip {
		display: inline-block;
		width: 6px; height: 6px;
		border-radius: 50%;
		background: #c8a96e;
	}

	.hero-title {
		font-size: 3.2rem;
		font-weight: 300;
		color: #fff;
		line-height: 1.1;
		letter-spacing: -0.02em;
		margin: 0 0 1.1rem;
	}

	.hero-desc {
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.6);
		line-height: 1.7;
		margin: 0 0 1.6rem;
	}

	.hero-rule {
		width: 40px;
		height: 1px;
		background: rgba(200, 169, 110, 0.55);
	}

	/* ── WHAT HAPPENS NEXT ─────────────────────────────── */
	.contact-steps {
		padding: 5rem 0 4.5rem;
		background: #fff;
	}

	.steps-header {
		text-align: center;
		margin-bottom: 3.5rem;
	}

	.steps-tag {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: #c8a96e;
		border: 1px solid rgba(200, 169, 110, 0.45);
		border-radius: 100px;
		padding: 0.35rem 0.9rem;
		margin-bottom: 1.2rem;
	}
	.steps-tag-pip {
		display: inline-block;
		width: 6px; height: 6px;
		border-radius: 50%;
		background: #c8a96e;
	}

	.steps-title {
		font-size: 2.4rem;
		font-weight: 300;
		color: #0d1f35;
		letter-spacing: -0.02em;
		margin: 0;
	}

	.steps-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0;
		position: relative;
	}

	.step-item {
		padding: 0 2.5rem;
		position: relative;
	}
	.step-item:first-child { padding-left: 0; }
	.step-item:last-child  { padding-right: 0; }

	.step-number {
		font-size: 3.8rem;
		font-weight: 700;
		color: rgba(13, 31, 53, 0.1);
		line-height: 1;
		margin-bottom: 0.5rem;
		font-variant-numeric: tabular-nums;
	}

	.step-connector {
		width: 100%;
		height: 1px;
		background: linear-gradient(to right, #204a77 0%, rgba(32, 74, 119, 0.1) 100%);
		margin-bottom: 1.5rem;
	}
	.step-connector-last {
		background: linear-gradient(to right, #204a77 0%, transparent 100%);
	}

	.step-name {
		font-size: 1.1rem;
		font-weight: 600;
		color: #204a77;
		margin: 0 0 0.65rem;
	}

	.step-text {
		font-size: 0.93rem;
		color: #4a6a8a;
		line-height: 1.7;
		margin: 0;
	}

	@media (max-width: 768px) {
		.contact-steps {
			padding: 3.5rem 0 3rem;
		}
		.steps-title {
			font-size: 1.8rem;
		}
		.steps-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
		.step-item {
			padding: 0;
		}
		.step-connector {
			width: 40px;
			background: linear-gradient(to bottom, #c8a96e, rgba(200, 169, 110, 0.12));
		}
		.step-number {
			font-size: 2.8rem;
		}
	}

	@media (max-width: 768px) {
		.contact-hero,
		.contact-hero-overlay {
			min-height: 420px;
		}
		.contact-hero-overlay {
			padding: 4rem 0;
			background: rgba(10, 20, 38, 0.6);
		}
		.contact-hero-card {
			padding: 1.8rem 1.5rem 1.5rem;
		}
		.hero-title {
			font-size: 2.2rem;
		}
	}
</style>
