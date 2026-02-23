<script>
	import { page } from '$app/stores';
	import LanguageToggle from '$lib/components/LanguageToggle.svelte';
</script>

<section data-bs-version="5.1" class="menu menu01 neuralm5 cid-vahkITtt1N" id="menu01-4">
	<nav class="navbar navbar-dropdown navbar-expand-lg">
		<div class="content-wrap container">
			<div class="navbar-brand">
				<span class="navbar-logo">
					<a href="/">
						<img src="/assets/images/elhageassurances-logowhite.svg" alt="el HAGE assurances" style="height: 5.5rem;">
					</a>
				</span>
			</div>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<div class="hamburger">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
					<li class="nav-item"><a class="nav-link link text-white display-4" href="/">Home</a></li>
					<li class="nav-item"><a class="nav-link link text-white display-4" href="/about-us">about us</a></li>
					<li class="nav-item"><a class="nav-link link text-white display-4" href="/our-services">our services</a></li>
					<li class="nav-item"><a class="nav-link link text-white display-4" href="/the-events">the events</a></li>
					<li class="nav-item"><a class="nav-link link text-white display-4" href="/contact-us">contact us</a></li>
				</ul>
				<LanguageToggle />
			</div>
		</div>
	</nav>
</section>

<style>
	/* pull the whole nav bar up */
	:global(.cid-vahkITtt1N) { margin-top: -12px; }

	/* override Mobirise — match its specificity (.nav-item .nav-link) */
	:global(.cid-vahkITtt1N .nav-item .nav-link) {
		border-radius: 0 !important;
		position: relative;
		padding-bottom: 4px;
		font-size: 1.05rem !important;
		margin: 0 4px !important;
		transition: color 0.25s ease, opacity 0.25s ease, transform 0.25s ease !important;
	}
	:global(.cid-vahkITtt1N .nav-item .nav-link:hover),
	:global(.cid-vahkITtt1N .nav-item .nav-link:focus) {
		background: transparent !important;
		border-radius: 0 !important;
		color: #fff !important;
		opacity: 0.7;
		transform: translateY(-2px);
	}

	/* sliding underline */
	:global(.cid-vahkITtt1N .nav-item .nav-link::after) {
		content: '';
		position: absolute;
		bottom: 0; left: 50%;
		width: 0; height: 1px;
		background: #fff;
		transition: width 0.25s ease, left 0.25s ease;
	}
	:global(.cid-vahkITtt1N .nav-item .nav-link:hover::after),
	:global(.cid-vahkITtt1N .nav-item .nav-link:focus::after) {
		width: 60%; left: 20%;
	}
</style>
