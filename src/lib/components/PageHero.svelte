<script>
	let { label = '', title = '', text = '' } = $props();
</script>

<section class="features5 cid-vahEGYaLbg">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-8 text-center">
				{#if label}<p class="mbr-label mbr-fonts-style display-4 eh-hero-text">{label}</p>{/if}
				<h2 class="mbr-section-title mbr-fonts-style display-2 eh-hero-title">{@html title}</h2>
				{#if text}<p class="mbr-text mbr-fonts-style display-4 mt-4 eh-hero-text">{@html text}</p>{/if}
			</div>
		</div>
	</div>
</section>
