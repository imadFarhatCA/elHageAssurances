<section class="cid-vahHXgkhd4 tutorm5 footer2" id="footer2-k">
	<div class="container">
		<div class="footer-grid">

			<!-- Col 1 -->
			<div class="footer-col">
				<div class="footer-logo-slot">
					<div class="footer-logo-wrap">
						<img src="/assets/images/hwhite.svg" alt="El-Hage Assurances" class="footer-logo">
						<div class="footer-logo-line"></div>
					</div>
				</div>
				<h2 class="footer-heading">El-Hage Assurances</h2>
				<p class="footer-body">Copyright 2026 El-Hage Assurances<br>All Rights Reserved</p>
				<div class="footer-social footer-social-desktop">
					<span class="mbr-iconfont socicon-facebook socicon"></span>
					<span class="mbr-iconfont socicon-instagram socicon"></span>
					<span class="mbr-iconfont socicon-linkedin socicon"></span>
				</div>
			</div>

			<!-- Col 2 -->
			<div class="footer-col">
				<div class="footer-logo-slot"></div>
				<h4 class="footer-heading">OFFICE</h4>
				<p class="footer-body">4220 blvd Saint-Martin O,<br>Laval, QC H7T 1C1</p>
			</div>

			<!-- Col 3 -->
			<div class="footer-col">
				<div class="footer-logo-slot"></div>
				<h4 class="footer-heading">CONTACTS</h4>
				<p class="footer-body">info@elhageassurances.com</p>
			</div>

		</div>

		<!-- Mobile-only social icons at the bottom -->
		<div class="footer-social footer-social-mobile">
			<span class="mbr-iconfont socicon-facebook socicon"></span>
			<span class="mbr-iconfont socicon-instagram socicon"></span>
			<span class="mbr-iconfont socicon-linkedin socicon"></span>
		</div>
	</div>
</section>

<style>
	.footer-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		padding: 2rem 0;
	}

	.footer-col {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.footer-logo-slot {
		height: 9rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
		margin-bottom: 0.75rem;
		margin-top: -3.5rem;
	}

	.footer-logo {
		height: 8.5rem;
		width: auto;
		margin-bottom: 0.6rem;
	}

	.footer-logo-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.footer-logo-line {
		width: 55%;
		height: 1px;
		background: rgba(255, 255, 255, 0.45);
		margin-top: 0.5rem;
	}

	.footer-heading {
		font-size: 1.15rem !important;
		font-weight: 700;
		color: #fff;
		margin: 0 0 0.6rem !important;
		letter-spacing: 0.06em;
		line-height: 1.2;
	}

	.footer-body {
		font-size: 0.95rem !important;
		font-weight: 300;
		color: rgba(255, 255, 255, 0.5);
		line-height: 1.6;
		margin: 0;
	}

	.footer-social {
		display: flex;
		gap: 1rem;
		margin-top: 0.75rem;
	}

	.footer-social-mobile {
		display: none;
	}

	:global(.footer-social .mbr-iconfont) {
		font-size: 1.3rem;
		color: rgba(255, 255, 255, 0.6);
		cursor: pointer;
		transition: color 0.2s ease;
	}

	:global(.footer-social .mbr-iconfont:hover) {
		color: #fff;
	}

	@media (max-width: 768px) {
		.footer-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
			padding: 0 20px 0;
		}
		.footer-col {
			align-items: center;
			text-align: center;
		}
		.footer-logo-slot {
			height: auto;
			margin-top: -3.5rem;
			margin-bottom: 1.5rem;
		}
		.footer-logo-wrap {
			align-items: center;
		}
		/* hide empty spacer slots in col 2 & 3 */
		.footer-col:not(:first-child) .footer-logo-slot {
			display: none;
		}
		/* hide social in col 1 on mobile */
		.footer-social-desktop {
			display: none;
		}
		/* show social at the bottom on mobile, centered */
		.footer-social-mobile {
			display: flex;
			justify-content: center;
			padding: 1.5rem 20px 2rem;
		}
	}
</style>
