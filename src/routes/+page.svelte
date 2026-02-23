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
		{ icon: 'mbrib-home', label: 'Home' },
		{ icon: 'icon54-v4-building-construction', label: 'Corporate' },
		{ icon: 'icon54-v4-car', label: 'Auto' },
		{ icon: 'icon54-v4-lifebuoy', label: 'Life' },
		{ icon: 'icon54-v2-left-items', label: 'Bundle' }
	];

	const services = [
		{ image: '/assets/images/motorinsurance.jpg', alt: 'Motor Insurance', title: 'Motor Insurance', text: 'Protect your car against accidents, theft, fire, and third-party liability with flexible coverage options' },
		{ image: '/assets/images/homeinsurance.jpg', alt: 'Property Insurance', title: 'Property Insurance', text: 'Secure your home, apartment, or commercial property against fire, theft, natural disasters, and damage' },
		{ image: '/assets/images/healthinsurance.jpg', alt: 'Health Insurance', title: 'Health Insurance', text: 'Medical coverage for individuals, families, and companies with access to trusted hospitals and clinics' }
	];

	const stats = [
		{ value: '25mil', text: 'Human labor hours saved<br>with help of AI', cardClass: 'card-1' },
		{ value: '1.5b+', text: 'Generated revenue by<br>AI Solutions', cardClass: 'card-2' },
		{ value: '$20mil+', text: 'Saved operational costs<br>due to AI', cardClass: 'card-3' }
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
			<div class="col-12 title-col pb-5">
				<h2 class="main-title align-center mbr-black m-0 mbr-fonts-style display-5 eh-main-title"><strong>BROWSE CATEGORY</strong></h2>
			</div>
			{#each categories as cat}
				<div class="col-12 col-md-6 col-lg-2 md-pb">
					<div class="card-wrapper">
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
						<h2 class="mbr-section-title mbr-fonts-style display-2 eh-main-title">el Hage Assurances</h2>
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
				<h3 class="mbr-section-subtitle mbr-fonts-style display-5 eh-main-title">GET A QUOTE !</h3>
				<div class="mbr-form form-wrap card-wrap">
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
