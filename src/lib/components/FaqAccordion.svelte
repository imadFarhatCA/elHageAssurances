<script>
	let { items = [], accordionId = 'faq-accordion', label = 'YOU HAVE QUESTIONS ? WE HAVE ANSWERS' } = $props();
</script>

<section data-bs-version="5.1" class="list02 identitym5 cid-vap78rl2Bk" id="list02-l">
	<div class="container-fluid">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-10">
				<div class="content-wrapper">
					<p class="mbr-label mbr-fonts-style display-5 eh-main-title">{label}</p>
					<div id={accordionId} class="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">
						{#each items as item, i}
							<div class="card">
								<div class="card-header" role="tab">
									<a role="button" class="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core="" href="#{accordionId}-{i}" aria-expanded="false">
										<div class="title-wrap">
											<h4 class="panel-title-edit mbr-fonts-style display-7 eh-card-title">{item.q}</h4>
											<div class="little-radius icon-wrapper">
												<span class="sign mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
											</div>
										</div>
									</a>
								</div>
								<div id="{accordionId}-{i}" class="panel-collapse noScroll collapse" role="tabpanel" data-bs-parent="#{accordionId}">
									<div class="panel-body">
										<p class="panel-text mbr-fonts-style display-7 eh-card-text">{item.a}</p>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
