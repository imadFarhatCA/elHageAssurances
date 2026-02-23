<script>
	let { slides = [], id = 'heroCarousel' } = $props();
</script>

<section data-bs-version="5.1" class="slider3 cid-vahk1xAXTI" id="slider03-2">
	<div class="carousel slide" id={id} data-ride="carousel" data-bs-ride="carousel" data-interval="5000" data-bs-interval="5000">
		<ol class="carousel-indicators">
			{#each slides as _, i}
				<li data-slide-to={i} data-bs-slide-to={i} class={i === 0 ? 'active' : ''} data-target="#{id}" data-bs-target="#{id}"></li>
			{/each}
		</ol>
		<div class="carousel-inner">
			{#each slides as slide, i}
				<div class="carousel-item slider-image item {i === 0 ? 'active' : ''}">
					<div class="item-wrapper">
						<img class="d-block w-100" src={slide.image} alt={slide.alt}>
						<div class="carousel-caption">
							<h5 class="mbr-section-subtitle mbr-fonts-style mb-3 display-5 eh-hero-title">{@html slide.title}</h5>
							<p class="mbr-section-text mbr-fonts-style mb-4 display-7 eh-hero-text">{slide.text}</p>
							<div class="mbr-section-btn mb-5">
								<a class="btn btn-primary display-7" href={slide.href}>{slide.btnText}</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<a class="carousel-control carousel-control-prev" role="button" data-slide="prev" data-bs-slide="prev" href="#{id}">
			<span class="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</a>
		<a class="carousel-control carousel-control-next" role="button" data-slide="next" data-bs-slide="next" href="#{id}">
			<span class="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</a>
	</div>
</section>
