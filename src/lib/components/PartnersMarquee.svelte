<script>
	let {
		label = 'Our Trusted Insurer Partners',
		logos = []
	} = $props();
</script>

<section class="partners-strip">
	<div class="partners-label">{label}</div>
	<div class="partners-track-wrap">
		<div class="partners-track">
			{#each [...logos, ...logos] as logo}
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

<style>
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
		font-size: 0.68rem; font-weight: 700;
		letter-spacing: 0.22em; text-transform: uppercase;
		color: #a0aec0;
		margin-bottom: 2.2rem;
	}
	.partners-track-wrap {
		overflow: hidden;
		-webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
		mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
	}
	.partners-track {
		display: flex; align-items: center;
		gap: 6rem;
		width: max-content;
		animation: partners-scroll 110s linear infinite;
	}
	.partners-track:hover { animation-play-state: paused; }

	.partners-logo {
		display: flex; align-items: center; justify-content: center;
		height: 150px;
		flex-shrink: 0;
	}
	.partners-logo img {
		height: 124px; width: auto; max-width: 340px;
		object-fit: contain;
		filter: grayscale(1) opacity(0.45);
		transition: filter 0.25s ease;
	}
	.partners-logo img:hover { filter: grayscale(0) opacity(1); }

	@media (max-width: 768px) {
		.partners-logo { height: 130px; }
		.partners-logo img { height: 108px; max-width: 280px; }
		.partners-track { gap: 5rem; animation-duration: 90s; }
	}
</style>
