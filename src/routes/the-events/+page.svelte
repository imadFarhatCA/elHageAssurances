<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import RecurrentEventsList from '$lib/components/RecurrentEventsList.svelte';
	import PastEventsList from '$lib/components/PastEventsList.svelte';

	const events = [
		{
			image: '/assets/images/elhageassurance-event001.jpg',
			date: 'March 2025',
			location: 'Montréal, QC',
			title: 'Insurance Awareness Evening',
			text: 'An evening dedicated to helping families in the Montréal area understand their coverage options — from home and auto to life and health. Our advisors were on hand to answer questions and offer free mini consultations.'
		},
		{
			image: '/assets/images/elhageassurance-event003.jpg',
			date: 'November 2024',
			location: 'Ottawa, ON',
			title: 'Business Protection Forum',
			text: 'El-Hage Assurances hosted a half-day forum for local business owners on commercial liability, property coverage, and employee benefit plans. Over 60 entrepreneurs attended and walked away with actionable insights.'
		},
		{
			image: '/assets/images/elhageassurance-event002.jpg',
			date: 'June 2024',
			location: 'Laval, QC',
			title: 'Community Open Day',
			text: 'A community gathering where residents could meet our team, ask questions about their policies, and participate in workshops on home safety and disaster preparedness.'
		}
	];

	const recurrent = [
		{ month: 'JAN', icon: 'fa fa-home',      title: 'Annual Home Insurance Review',   location: 'Montréal & Laval, QC',    text: 'Every January, we invite homeowners to sit down with one of our advisors for a free annual review of their property coverage — making sure their policy keeps pace with their life.' },
		{ month: 'APR', icon: 'fa fa-car',       title: 'Spring Auto Insurance Check-Up', location: 'Across Québec & Ontario', text: 'A seasonal check-up event held each spring to help drivers review and optimize their auto coverage before the busy summer months.' },
		{ month: 'SEP', icon: 'fa fa-briefcase', title: 'Back-to-Business Forum',         location: 'Ottawa, ON',              text: 'Each September, we bring together entrepreneurs and business owners for an afternoon of insights on commercial insurance, liability protection, and risk management.' }
	];
</script>

<svelte:head>
	<title>The Events – El-Hage Assurances</title>
</svelte:head>

<PageHero
	label="Stay connected"
	title="The Events"
	text="We believe in more than policies — we invest in our community through education, connection, and open conversations about protection."
	image="/assets/images/elhageassurance-event001.jpg"
	imagePosition="center 30%"
/>

<RecurrentEventsList events={recurrent} />

<PastEventsList events={events} />

<!-- Stay Connected CTA -->
<section class="ev-cta">
	<div class="ev-cta-inner">
		<div class="ev-eyebrow">
			<span class="rule"></span>
			<span class="text">Stay in the loop</span>
		</div>
		<h2 class="ev-title">
			Want to know about <span class="accent">future events?</span>
		</h2>
		<p class="ev-sub">Leave us a note and we'll let you know when the next one is scheduled.</p>
		<a class="ev-btn" href="/contact-us">
			Get in touch <span class="arrow">→</span>
		</a>
	</div>
</section>

<style>
	.ev-cta {
		background: linear-gradient(180deg, #f4f8fd 0%, #ffffff 100%);
		padding: 5rem 1.5rem 6rem;
		text-align: center;
	}
	.ev-cta-inner { max-width: 640px; margin: 0 auto; }

	.ev-eyebrow { display: inline-flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
	.rule { width: 2.5rem; height: 1px; background: #c8a96e; }
	.text {
		font-size: 0.72rem; font-weight: 700;
		letter-spacing: 0.22em; text-transform: uppercase;
		color: #c8a96e;
	}

	.ev-title {
		margin: 0;
		font-size: clamp(2rem, 3.4vw, 2.8rem);
		font-weight: 300;
		letter-spacing: -0.02em; line-height: 1.15;
		color: #0f1e2e;
	}
	.ev-title .accent { color: #204a77; font-weight: 600; }
	.ev-sub {
		margin: 1.2rem auto 2rem;
		font-size: 1rem; line-height: 1.6; color: #4a5a6e;
	}

	.ev-btn {
		display: inline-flex; align-items: center; gap: 0.55rem;
		padding: 1rem 1.75rem;
		background: #204a77; color: #fff;
		font-size: 0.85rem; font-weight: 700;
		letter-spacing: 0.04em; text-transform: uppercase;
		border-radius: 999px;
		text-decoration: none;
		transition: background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
	}
	.ev-btn:hover {
		background: #1a3d63; transform: translateY(-1px);
		box-shadow: 0 12px 28px -10px rgba(32,74,119,0.5);
	}
	.arrow { transition: transform 0.2s ease; }
	.ev-btn:hover .arrow { transform: translateX(3px); }
</style>
