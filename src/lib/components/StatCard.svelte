<script>
	let { value = '', text = '', cardClass = '' } = $props();
</script>

<div class="col-12 col-sm-6 col-md-4">
	<div class="card {cardClass}">
		<h2 class="card-title mbr-fonts-style align-center display-2"><strong>{value}</strong></h2>
		<p class="card-text mbr-fonts-style align-center display-7">{@html text}</p>
	</div>
</div>
