<script>
	let { prefix = 'form', btnLabel = 'GET A QUOTE' } = $props();
</script>

<form class="mbr-form form-with-styler">
	<div class="dragArea row">
		<div class="col-12 form-group">
			<label for="{prefix}-category" class="form-control-label mbr-fonts-style display-7 eh-card-text">Choose a Category</label>
			<select id="{prefix}-category" name="select" class="form-control form-select display-7 eh-card-text">
				<option value="Home">Home</option>
				<option value="Life">Life</option>
				<option value="Auto">Auto</option>
				<option value="Commercial">Commercial</option>
				<option value="General Inquiry">General Inquiry</option>
			</select>
		</div>
		<div class="col-12 form-group mb-3">
			<label for="{prefix}-name" class="form-control-label mbr-fonts-style display-7 eh-card-text">Full name</label>
			<input id="{prefix}-name" type="text" name="name" placeholder="your full name" class="form-control display-7 eh-card-text">
		</div>
		<div class="col-12 form-group mb-3">
			<label for="{prefix}-email" class="form-control-label mbr-fonts-style display-7 eh-card-text">Email</label>
			<input id="{prefix}-email" type="email" name="email" placeholder="your email address" class="form-control display-7 eh-card-text">
		</div>
		<div class="col-12 form-group mb-3">
			<label for="{prefix}-message" class="form-control-label mbr-fonts-style display-7 eh-card-text">Message</label>
			<textarea id="{prefix}-message" name="textarea" placeholder="Your message..." class="form-control display-7 eh-card-text"></textarea>
		</div>
		<div class="col-12 mbr-section-btn">
			<button type="submit" class="w-100 btn btn-primary display-7 eh-card-text">{btnLabel}</button>
		</div>
	</div>
</form>
