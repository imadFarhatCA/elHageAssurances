<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';
	import QuoteForm from '$lib/components/QuoteForm.svelte';

	const services = [
		{
			image: '/assets/images/motorinsurance.jpg',
			label: 'Drive with confidence',
			title: 'Motor Insurance',
			text: 'Whether you drive a sedan, SUV, or commercial vehicle, our auto insurance covers you against accidents, theft, fire, and third-party liability. We work with leading insurers to find you competitive rates with flexible deductible options and roadside assistance add-ons.',
			highlights: ['Collision & comprehensive coverage', 'Third-party liability', 'Uninsured motorist protection', 'Roadside assistance']
		},
		{
			image: '/assets/images/homeinsurance.jpg',
			label: 'Your home, fully protected',
			title: 'Property Insurance',
			text: 'From condos and single-family homes to rental properties and commercial buildings, we offer property insurance tailored to your situation. Coverage includes fire, theft, water damage, natural disasters, and personal liability — so you can rest easy knowing your investment is protected.',
			highlights: ['Fire, theft & vandalism', 'Water & flood damage', 'Personal liability', 'Loss of use coverage']
		},
		{
			image: '/assets/images/healthinsurance.jpg',
			label: 'Your wellbeing matters',
			title: 'Health Insurance',
			text: 'Access quality healthcare without the financial burden. Our health insurance plans cover hospital stays, specialist visits, prescription drugs, dental, vision, and paramedical services. Available for individuals, families, and group employee plans.',
			highlights: ['Hospitalization & specialists', 'Prescription drug coverage', 'Dental & vision', 'Paramedical services']
		}
	];

	const additionalServices = [
		{ icon: 'fa fa-heartbeat', title: 'Life Insurance', text: 'Protect your family\'s financial future with term or whole life insurance. Whether you are looking for income replacement, mortgage protection, or estate planning — we will build the right plan for your stage of life.' },
		{ icon: 'fa fa-building', title: 'Corporate Insurance', text: 'Comprehensive coverage for businesses of all sizes. We cover commercial liability, property, equipment breakdown, business interruption, and professional liability — keeping your operations protected at every level.' },
		{ icon: 'fa fa-th-large', title: 'Bundle & Save', text: 'Combine your home and auto policies — or layer multiple coverages — for significant savings and simplified management. One advisor, one renewal date, and one point of contact for all your needs.' }
	];

	const faq = [
		{ q: 'How do I know which type of insurance I need?', a: 'Our advisors will assess your situation and recommend the coverage types that best match your risks, assets, and budget. There is no one-size-fits-all in insurance.' },
		{ q: 'Can I get coverage for a rental property?', a: 'Yes. We offer landlord insurance that covers the building, liability, and loss of rental income.' },
		{ q: 'Do you offer group health plans for businesses?', a: 'Absolutely. We design group benefit packages for companies of all sizes, including health, dental, vision, and disability coverage.' },
		{ q: 'What is the difference between term and whole life insurance?', a: 'Term life covers you for a fixed period (e.g. 10 or 20 years) at a lower cost. Whole life provides lifelong coverage with a cash value component. Our advisors will help you decide which fits your goals.' },
		{ q: 'How quickly can I get coverage?', a: 'In many cases, we can bind coverage within 24 to 48 hours of receiving your information. Reach out today and we will move quickly.' }
	];
</script>

<svelte:head>
	<title>Our Services – El-Hage Assurances</title>
</svelte:head>

<PageHero
	label="What we offer"
	title="Our Services"
	text="Comprehensive insurance solutions for every stage of life and every type of business."
	image="/assets/images/homeinsurance.jpg"
/>

<!-- Main 3 services with images -->
<section data-bs-version="5.1" class="features01 standm5 cid-vahyic37Pe" id="services-main">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-10">
				<div class="content-wrapper">
					<div class="title-wrapper">
						<p class="mbr-label mbr-fonts-style display-4 eh-card-text">Our Coverage Areas</p>
						<h2 class="mbr-section-title mbr-fonts-style display-2 eh-main-title">We stand by our clients at every step</h2>
					</div>
					<div class="row items-wrapper justify-content-center">
						{#each services as svc}
							<div class="col-12 col-lg-4 item features-image mb-4">
								<div class="item-wrapper large-radius">
									<div class="item-img card-wrap">
										<img src={svc.image} alt={svc.title}>
									</div>
									<div class="item-content">
										<p class="mbr-fonts-style display-7 eh-card-text" style="color:#204a77; font-weight:600; margin-bottom:0.4rem;">{svc.label}</p>
										<h4 class="item-title mbr-fonts-style display-5 eh-card-title">{svc.title}</h4>
										<p class="item-text mbr-fonts-style display-7 eh-card-text">{svc.text}</p>
										<ul style="padding-left:1.2rem; margin-top:0.75rem;">
											{#each svc.highlights as h}
												<li class="mbr-fonts-style display-7 eh-card-text" style="margin-bottom:0.25rem;">{h}</li>
											{/each}
										</ul>
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

<!-- Life, Corporate, Bundle -->
<section id="services-additional" class="additional-section">
	<div class="container">
		<div class="additional-inner">
			<div class="additional-left">
				<div class="additional-tag">
					<span class="additional-tag-pip"></span>
					More ways to protect
				</div>
				<h2 class="additional-title">Additional<br>Services</h2>
				<p class="additional-sub">Beyond our core coverage areas, we offer a full suite of complementary solutions tailored to your life and business.</p>
				<a href="/contact-us" class="additional-cta">Talk to an advisor</a>
			</div>
			<div class="additional-right">
				{#each additionalServices as svc, i}
					<div class="additional-row">
						<div class="additional-row-icon">
							<span class="mbr-iconfont {svc.icon}"></span>
						</div>
						<div class="additional-row-body">
							<h3 class="additional-row-title">{svc.title}</h3>
							<p class="additional-row-text">{svc.text}</p>
						</div>
						<div class="additional-row-num">0{i + 1}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Why choose us -->
<section data-bs-version="5.1" class="article01 launchm5 cid-vahwOEdtLW" id="services-why">
	<div class="container-fluid">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-10">
				<div class="content-wrapper">
					<div class="border-wrap border_1"></div>
					<div class="border-wrap border_2"></div>
					<div class="title-wrapper">
						<p class="mbr-label mbr-fonts-style display-4 eh-card-text">Why El-Hage Assurances ?</p>
						<h2 class="mbr-section-title mbr-fonts-style display-2 eh-main-title">Independent. Experienced. On your side.</h2>
						<div class="text-wrapper">
							<p class="mbr-text mbr-fonts-style display-4 eh-main-text">
								As an independent broker, we are not tied to any single insurance company. That means we shop the market on your behalf — comparing coverage, terms, and pricing from multiple trusted insurers to get you the best deal.<br><br>
								Our advisors bring decades of combined experience and are licensed across Québec and Ontario. We stay with you beyond the sale: reviewing your policies annually, helping you navigate claims, and adjusting your coverage as your life evolves.
							</p>
						</div>
						<div class="mbr-section-btn">
							<a class="btn btn-primary display-4" href="/contact-us">Get a Free Quote</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section data-bs-version="5.1" class="form01 rebootm5 cid-vap8M4mCKq" id="services-cta">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-5 card">
				<div class="content-wrapper">
					<p class="mbr-label mbr-fonts-style display-7 eh-card-text">Take the first step</p>
					<h2 class="mbr-section-title mbr-fonts-style display-2 eh-main-title">Get Covered Today</h2>
					<p class="mbr-text mbr-fonts-style display-7 eh-main-text">Fill out the form and one of our licensed advisors will contact you with a tailored quote — fast, simple, and obligation-free.</p>
				</div>
			</div>
			<div class="col-12 col-lg-5 card">
				<div class="mbr-form form-wrap card-wrap">
					<QuoteForm prefix="services" btnLabel="GET A QUOTE" />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ -->
<FaqAccordion items={faq} label="COMMON QUESTIONS ABOUT OUR SERVICES" />

<style>
	/* ── ADDITIONAL SERVICES ─────────────────────────── */
	.additional-section {
		padding: 5.5rem 0 5rem;
		background: #f5f6f8;
	}

	.additional-inner {
		display: grid;
		grid-template-columns: 1fr 1.8fr;
		gap: 5rem;
		align-items: start;
	}

	/* Left sticky panel */
	.additional-left {
		position: sticky;
		top: 6rem;
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	.additional-tag {
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
		width: fit-content;
	}
	.additional-tag-pip {
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #c8a96e;
	}

	.additional-title {
		font-size: 2.8rem;
		font-weight: 300;
		color: #0d1f35;
		letter-spacing: -0.02em;
		line-height: 1.15;
		margin: 0;
	}

	.additional-sub {
		font-size: 0.95rem;
		color: #6b7a8d;
		line-height: 1.75;
		margin: 0;
	}

	.additional-cta {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: #fff;
		text-decoration: none;
		background: #204a77;
		border-radius: 6px;
		padding: 0.9rem 1.8rem;
		width: fit-content;
		transition: background 0.2s, transform 0.15s;
		margin-top: 0.5rem;
	}
	.additional-cta:hover {
		background: #0d1f35;
		transform: translateY(-1px);
		color: #fff;
	}

	/* Right rows */
	.additional-right {
		display: flex;
		flex-direction: column;
	}

	.additional-row {
		display: grid;
		grid-template-columns: 3.2rem 1fr 2.5rem;
		gap: 0 1.5rem;
		align-items: center;
		padding: 2rem 0;
		border-bottom: 1px solid rgba(13, 31, 53, 0.09);
	}
	.additional-row:first-child {
		border-top: 1px solid rgba(13, 31, 53, 0.09);
	}

	.additional-row-icon {
		width: 3.2rem;
		height: 3.2rem;
		border-radius: 50%;
		background: #204a77;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.additional-row-icon .mbr-iconfont {
		font-size: 1.2rem;
		color: #fff;
	}

	.additional-row-body {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.additional-row-title {
		font-size: 1.1rem;
		font-weight: 600;
		color: #0d1f35;
		margin: 0;
	}

	.additional-row-text {
		font-size: 0.91rem;
		color: #6b7a8d;
		line-height: 1.72;
		margin: 0;
	}

	.additional-row-num {
		font-size: 1.6rem;
		font-weight: 700;
		color: rgba(200, 169, 110, 0.2);
		text-align: right;
		line-height: 1;
		align-self: center;
	}

	@media (max-width: 992px) {
		.additional-inner {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
		.additional-left {
			position: static;
		}
		.additional-title {
			font-size: 2.2rem;
		}
	}

	@media (max-width: 576px) {
		.additional-section {
			padding: 3.5rem 0 3rem;
		}
		.additional-row {
			grid-template-columns: 2.8rem 1fr;
		}
		.additional-row-num {
			display: none;
		}
	}

	/* ── WHY EL-HAGE — centered ──────────────────────── */
	:global(#services-why .title-wrapper),
	:global(#services-why .text-wrapper) {
		text-align: center !important;
	}
	:global(#services-why .mbr-section-btn) {
		justify-content: center !important;
		display: flex !important;
	}
</style>
