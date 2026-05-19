<script>
	import { site } from '$lib/data/site.js';

	const insuranceLinks = [
		{ label: 'Home insurance',     href: '/our-services?type=home' },
		{ label: 'Auto insurance',     href: '/our-services?type=auto' },
		{ label: 'Life insurance',     href: '/our-services?type=life' },
		{ label: 'Health insurance',   href: '/our-services?type=health' },
		{ label: 'Commercial',         href: '/our-services?type=commercial' },
		{ label: 'Bundle policies',    href: '/our-services?type=bundle' }
	];
	const companyLinks = [
		{ label: 'About us',     href: '/about-us' },
		{ label: 'Our services', href: '/our-services' },
		{ label: 'Events',       href: '/the-events' },
		{ label: 'Contact',      href: '/contact-us' }
	];
	const actionLinks = [
		{ label: 'Get a quote',     href: '/#quote' },
		{ label: 'Refer a client',  href: '/#refer' },
		{ label: 'Book a meeting',  href: site.bookings },
		{ label: 'File a claim',    href: '/contact-us' }
	];
	const social = [
		{ icon: 'fa fa-facebook',  href: site.social.facebook,  label: 'Facebook' },
		{ icon: 'fa fa-instagram', href: site.social.instagram, label: 'Instagram' },
		{ icon: 'fa fa-linkedin',  href: site.social.linkedin,  label: 'LinkedIn' }
	];

	const year = new Date().getFullYear();
</script>

<footer class="ft">
	<div class="ft-inner">
		<div class="ft-top">
			<aside class="brand-zone">
				<div class="ft-logo-slot">
					<div class="ft-logo-wrap">
						<img src="/assets/images/hwhite.svg" alt="El-Hage Assurances" class="ft-logo" />
						<div class="ft-logo-line"></div>
					</div>
				</div>
				<h3 class="ft-brand">{site.name}</h3>
				<p class="ft-tagline">{site.tagline}</p>

				<ul class="ft-contact">
					<li>
						<span class="ft-ci fa fa-map-marker"></span>
						<span>{site.address.line1}<br>{site.address.line2}</span>
					</li>
					<li>
						<a href={site.phone.href}><span class="ft-ci fa fa-phone"></span>{site.phone.display}</a>
					</li>
					<li>
						<a href={site.email.href}><span class="ft-ci fa fa-envelope"></span>{site.email.display}</a>
					</li>
				</ul>

			</aside>

			<div class="links-zone">
				<div class="links-grid">
					<div class="col">
						<h4 class="col-title">Insurance</h4>
						<ul class="col-links">
							{#each insuranceLinks as l}<li><a href={l.href}>{l.label}</a></li>{/each}
						</ul>
					</div>
					<div class="col">
						<h4 class="col-title">Company</h4>
						<ul class="col-links">
							{#each companyLinks as l}<li><a href={l.href}>{l.label}</a></li>{/each}
						</ul>
					</div>
					<div class="col">
						<h4 class="col-title">Get started</h4>
						<ul class="col-links">
							{#each actionLinks as l}<li><a href={l.href}>{l.label}</a></li>{/each}
						</ul>
					</div>
				</div>

				<div class="links-cta">
					<div class="links-cta-text">
						<p class="links-cta-eyebrow">Ready when you are</p>
						<p class="links-cta-line">Get a tailored quote in <strong>15 minutes</strong>.</p>
					</div>
					<a href="/#quote" class="links-cta-btn">
						Get started <span class="arrow">→</span>
					</a>
				</div>
			</div>
		</div>

		<div class="ft-bar">
			<p class="copy">© {year} El-Hage Assurances · All rights reserved</p>
			<div class="ft-social">
				{#each social as s}
					<a href={s.href} class="social-link" aria-label={s.label} target="_blank" rel="noopener">
						<span class={s.icon}></span>
					</a>
				{/each}
			</div>
			<div class="ft-legal">
				<a href="#">Privacy</a>
				<span class="sep">·</span>
				<a href="#">Terms</a>
				<span class="sep">·</span>
				<a href="#">Cookies</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.ft {
		background:
			radial-gradient(ellipse at top right, rgba(200,169,110,0.08) 0%, transparent 55%),
			linear-gradient(180deg, #0c1626 0%, #060d1a 100%);
		color: #fff;
		padding: 4.5rem 1.5rem 0;
	}
	.ft-inner { max-width: 1280px; margin: 0 auto; }

	.ft-top {
		display: grid;
		grid-template-columns: 0.95fr 1.55fr;
		gap: 2.5rem;
		padding-bottom: 3.5rem;
		border-bottom: 1px solid rgba(255,255,255,0.08);
	}

	.brand-zone {
		display: flex;
		flex-direction: column;
		padding: 2rem 2rem 2.25rem;
		background:
			radial-gradient(ellipse at top left, rgba(32,74,119,0.18) 0%, transparent 60%),
			rgba(255,255,255,0.025);
		border: 1px solid rgba(255,255,255,0.06);
		border-radius: 16px;
	}

	.links-zone {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		background:
			radial-gradient(ellipse at bottom right, rgba(200,169,110,0.08) 0%, transparent 60%),
			rgba(255,255,255,0.025);
		border: 1px solid rgba(255,255,255,0.06);
		border-radius: 16px;
	}

	.links-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 2.25rem;
		flex: 1;
	}

	.links-cta {
		margin-top: 2.25rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(255,255,255,0.08);
		display: flex; align-items: center; justify-content: space-between;
		gap: 1.5rem; flex-wrap: wrap;
	}
	.links-cta-text { display: flex; flex-direction: column; }
	.links-cta-eyebrow {
		margin: 0 0 0.3rem;
		font-size: 0.7rem; font-weight: 700;
		letter-spacing: 0.18em; text-transform: uppercase;
		color: #c8a96e;
	}
	.links-cta-line {
		margin: 0;
		font-size: 0.95rem;
		color: rgba(255,255,255,0.78);
	}
	.links-cta-line strong { color: #fff; font-weight: 600; }
	.links-cta-btn {
		display: inline-flex; align-items: center; gap: 0.5rem;
		padding: 0.85rem 1.5rem;
		background: #c8a96e; color: #0c1626;
		font-size: 0.82rem; font-weight: 700;
		letter-spacing: 0.05em; text-transform: uppercase;
		border-radius: 999px;
		text-decoration: none;
		transition: background 0.15s ease, transform 0.15s ease;
	}
	.links-cta-btn:hover { background: #d8bb7c; transform: translateY(-1px); }
	.links-cta-btn:hover .arrow { transform: translateX(3px); }
	.ft-logo-slot {
		height: 7.2rem;
		margin-bottom: 0.75rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
	}
	.ft-logo-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.ft-logo {
		height: 6.8rem;
		width: auto;
		margin-bottom: 0.6rem;
	}
	.ft-logo-line {
		width: 55%;
		height: 1px;
		background: rgba(255,255,255,0.45);
		margin-top: 0.5rem;
	}
	.ft-brand {
		margin: 0 0 0.4rem;
		font-size: 1.15rem; font-weight: 700;
		color: #fff; letter-spacing: 0.01em;
	}
	.ft-tagline {
		margin: 0 0 1.8rem;
		font-size: 0.92rem; line-height: 1.55;
		color: rgba(255,255,255,0.55);
		max-width: 22rem;
	}

	.ft-contact {
		list-style: none; padding: 0; margin: 0 0 1.8rem;
		display: flex; flex-direction: column; gap: 0.85rem;
	}
	.ft-contact li, .ft-contact a {
		display: flex; align-items: flex-start; gap: 0.7rem;
		font-size: 0.9rem; line-height: 1.45;
		color: rgba(255,255,255,0.7);
		text-decoration: none;
		transition: color 0.15s ease;
	}
	.ft-contact a:hover { color: #c8a96e; }
	.ft-ci {
		flex-shrink: 0;
		width: 24px; height: 24px;
		display: inline-flex; align-items: center; justify-content: center;
		background: rgba(200,169,110,0.12);
		color: #c8a96e;
		border-radius: 6px;
		font-size: 0.78rem;
	}

.col-title {
		margin: 0 0 1.25rem;
		font-size: 0.74rem; font-weight: 700;
		letter-spacing: 0.18em; text-transform: uppercase;
		color: #c8a96e;
	}
	.col-links {
		list-style: none; padding: 0; margin: 0;
		display: flex; flex-direction: column; gap: 0.7rem;
	}
	.col-links a {
		font-size: 0.92rem;
		color: rgba(255,255,255,0.65);
		text-decoration: none;
		transition: color 0.15s ease, padding 0.15s ease;
	}
	.col-links a:hover { color: #fff; padding-left: 4px; }

	.arrow { transition: transform 0.2s ease; }

	.ft-bar {
		display: flex; align-items: center; justify-content: space-between;
		flex-wrap: wrap; gap: 1rem;
		padding: 1.5rem 0 1.75rem;
	}
	.copy { margin: 0; font-size: 0.82rem; color: rgba(255,255,255,0.45); }

	.ft-social { display: flex; gap: 0.6rem; }
	.social-link {
		width: 36px; height: 36px;
		display: inline-flex; align-items: center; justify-content: center;
		background: rgba(255,255,255,0.05);
		border: 1px solid rgba(255,255,255,0.08);
		border-radius: 50%;
		color: rgba(255,255,255,0.65);
		font-size: 0.95rem;
		text-decoration: none;
		transition: all 0.15s ease;
	}
	.social-link:hover {
		background: #c8a96e; border-color: #c8a96e; color: #0c1626;
		transform: translateY(-2px);
	}

	.ft-legal { display: flex; align-items: center; gap: 0.6rem; font-size: 0.82rem; }
	.ft-legal a { color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.15s ease; }
	.ft-legal a:hover { color: #c8a96e; }
	.ft-legal .sep { color: rgba(255,255,255,0.25); }

	@media (max-width: 980px) {
		.ft-top { grid-template-columns: 1fr; gap: 2rem; }
		.links-zone { padding-top: 0; }
	}
	@media (max-width: 600px) {
		.ft { padding: 3rem 1.25rem 0; }
		.brand-zone { padding: 1.5rem 1.5rem 1.75rem; }
		.links-zone { padding: 1.5rem; }
		.links-grid { grid-template-columns: 1fr 1fr; gap: 1.5rem; }
		.links-cta { flex-direction: column; align-items: flex-start; }
		.ft-bar { justify-content: center; text-align: center; }
		.copy { width: 100%; order: 3; }
	}
</style>
