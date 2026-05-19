<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import ServicesGrid from '$lib/components/ServicesGrid.svelte';
	import WhyUsTrio from '$lib/components/WhyUsTrio.svelte';
	import Partnership from '$lib/components/Partnership.svelte';
	import QuoteAndRefer from '$lib/components/QuoteAndRefer.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';

	const services = [
		{
			image: '/assets/images/motorinsurance.jpg',
			label: 'Drive with confidence',
			title: 'Motor Insurance',
			text: 'Whether you drive a sedan, SUV, or commercial vehicle, our auto insurance covers you against accidents, theft, fire, and third-party liability.',
			highlights: ['Collision & comprehensive coverage', 'Third-party liability', 'Uninsured motorist protection', 'Roadside assistance']
		},
		{
			image: '/assets/images/homeinsurance.jpg',
			label: 'Your home, fully protected',
			title: 'Property Insurance',
			text: 'From condos and single-family homes to rental properties and commercial buildings, we offer property coverage tailored to your situation.',
			highlights: ['Fire, theft & vandalism', 'Water & flood damage', 'Personal liability', 'Loss of use coverage']
		},
		{
			image: '/assets/images/healthinsurance.jpg',
			label: 'Your wellbeing matters',
			title: 'Health Insurance',
			text: 'Access quality healthcare without the financial burden — for individuals, families, and group employee plans.',
			highlights: ['Hospitalization & specialists', 'Prescription drug coverage', 'Dental & vision', 'Paramedical services']
		}
	];

	const additionalServices = [
		{ icon: 'fa fa-heartbeat', title: 'Life Insurance',      text: 'Protect your family\'s financial future with term or whole life insurance. Whether you are looking for income replacement, mortgage protection, or estate planning — we will build the right plan for your stage of life.' },
		{ icon: 'fa fa-building',  title: 'Corporate Insurance', text: 'Comprehensive coverage for businesses of all sizes. We cover commercial liability, property, equipment breakdown, business interruption, and professional liability — keeping your operations protected at every level.' },
		{ icon: 'fa fa-th-large',  title: 'Bundle & Save',       text: 'Combine your home and auto policies — or layer multiple coverages — for significant savings and simplified management. One advisor, one renewal date, and one point of contact for all your needs.' }
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
	imagePosition="center 35%"
/>

<ServicesGrid
	eyebrow="Our coverage areas"
	headline="We stand by our clients,"
	headlineAccent="at every step."
	sub="Three pillars of coverage built around real-life risks and goals."
	{services}
/>

<Partnership />

<!-- Life, Corporate, Bundle -->
<section id="services-additional" class="additional-section">
	<div class="container">
		<div class="additional-inner">
			<div class="additional-left">
				<div class="additional-tag">
					<span class="additional-tag-pip"></span>
					More ways to protect
				</div>
				<h2 class="additional-title">Additional<br>services</h2>
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

<WhyUsTrio />

<QuoteAndRefer />

<FaqAccordion items={faq} label="Common questions about our services" />

<style>
	/* ── ADDITIONAL SERVICES (sticky-left + numbered rows) ─── */
	.additional-section {
		padding: 5.5rem 0 5rem;
		background: #f5f6f8;
	}
	.additional-inner {
		display: grid;
		grid-template-columns: 1fr 1.8fr;
		gap: 5rem; align-items: start;
	}
	.additional-left {
		position: sticky; top: 6rem;
		display: flex; flex-direction: column; gap: 1.2rem;
	}
	.additional-tag {
		display: inline-flex; align-items: center; gap: 0.5rem;
		font-size: 0.7rem; font-weight: 700;
		letter-spacing: 0.22em; text-transform: uppercase;
		color: #c8a96e;
		border: 1px solid rgba(200, 169, 110, 0.45);
		border-radius: 100px;
		padding: 0.35rem 0.9rem;
		width: fit-content;
	}
	.additional-tag-pip {
		display: inline-block;
		width: 6px; height: 6px; border-radius: 50%;
		background: #c8a96e;
	}
	.additional-title {
		font-size: 2.8rem; font-weight: 300;
		color: #0d1f35;
		letter-spacing: -0.02em; line-height: 1.15;
		margin: 0;
	}
	.additional-sub {
		font-size: 0.95rem; color: #6b7a8d;
		line-height: 1.75; margin: 0;
	}
	.additional-cta {
		display: inline-flex; align-items: center; justify-content: center;
		font-size: 0.78rem; font-weight: 700;
		letter-spacing: 0.18em; text-transform: uppercase;
		color: #fff; text-decoration: none;
		background: #204a77;
		border-radius: 999px;
		padding: 0.9rem 1.8rem;
		width: fit-content;
		transition: background 0.2s, transform 0.15s;
		margin-top: 0.5rem;
	}
	.additional-cta:hover {
		background: #1a3d63; transform: translateY(-1px);
	}

	.additional-right { display: flex; flex-direction: column; }
	.additional-row {
		display: grid;
		grid-template-columns: 3.2rem 1fr 2.5rem;
		gap: 0 1.5rem;
		align-items: center;
		padding: 2rem 0;
		border-bottom: 1px solid rgba(13, 31, 53, 0.09);
	}
	.additional-row:first-child { border-top: 1px solid rgba(13, 31, 53, 0.09); }
	.additional-row-icon {
		width: 3.2rem; height: 3.2rem;
		border-radius: 50%;
		background: #204a77;
		display: flex; align-items: center; justify-content: center;
		flex-shrink: 0;
	}
	.additional-row-icon .mbr-iconfont { font-size: 1.2rem; color: #fff; }
	.additional-row-body { display: flex; flex-direction: column; gap: 0.35rem; }
	.additional-row-title { font-size: 1.1rem; font-weight: 600; color: #0d1f35; margin: 0; }
	.additional-row-text { font-size: 0.91rem; color: #6b7a8d; line-height: 1.72; margin: 0; }
	.additional-row-num {
		font-size: 1.6rem; font-weight: 700;
		color: rgba(200, 169, 110, 0.2);
		text-align: right; line-height: 1;
		align-self: center;
	}

	@media (max-width: 992px) {
		.additional-inner { grid-template-columns: 1fr; gap: 3rem; }
		.additional-left { position: static; }
		.additional-title { font-size: 2.2rem; }
	}
	@media (max-width: 576px) {
		.additional-section { padding: 3.5rem 0 3rem; }
		.additional-row { grid-template-columns: 2.8rem 1fr; }
		.additional-row-num { display: none; }
	}
</style>
