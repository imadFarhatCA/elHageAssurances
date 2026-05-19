<script>
	import HeroQuoteFinder from '$lib/components/hero/HeroQuoteFinder.svelte';
	import PartnersMarquee from '$lib/components/PartnersMarquee.svelte';
	import BookingBanner from '$lib/components/BookingBanner.svelte';
	import ChooseInsuranceGrid from '$lib/components/ChooseInsuranceGrid.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import QuoteAndRefer from '$lib/components/QuoteAndRefer.svelte';
	import OurCommitment from '$lib/components/OurCommitment.svelte';
	import LifeBusinessPanels from '$lib/components/LifeBusinessPanels.svelte';
	import FaqAccordion from '$lib/components/FaqAccordion.svelte';

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
</script>

<svelte:head>
	<title>Home – el Hage Assurances</title>
</svelte:head>

<HeroQuoteFinder />
<PartnersMarquee logos={insurers} />
<BookingBanner />
<ChooseInsuranceGrid />
<HowItWorks />
<QuoteAndRefer />
<OurCommitment />
<LifeBusinessPanels />
<FaqAccordion items={faq} />
