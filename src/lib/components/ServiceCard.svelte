<script>
	let { image = '', alt = '', title = '', text = '' } = $props();
</script>

<div class="col-12 col-lg-4 item features-image">
	<div class="item-wrapper large-radius">
		<div class="item-img card-wrap">
			<img src={image} {alt}>
		</div>
		<div class="item-content">
			<h4 class="item-title mbr-fonts-style display-5 eh-card-title">{title}</h4>
			<p class="item-text mbr-fonts-style display-7 eh-card-text">{text}</p>
		</div>
	</div>
</div>
