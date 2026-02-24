<script>
	import { page } from '$app/stores';
	import LanguageToggle from '$lib/components/LanguageToggle.svelte';

	let menuOpen = $state(false);

	$effect(() => {
		$page.url.pathname;
		menuOpen = false;
	});
</script>

{#if menuOpen}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="nav-backdrop" onclick={() => menuOpen = false}></div>
{/if}

<section class="menu menu01 neuralm5 cid-vahkITtt1N" id="menu01-4">
	<nav class="navbar navbar-dropdown navbar-expand-lg">
		<div class="content-wrap container">

			<div class="navbar-brand">
				<a href="/" onclick={() => menuOpen = false}>
					<img src="/assets/images/elhageassurances-logowhite.svg" alt="el HAGE assurances">
				</a>
			</div>

			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class="navbar-toggler" type="button" onclick={() => menuOpen = !menuOpen}>
				<div class="hamburger" class:open={menuOpen}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>

			<!--
				Dropped "collapse" class entirely — no more reliance on Bootstrap JS or
				Bootstrap CSS .collapse:not(.show){display:none}.
				Visibility is 100% Svelte-driven via .eh-menu / .eh-menu-open.
			-->
			<div class="navbar-collapse eh-menu" class:eh-menu-open={menuOpen}>
				<ul class="navbar-nav nav-dropdown nav-right">
					<li class="nav-item"><a class="nav-link link text-white display-4" href="/"             onclick={() => menuOpen = false}>Home</a></li>
					<li class="nav-item"><a class="nav-link link text-white display-4" href="/about-us"     onclick={() => menuOpen = false}>about us</a></li>
					<li class="nav-item"><a class="nav-link link text-white display-4" href="/our-services" onclick={() => menuOpen = false}>our services</a></li>
					<li class="nav-item"><a class="nav-link link text-white display-4" href="/the-events"   onclick={() => menuOpen = false}>the events</a></li>
					<li class="nav-item"><a class="nav-link link text-white display-4" href="/contact-us"   onclick={() => menuOpen = false}>contact us</a></li>
				</ul>

				<a href="/contact-us" class="mobile-cta" onclick={() => menuOpen = false}>Get a Quote</a>

				<LanguageToggle />

				<div class="mobile-extras">
					<LanguageToggle />
					<div class="mobile-contact">
						<p>+1 (239) 000-0000</p>
						<p>4220 blvd Saint-Martin O, Laval, QC H7T 1C1</p>
					</div>
					<div class="mobile-social">
						<span class="mbr-iconfont socicon-facebook socicon"></span>
						<span class="mbr-iconfont socicon-instagram socicon"></span>
						<span class="mbr-iconfont socicon-linkedin socicon"></span>
					</div>
				</div>
			</div>

		</div>
	</nav>
</section>

<style>
	/* ── LOGO ───────────────────────────────────────────── */
	:global(.cid-vahkITtt1N .navbar-brand img) {
		height: 6.6rem !important;
	}

	/* ── NAV LINKS — desktop hover ──────────────────────── */
	:global(.cid-vahkITtt1N .nav-item .nav-link) {
		border-radius: 0 !important;
		position: relative;
		padding-bottom: 4px;
		font-size: 1.05rem !important;
		margin: 0 4px !important;
		color: #fff !important;
		transition: opacity 0.2s, transform 0.2s, color 0s !important;
	}
	:global(.cid-vahkITtt1N .nav-item .nav-link:hover),
	:global(.cid-vahkITtt1N .nav-item .nav-link:focus) {
		background: transparent !important;
		color: #fff !important;
		opacity: 0.7;
		transform: translateY(-2px);
	}
	:global(.cid-vahkITtt1N .nav-item .nav-link::after) {
		content: '';
		position: absolute;
		bottom: 0; left: 50%;
		width: 0; height: 1px;
		background: #fff;
		transition: width 0.25s, left 0.25s;
	}
	:global(.cid-vahkITtt1N .nav-item .nav-link:hover::after) {
		width: 60%; left: 20%;
	}

	/* ── HAMBURGER → X ─────────────────────────────────── */
	:global(.cid-vahkITtt1N .hamburger.open span:nth-child(1)) {
		top: 8px !important; width: 0 !important; opacity: 0 !important; right: 50% !important;
	}
	:global(.cid-vahkITtt1N .hamburger.open span:nth-child(2)) {
		transform: rotate(45deg) !important;
	}
	:global(.cid-vahkITtt1N .hamburger.open span:nth-child(3)) {
		transform: rotate(-45deg) !important;
	}
	:global(.cid-vahkITtt1N .hamburger.open span:nth-child(4)) {
		top: 8px !important; width: 0 !important; opacity: 0 !important; right: 50% !important;
	}

	/* ── BACKDROP ───────────────────────────────────────── */
	.nav-backdrop {
		position: fixed;
		inset: 0;
		z-index: 998;
	}

	/* ── MOBILE EXTRAS — hidden on desktop ──────────────── */
	.mobile-extras { display: none; }
	.mobile-cta { display: none; }

	/* ══════════════════════════════════════════════════════
	   MOBILE  ≤ 991px
	   — all show/hide is via .eh-menu / .eh-menu-open
	   ══════════════════════════════════════════════════════ */
	@media (max-width: 991px) {

		:global(.cid-vahkITtt1N) {
			position: fixed !important;
			top: 0 !important; left: 0 !important; right: 0 !important;
			z-index: 1000 !important;
			margin-top: 0 !important;
		}

		:global(.cid-vahkITtt1N .navbar) {
			position: relative !important;
		}

		/* HIDDEN by default on mobile */
		:global(.cid-vahkITtt1N .eh-menu) {
			display: none !important;
		}

		/* VISIBLE when Svelte adds .eh-menu-open */
		:global(.cid-vahkITtt1N .eh-menu.eh-menu-open) {
			display: block !important;
			position: absolute !important;
			top: 100% !important;
			left: 0 !important; right: 0 !important;
			z-index: 999 !important;
			background: #204a77 !important;
			padding: 0 1rem 1.5rem !important;
			box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3) !important;
			max-height: 85vh !important;
			overflow-y: auto !important;
		}

		:global(.cid-vahkITtt1N .navbar-brand img) {
			height: 4.5rem !important;
		}

		:global(.cid-vahkITtt1N .content-wrap) {
			flex-wrap: nowrap !important;
			align-items: center !important;
		}

		:global(.cid-vahkITtt1N .navbar-nav) {
			padding-top: 1rem !important;
			align-items: center !important;
			width: 100%;
		}
		:global(.cid-vahkITtt1N .nav-item) { width: 100%; }
		:global(.cid-vahkITtt1N .nav-item .nav-link) {
			font-size: 1.35rem !important;
			padding: 10px 0 !important;
			margin: 0 !important;
			display: block;
			text-align: center !important;
		}

		:global(.cid-vahkITtt1N .navbar-collapse > .lang-toggle) {
			display: none !important;
		}

		.mobile-extras {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1.5rem;
			padding: 1.8rem 0 1rem;
			border-top: 1px solid rgba(255, 255, 255, 0.15);
			margin-top: 0.8rem;
			width: 100%;
		}
		.mobile-cta {
			display: block;
			width: 60%;
			margin: 0.8rem auto 0;
			text-align: center;
			padding: 1.2rem 1.5rem;
			background: #c8a96e;
			color: #0d1f35 !important;
			font-size: 0.8rem;
			font-weight: 700;
			letter-spacing: 0.18em;
			text-transform: uppercase;
			text-decoration: none;
			border-radius: 6px;
			transition: background 0.2s, transform 0.15s;
		}
		.mobile-cta:hover {
			background: #b8996a;
			transform: translateY(-1px);
		}

		.mobile-contact {
			text-align: center;
			font-size: 0.92rem;
			color: rgba(255, 255, 255, 0.6);
			line-height: 1.9;
		}
		.mobile-contact p { margin: 0; }
		.mobile-social { display: flex; gap: 1.4rem; }
		:global(.mobile-social .mbr-iconfont) {
			font-size: 1.4rem;
			color: rgba(255, 255, 255, 0.65);
		}
	}
</style>
