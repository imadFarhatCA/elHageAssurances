<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Nav />

<!-- pushes page content below the fixed nav bar on mobile -->
<div class="nav-offset"></div>

{@render children()}
<Footer />

<style>
	/* desktop: nav is in flow, no offset needed */
	.nav-offset { display: none; }

	/* mobile: nav is fixed, offset must match its height (~80px) */
	@media (max-width: 991px) {
		.nav-offset {
			display: block;
			height: 80px;
		}
	}
</style>
