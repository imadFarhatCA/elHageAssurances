<script>
	import QuoteForm from '$lib/components/QuoteForm.svelte';
</script>

<svelte:head>
	<title>Contact Us – el Hage Assurances</title>
</svelte:head>

<section data-bs-version="5.1" class="form01 rebootm5 cid-vap8M4mCKq" id="contact-form">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-5 card">
				<div class="content-wrapper">
					<p class="mbr-label mbr-fonts-style display-7">Let us get you Covered !</p>
					<h2 class="mbr-section-title mbr-fonts-style display-2">Contact Us</h2>
					<p class="mbr-text mbr-fonts-style display-7">Reach out to our team. We will get back to you the soonest possible.</p>
					<ul class="list mbr-fonts-style display-7 mt-3">
						<li>info@elhageassurances.com</li>
						<li>+1 (514) 000 0000</li>
					</ul>
				</div>
			</div>
			<div class="col-12 col-lg-5 card">
				<h3 class="mbr-section-subtitle mbr-fonts-style display-5">SEND A MESSAGE</h3>
				<div class="mbr-form form-wrap card-wrap">
					<QuoteForm prefix="contact" btnLabel="SEND MESSAGE" />
				</div>
			</div>
		</div>
	</div>
</section>
