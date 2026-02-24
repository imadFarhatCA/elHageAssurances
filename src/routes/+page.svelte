<script>
	import HeroSlider from '$lib/components/HeroSlider.svelte';
	import QuoteForm from '$lib/components/QuoteForm.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import StatCard from '$lib/components/StatCard.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';

	const slides = [
		{ image: '/assets/images/elhageassurance-event001.jpg', alt: 'el HAGE assurances', title: '<strong>Event Y</strong>', text: 'Protecting what matters most.', href: '/our-services', btnText: 'Our Services' },
		{ image: '/assets/images/elhageassurance-event003.jpg', alt: 'el HAGE assurances', title: '<strong>Event X</strong>', text: 'Trusted coverage for every stage of life.', href: '/our-services', btnText: 'Our Services' },
		{ image: '/assets/images/elhageassurance-event002.jpg', alt: 'el HAGE assurances', title: 'meet the people behind it', text: 'Antoine el Hage', href: '/about-us', btnText: 'about the team' }
	];

	const categories = [
		{ icon: 'fa fa-home', label: 'Home' },
		{ icon: 'fa fa-building', label: 'Corporate' },
		{ icon: 'fa fa-car', label: 'Auto' },
		{ icon: 'fa fa-heartbeat', label: 'Life' },
		{ icon: 'fa fa-th-large', label: 'Bundle' }
	];

	const services = [
		{ image: '/assets/images/motorinsurance.jpg', alt: 'Motor Insurance', title: 'Motor Insurance', text: 'Protect your car against accidents, theft, fire, and third-party liability with flexible coverage options' },
		{ image: '/assets/images/homeinsurance.jpg', alt: 'Property Insurance', title: 'Property Insurance', text: 'Secure your home, apartment, or commercial property against fire, theft, natural disasters, and damage' },
		{ image: '/assets/images/healthinsurance.jpg', alt: 'Health Insurance', title: 'Health Insurance', text: 'Medical coverage for individuals, families, and companies with access to trusted hospitals and clinics' }
	];

	const stats = [
		{ value: '7M+', text: 'Insured households across<br>Québec & Ontario', cardClass: 'card-1' },
		{ value: '$45B+', text: 'In annual insurance premiums<br>across both provinces', cardClass: 'card-2' },
		{ value: '30%', text: 'Average savings when<br>bundling home & auto', cardClass: 'card-3' }
	];

	const insurers = [
		'intactLogo.svg', 'avivaLogo.svg', 'wawanesaLogo.svg', 'chubbLogo.svg',
		'libertyMutual.svg', 'echelonLogo.svg', 'Zurich.svg', 'markel.svg',
		'promutuel.svg', 'optimum.svg', 'northBridge logo.svg', 'aprilLogo.svg',
		'pafco.svg', 'uniqueAssurance.svg', 'intactPrestige.svg', 'premierCanada.svg',
		'AMFlogo.svg', 'revau.svg', 'victor.svg', 'soplex.svg',
		'orbit.svg', 'vago.svg', 'CFC.svg', 'Ches.svg',
		'SMB.svg', 'SWG.svg', 'TSW.svg', 'JUSTe.svg'
	];

	const faq = [
		{ q: 'What types of insurance does El Hage Assurances offer?', a: 'We offer home, auto, life, health, and commercial insurance — all tailored to your specific needs.' },
		{ q: 'How do I get a quote?', a: 'Fill out the quote form or call us directly. Our advisors will respond promptly with a personalized offer.' },
		{ q: 'Are your solutions available across Canada?', a: 'Yes. We serve individuals, families, and businesses across Canada with access to a broad network of trusted insurers.' },
		{ q: 'Can I bundle multiple policies?', a: 'Absolutely. Bundling policies — such as home and auto — saves money and simplifies your coverage management.' },
		{ q: 'What happens when I need to make a claim?', a: 'Our team guides you through every step of the claims process — from filing to resolution.' },
		{ q: 'How do I update my coverage as my needs change?', a: 'Simply reach out to your advisor. We regularly review policies to ensure coverage evolves with your life.' }
	];

	const panels = [
		{ label: "Let's talk Insurance", title: 'Life<br>is Important', text: "Secure your family's future with flexible life insurance plans tailored to your needs and budget.", linkClass: 'text-white' },
		{ label: "Let's talk Corporate", title: 'Business Insurances', text: 'Comprehensive coverage for your business — from liability and property to employee benefits and beyond.', linkClass: 'text-black' }
	];
</script>

<svelte:head>
	<title>Home – el Hage Assurances</title>
</svelte:head>

<HeroSlider {slides} id="heroCarousel" />

<!-- Insurer Logos Marquee -->
<section class="partners-strip">
	<div class="partners-label">Our Trusted Insurer Partners</div>
	<div class="partners-track-wrap">
		<div class="partners-track">
			{#each [...insurers, ...insurers] as logo}
				<div class="partners-logo">
					<img
						src="/assets/images/insurers/{encodeURIComponent(logo)}"
						alt={logo.replace(/Logo\.svg|\.svg/i, '').replace(/([A-Z])/g, ' $1').trim()}
						loading="lazy"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Tagline Banner -->
<section data-bs-version="5.1" class="features5 cid-vahEGYaLbg" id="features5-g">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="features-content">
					<div class="features-content-wrapper">
						<span class="mbr-iconfont mobi-mbri-more-vertical mobi-mbri display-3"></span>
						<p class="mbr-text mbr-fonts-style display-5 eh-main-title">Classic and Trust-Driven, Protecting what matters most !</p>
					</div>
					<div class="mbr-section-btn">
						<a class="btn btn-white display-4" href="/contact-us">Book Appointment</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Browse Category -->
<section data-bs-version="5.1" class="features6 cid-vahFekxp4z" id="features06-i">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 title-col">
				<h2 class="mbr-section-title mbr-fonts-style display-2 eh-main-title">Choose your Insurance</h2>
				<p class="cat-subtitle">Explore our range of coverage options tailored to protect what matters most to you.</p>
			</div>
		</div>
		<div class="row justify-content-center g-3 cat-grid">
			{#each categories as cat, i}
				<div class="col-6 col-md-4 col-lg-2 cat-col" class:cat-last={i === categories.length - 1 && categories.length % 2 !== 0}>
					<div class="card-wrapper h-100">
						<div class="card-box align-center">
							<span class="mbr-iconfont {cat.icon}"></span>
							<h4 class="card-title align-center mbr-black m-0 mbr-fonts-style display-7 eh-card-title">{cat.label}</h4>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- About -->
<section data-bs-version="5.1" class="article01 launchm5 cid-vahwOEdtLW" id="article01-7">
	<div class="container-fluid">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-10">
				<div class="content-wrapper">
					<div class="border-wrap border_1"></div>
					<div class="border-wrap border_2"></div>
					<div class="title-wrapper">
						<h2 class="mbr-section-title mbr-fonts-style display-2 eh-main-title">El-Hage Assurances</h2>
						<div class="text-wrapper">
							<p class="mbr-text mbr-fonts-style display-4 eh-main-text">Your trusted partner in protection &amp; peace of mind<br><br>At El Hage Assurances, we believe that insurance is not just a contract, it is a promise to protect what matters most to you.<br><br>For years, we have been helping individuals, families, and businesses in Canada secure their future with reliable, transparent, and affordable insurance solutions.</p>
						</div>
						<div class="mbr-section-btn">
							<a class="btn btn-primary display-4" href="/our-services">our Services</a>
							<a class="btn btn-white display-4" href="/contact-us">Get a Quote</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Quote Form -->
<section data-bs-version="5.1" class="form01 rebootm5 cid-vap8M4mCKq" id="form01-q">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-5 card">
				<div class="content-wrapper">
					<p class="mbr-label mbr-fonts-style display-7 eh-card-text">Let us get you Covered !</p>
					<h2 class="mbr-section-title mbr-fonts-style display-2 eh-main-title">Start Your Ease of Mind Here</h2>
					<p class="mbr-text mbr-fonts-style display-7 eh-main-text">Take the first step toward a well covered you. Tell us what you need and we will get back to you the soonest possible.</p>
				</div>
			</div>
			<div class="col-12 col-lg-5 card">
				<div class="mbr-form form-wrap card-wrap form-col-right">
					<QuoteForm prefix="home" btnLabel="GET A QUOTE" />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Our Commitment + Service Cards -->
<section data-bs-version="5.1" class="features01 standm5 cid-vahyic37Pe" id="features01-b">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-10">
				<div class="content-wrapper">
					<div class="title-wrapper">
						<p class="mbr-label mbr-fonts-style display-4 eh-card-text">our Commitment at "El Hage Assurances"</p>
						<h2 class="mbr-section-title mbr-fonts-style display-2 eh-main-title">We stand by our clients at every step</h2>
						<div class="text-wrapper">
							<p class="mbr-text mbr-fonts-style display-7 eh-main-text">choosing the right coverage<br>supporting you during claims<br>adapting your insurance as your life grows.<br><br>Your trust is our greatest asset.</p>
						</div>
					</div>
					<div class="row items-wrapper justify-content-center">
						{#each services as svc}
							<ServiceCard image={svc.image} alt={svc.alt} title={svc.title} text={svc.text} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Life & Business Panels -->
<section data-bs-version="5.1" class="features5 cid-vahFaOKWaz" id="afeatures5-h">
	<div class="container">
		<div class="row">
			<div class="col-12 col-items">
				{#each panels as panel}
					<div class="item col-12 col-lg-6">
						<div class="item-wrap">
							<div class="item-content">
								<p class="label-text mbr-fonts-style display-4 eh-card-text">{panel.label}</p>
								<h5 class="item-title mbr-fonts-style mb-0 display-2 eh-bigcard-title"><strong>{@html panel.title}</strong></h5>
								<p class="mbr-text mbr-fonts-style display-4 eh-bigcard-text">{panel.text}</p>
								<div class="link-container">
									<p class="display-4">
										<a href="/contact-us" class="link {panel.linkClass}">
											<span class="mobi-mbri mobi-mbri-new-file mbr-iconfont mbr-iconfont-btn link-icon" style="font-size:18px"></span>
											Get in touch&nbsp;<span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn" style="font-size:12px"></span>
										</a>
									</p>
									<p class="display-4">
										<a href="tel:+15140000000" class="link {panel.linkClass}">
											<span class="mobi-mbri mobi-mbri-setting mbr-iconfont mbr-iconfont-btn link-icon" style="font-size:18px"></span>&nbsp;+1 (514) 000 0000&nbsp;<span class="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn" style="font-size:12px"></span>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Stats -->
<section data-bs-version="5.1" class="features5 cid-vahEF82ihB" id="afeatures5-f">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-text">
				<div class="text-wrapper">
					<div class="cards-container row">
						{#each stats as stat}
							<StatCard value={stat.value} text={stat.text} cardClass={stat.cardClass} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<FaqAccordion items={faq} />

<style>
	/* about section title — override Mobirise near-black to brand blue */
	:global(.cid-vahwOEdtLW .eh-main-title) {
		color: #204a77 !important;
	}

	/* thin line under the three main titles */
	:global(.cid-vahwOEdtLW .eh-main-title::after),
	:global(.cid-vahFekxp4z .eh-main-title::after),
	:global(.cid-vahyic37Pe .eh-main-title::after) {
		content: '';
		display: block;
		width: 80px;
		height: 1px;
		background: currentColor;
		opacity: 0.5;
		margin: 0.9rem auto 0;
	}

	/* subtitle under title */
	:global(.cid-vahFekxp4z .cat-subtitle) {
		text-align: center;
		color: #6b7280;
		font-size: 1rem !important;
		font-weight: 300;
		margin: 2.2rem auto 2.5rem !important;
		max-width: 480px;
		line-height: 1.6;
	}

	/* square cards */
	:global(.cid-vahFekxp4z .card-wrapper) {
		aspect-ratio: 1 / 1 !important;
		display: flex !important;
		flex-direction: column !important;
		justify-content: center !important;
		align-items: center !important;
		border-radius: 8px !important;
		transition: all 0.25s ease !important;
	}

	@media (max-width: 767px) {
		:global(.cid-vahFekxp4z) {
			padding-top: 3rem !important;
			padding-bottom: 3rem !important;
		}
		:global(.cid-vahFekxp4z .cat-subtitle) {
			font-size: 0.9rem !important;
			margin: 1.8rem auto 1.5rem !important;
		}
		:global(.cid-vahFekxp4z .container) {
			padding-left: 16px !important;
			padding-right: 16px !important;
		}
		/* replace Bootstrap flex grid with CSS Grid for perfectly equal gaps */
		:global(.cid-vahFekxp4z .cat-grid) {
			display: grid !important;
			grid-template-columns: 1fr 1fr !important;
			gap: 10px !important;
		}
		/* strip Bootstrap col padding/margin so CSS grid gap is the only spacing */
		:global(.cid-vahFekxp4z .cat-grid > *) {
			padding-left: 0 !important;
			padding-right: 0 !important;
			margin-top: 0 !important;
			flex: none !important;
			max-width: none !important;
			width: auto !important;
		}
		:global(.cid-vahFekxp4z .mbr-iconfont) {
			font-size: 2.6rem !important;
			margin-bottom: 0.6rem !important;
		}
		:global(.cid-vahFekxp4z .eh-card-title) {
			font-size: 1rem !important;
			font-weight: 500 !important;
		}
		/* last card spans both columns — full width */
		:global(.cid-vahFekxp4z .cat-last) {
			grid-column: 1 / -1 !important;
		}
		:global(.cid-vahFekxp4z .cat-last .card-wrapper) {
			aspect-ratio: 2 / 1 !important;
			width: 100% !important;
		}
	}

	/* ── PARTNERS MARQUEE ────────────────────────────────────── */
	@keyframes partners-scroll {
		from { transform: translateX(0); }
		to   { transform: translateX(-50%); }
	}

	.partners-strip {
		background: #f7f8fa;
		padding: 3.5rem 0;
		overflow: hidden;
	}

	.partners-label {
		text-align: center;
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: #a0aec0;
		margin-bottom: 2.2rem;
	}

	.partners-track-wrap {
		overflow: hidden;
		-webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
		mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
	}

	.partners-track {
		display: flex;
		align-items: center;
		gap: 6rem;
		width: max-content;
		animation: partners-scroll 110s linear infinite;
	}
	.partners-track:hover {
		animation-play-state: paused;
	}

	.partners-logo {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 150px;
		flex-shrink: 0;
	}
	.partners-logo img {
		height: 124px;
		width: auto;
		max-width: 340px;
		object-fit: contain;
		filter: grayscale(1) opacity(0.45);
		transition: filter 0.25s ease;
	}
	.partners-logo img:hover {
		filter: grayscale(0) opacity(1);
	}

	@media (max-width: 768px) {
		.partners-logo {
			height: 130px;
		}
		.partners-logo img {
			height: 108px;
			max-width: 280px;
		}
		.partners-track {
			gap: 5rem;
			animation-duration: 90s;
		}
	}
</style>
