<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import QuoteForm from '$lib/components/QuoteForm.svelte';

	const values = [
		{ icon: 'fa fa-shield', title: 'Trust', text: 'We build lasting relationships based on honesty, reliability, and a genuine commitment to your best interests.' },
		{ icon: 'fa fa-lightbulb-o', title: 'Transparency', text: 'No hidden clauses, no surprises. We explain your coverage clearly so you always know what you are protected against.' },
		{ icon: 'fa fa-user-circle-o', title: 'Tailored Service', text: 'Every client is unique. We take the time to understand your situation and craft a solution that fits your life perfectly.' }
	];

	const team = [
		{ image: '/assets/images/elhageassurance-event002.jpg', name: 'Antoine el Hage', role: 'Founder & Principal Advisor', bio: 'With over 15 years in the insurance industry, Antoine built El-Hage Assurances on the belief that every client deserves honest, personalized guidance.' },
		{ image: '/assets/images/elhageassurance-event001.jpg', name: 'Our Advisory Team', role: 'Insurance Specialists', bio: 'A dedicated team of licensed advisors covering home, auto, life, health, and commercial insurance across Québec and Ontario.' },
		{ image: '/assets/images/elhageassurance-event003.jpg', name: 'Client Relations', role: 'Support & Claims Guidance', bio: 'From your first quote to your last claim, our support team is always available to guide you through every step of the process.' }
	];

	const faq = [
		{ q: 'How long has El-Hage Assurances been in business?', a: 'El-Hage Assurances has been serving individuals, families, and businesses across Québec and Ontario for over 15 years.' },
		{ q: 'Where are you located?', a: 'Our offices serve clients throughout Québec and Ontario. Contact us to arrange an in-person or virtual consultation.' },
		{ q: 'Are your advisors licensed?', a: 'Yes. All of our advisors are fully licensed and regulated by the appropriate provincial authorities.' },
		{ q: 'Do you work with multiple insurance companies?', a: 'Yes. We are independent brokers, meaning we compare offers from a wide network of trusted insurers to find you the best coverage at the best price.' },
		{ q: 'Can I switch to El-Hage Assurances mid-policy?', a: 'Absolutely. We can review your current coverage and transition you at the right time, often with no gap in protection.' }
	];
</script>

<svelte:head>
	<title>About Us – El-Hage Assurances</title>
</svelte:head>

<PageHero
	label="Who we are"
	title="About El-Hage Assurances"
	text="A story of trust, built one policy at a time."
	image="/assets/images/elhageassurance-event002.jpg"
/>

<!-- Our Story -->
<section data-bs-version="5.1" class="article01 launchm5 cid-vahwOEdtLW" id="about-story">
	<div class="container-fluid">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-10">
				<div class="content-wrapper">
					<div class="border-wrap border_1"></div>
					<div class="border-wrap border_2"></div>
					<div class="title-wrapper">
		<h2 class="mbr-section-title mbr-fonts-style display-2 eh-main-title">Built on a Promise</h2>
						<div class="text-wrapper">
							<p class="mbr-text mbr-fonts-style display-4 eh-main-text">
								El-Hage Assurances was founded with a simple but powerful belief: insurance should be a source of comfort, not confusion.<br><br>
								For over 15 years, we have been helping individuals, families, and businesses across Québec and Ontario navigate the complex world of insurance with clarity and confidence. We are not just brokers — we are advisors who take the time to understand your life, your risks, and your goals.<br><br>
								Our approach is personal. We sit down with every client, listen carefully, and build a coverage plan that makes sense — not just on paper, but in real life. From first-time homeowners to growing businesses, we have earned the trust of thousands of clients by always putting their interests first.
							</p>
						</div>
						<div class="mbr-section-btn">
							<a class="btn btn-primary display-4" href="/our-services">Explore our Services</a>
							<a class="btn btn-white display-4" href="/contact-us">Get in Touch</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Our Values -->
<section id="about-values" class="values-section">
	<div class="container">
		<div class="values-inner">
			<div class="values-left">
				<div class="values-tag">
					<span class="values-tag-pip"></span>
					What drives us
				</div>
				<h2 class="values-title">Our Core<br>Values</h2>
				<p class="values-sub">The principles that shape every conversation, every policy, and every client relationship we build.</p>
			</div>
			<div class="values-right">
				{#each values as val, i}
					<div class="value-row">
						<div class="value-num">0{i + 1}</div>
						<div class="value-icon-col">
							<span class="mbr-iconfont {val.icon}"></span>
						</div>
						<div class="value-content">
							<h3 class="value-name">{val.title}</h3>
							<p class="value-desc">{val.text}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Our Team -->
<section data-bs-version="5.1" class="features01 standm5 cid-vahwOEdtLW" id="about-team">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-10">
				<div class="content-wrapper">
					<div class="title-wrapper">
						<p class="mbr-label mbr-fonts-style display-4 eh-card-text">The people behind the promise</p>
						<h2 class="mbr-section-title mbr-fonts-style display-2 eh-main-title">Meet our Team</h2>
					</div>
					<div class="row items-wrapper justify-content-center">
						{#each team as member}
							<div class="col-12 col-lg-4 item features-image">
								<div class="item-wrapper large-radius">
									<div class="item-img card-wrap" style="overflow:hidden; border-radius:8px 8px 0 0;">
										<img src={member.image} alt={member.name} style="width:100%; height:240px; object-fit:cover;">
									</div>
									<div class="item-content" style="padding:1.25rem 1rem;">
										<h4 class="item-title mbr-fonts-style display-5 eh-card-title">{member.name}</h4>
										<p class="mbr-fonts-style display-7 eh-card-text" style="color:#204a77; font-weight:600; margin-bottom:0.5rem;">{member.role}</p>
										<p class="mbr-fonts-style display-7 eh-card-text">{member.bio}</p>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section data-bs-version="5.1" class="form01 rebootm5 cid-vap8M4mCKq" id="about-cta">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-5 card">
				<div class="content-wrapper">
					<p class="mbr-label mbr-fonts-style display-7 eh-card-text">Ready to get protected ?</p>
					<h2 class="mbr-section-title mbr-fonts-style display-2 eh-main-title">Start with a Free Quote</h2>
					<p class="mbr-text mbr-fonts-style display-7 eh-main-text">Tell us what you need and one of our advisors will reach out with a personalized proposal — no obligation, no pressure.</p>
				</div>
			</div>
			<div class="col-12 col-lg-5 card">
				<div class="mbr-form form-wrap card-wrap form-col-right">
					<QuoteForm prefix="about" btnLabel="GET A QUOTE" />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ -->
<FaqAccordion items={faq} label="QUESTIONS ABOUT EL-HAGE ASSURANCES ?" />

<style>
	/* ── OUR CORE VALUES ──────────────────────────────── */
	.values-section {
		padding: 5.5rem 0 5rem;
		background: #f5f6f8;
	}

	.values-inner {
		display: grid;
		grid-template-columns: 1fr 1.6fr;
		gap: 5rem;
		align-items: start;
	}

	/* Left column */
	.values-left {
		position: sticky;
		top: 6rem;
	}

	.values-tag {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: #c8a96e;
		border: 1px solid rgba(200, 169, 110, 0.45);
		border-radius: 100px;
		padding: 0.35rem 0.9rem;
		margin-bottom: 1.4rem;
	}
	.values-tag-pip {
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #c8a96e;
	}

	.values-title {
		font-size: 2.8rem;
		font-weight: 300;
		color: #0d1f35;
		letter-spacing: -0.02em;
		line-height: 1.15;
		margin: 0 0 1.2rem;
	}

	.values-sub {
		font-size: 0.95rem;
		color: #6b7a8d;
		line-height: 1.75;
		margin: 0;
	}

	/* Right column — rows */
	.values-right {
		display: flex;
		flex-direction: column;
	}

	.value-row {
		display: grid;
		grid-template-columns: 2.5rem 3.5rem 1fr;
		gap: 0 1.5rem;
		align-items: center;
		padding: 2.2rem 0;
		border-bottom: 1px solid rgba(13, 31, 53, 0.1);
		transition: background 0.2s;
		cursor: default;
	}
	.value-row:first-child {
		border-top: 1px solid rgba(13, 31, 53, 0.1);
	}
	.value-row:hover .value-name {
		color: #c8a96e;
	}

	.value-num {
		font-size: 2rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: rgba(200, 169, 110, 0.35);
		align-self: center;
		line-height: 1;
	}

	.value-icon-col {
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
		background: transparent;
		border: 1px solid rgba(32, 74, 119, 0.12);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.value-icon-col .mbr-iconfont {
		font-size: 1.3rem;
		color: rgba(32, 74, 119, 0.4);
	}

	.value-content {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.value-name {
		font-size: 1.15rem;
		font-weight: 600;
		color: #0d1f35;
		margin: 0;
		transition: color 0.2s;
	}

	.value-desc {
		font-size: 0.92rem;
		color: #6b7a8d;
		line-height: 1.75;
		margin: 0;
	}

	@media (max-width: 992px) {
		.values-inner {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
		.values-left {
			position: static;
		}
		.values-title {
			font-size: 2.2rem;
		}
	}

	@media (max-width: 576px) {
		.values-section {
			padding: 3.5rem 0 3rem;
		}
		.value-row {
			grid-template-columns: 3rem 3rem 1fr;
			gap: 0 1rem;
		}
		.value-num {
			font-size: 1.6rem;
		}
	}
</style>

