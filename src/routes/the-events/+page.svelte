<script>
	import PageHero from '$lib/components/PageHero.svelte';

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
		{ month: 'JAN', icon: 'fa fa-home', title: 'Annual Home Insurance Review', location: 'Montréal & Laval, QC', text: 'Every January, we invite homeowners to sit down with one of our advisors for a free annual review of their property coverage — making sure their policy keeps pace with their life.' },
		{ month: 'APR', icon: 'fa fa-car', title: 'Spring Auto Insurance Check-Up', location: 'Across Québec & Ontario', text: 'A seasonal check-up event held each spring to help drivers review and optimize their auto coverage before the busy summer months.' },
		{ month: 'SEP', icon: 'fa fa-briefcase', title: 'Back-to-Business Forum', location: 'Ottawa, ON', text: 'Each September, we bring together entrepreneurs and business owners for an afternoon of insights on commercial insurance, liability protection, and risk management.' }
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
/>

<!-- Yearly Recurrent Events -->
<section data-bs-version="5.1" class="features01 standm5 cid-vahyic37Pe" id="events-recurrent">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-10">
				<div class="content-wrapper">
					<div class="title-wrapper">
						<p class="mbr-label mbr-fonts-style display-4 eh-card-text">Every year, without exception</p>
						<h2 class="mbr-section-title mbr-fonts-style display-2 eh-main-title">Yearly Recurrent Events</h2>
					</div>
					<div class="row mt-4 g-4">
						{#each recurrent as ev}
							<div class="col-12 col-md-6 col-lg-4 d-flex">
								<div style="background:#fff; border-radius:10px; box-shadow:0 4px 20px rgba(0,0,0,0.07); overflow:hidden; width:100%; display:flex; flex-direction:column;">
									<div style="background:#204a77; padding:1.8rem 1.5rem; display:flex; align-items:center; gap:1rem; min-height:6.5rem;">
										<div style="text-align:center; min-width:3rem;">
											<div style="font-size:0.7rem; font-weight:700; color:rgba(255,255,255,0.7); letter-spacing:0.1em;">{ev.month}</div>
											<div style="font-size:0.75rem; color:rgba(255,255,255,0.55); margin-top:0.3rem;">↻ Yearly</div>
										</div>
										<div style="border-left:1px solid rgba(255,255,255,0.25); padding-left:1rem;">
											<h4 style="font-size:1rem; font-weight:600; color:#fff; margin:0 0 0.5rem;">{ev.title}</h4>
											<p style="font-size:0.85rem; color:rgba(255,255,255,0.7); margin:0;">
												<span class="fa fa-map-marker" style="margin-right:0.35rem;"></span>{ev.location}
											</p>
										</div>
									</div>
									<div style="padding:1.25rem 1.5rem; flex:1;">
										<p class="mbr-fonts-style display-7 eh-card-text">{ev.text}</p>
									</div>
									<div style="padding:0 1.5rem 0.75rem;">
										<a href="/contact-us" class="recurrent-btn">Register Interest</a>
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

<!-- Past Events -->
<section data-bs-version="5.1" class="features01 standm5 cid-vahwOEdtLW" id="events-past">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-10">
				<div class="content-wrapper">
					<div class="title-wrapper">
						<p class="mbr-label mbr-fonts-style display-4 eh-card-text">A look back</p>
						<h2 class="mbr-section-title mbr-fonts-style display-2 eh-main-title">Past Events</h2>
					</div>
					<div class="row items-wrapper justify-content-center">
						{#each events as ev}
							<div class="col-12 col-lg-4 item features-image">
								<div class="item-wrapper large-radius">
									<div class="item-img card-wrap" style="overflow:hidden;">
										<img src={ev.image} alt={ev.title} style="width:100%; height:220px; object-fit:cover;">
									</div>
									<div class="item-content">
										<p class="mbr-fonts-style display-7 eh-card-text" style="color:#204a77; font-weight:600; margin-bottom:0.3rem;">
											<span class="fa fa-calendar" style="margin-right:0.35rem;"></span>{ev.date}
											&nbsp;|&nbsp;
											<span class="fa fa-map-marker" style="margin-right:0.35rem;"></span>{ev.location}
										</p>
										<h4 class="item-title mbr-fonts-style display-5 eh-card-title">{ev.title}</h4>
										<p class="item-text mbr-fonts-style display-7 eh-card-text">{ev.text}</p>
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

<style>
	:global(#events-past .title-wrapper) {
		text-align: center !important;
	}

	.recurrent-btn {
		display: block;
		width: 100%;
		text-align: center;
		padding: 0.75rem 1rem;
		background: #c8a96e;
		color: #0d1f35;
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		text-decoration: none;
		border-radius: 6px;
		transition: background 0.2s, transform 0.2s;
	}

	.recurrent-btn:hover {
		background: #d9bc8a;
		color: #0d1f35;
		transform: translateY(-3px);
	}

	#events-cta {
		padding: 5rem 0;
		background: #f5f6f8;
		text-align: center;
	}

	#events-cta .cta-title {
		font-size: 2.4rem;
		font-weight: 300;
		color: #0d1f35;
		letter-spacing: -0.02em;
		margin: 0 0 2rem;
	}

	#events-cta .cta-btn {
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
		padding: 0.9rem 2.2rem;
		transition: background 0.2s, transform 0.15s;
	}

	#events-cta .cta-btn:hover {
		background: #0d1f35;
		transform: translateY(-1px);
		color: #fff;
	}
</style>

<!-- Stay Connected CTA -->
<section id="events-cta">
	<div class="container">
		<p class="cta-title">Want to be notified about future events ?</p>
		<a class="cta-btn" href="/contact-us">Get in Touch</a>
	</div>
</section>
