<script>
	let { prefix = 'form', btnLabel = 'GET A QUOTE' } = $props();
</script>

<form class="mbr-form form-with-styler eh-quote-form">
	<div class="dragArea row">
		<div class="col-12 form-group">
			<select id="{prefix}-category" name="select" class="form-control form-select display-7 eh-card-text">
				<option value="" disabled selected>Choose a Category</option>
				<option value="Home">Home</option>
				<option value="Life">Life</option>
				<option value="Auto">Auto</option>
				<option value="Commercial">Commercial</option>
				<option value="General Inquiry">General Inquiry</option>
			</select>
		</div>
		<div class="col-12 form-group mb-3">
			<input id="{prefix}-name" type="text" name="name" placeholder="Your full name" class="form-control display-7 eh-card-text">
		</div>
		<div class="col-12 form-group mb-3">
			<input id="{prefix}-email" type="email" name="email" placeholder="Your email address" class="form-control display-7 eh-card-text">
		</div>
		<div class="col-12 form-group mb-3">
			<textarea id="{prefix}-message" name="textarea" placeholder="Your message..." class="form-control display-7 eh-card-text"></textarea>
		</div>
		<div class="col-12 mbr-section-btn">
			<button type="submit" class="w-100 btn btn-primary display-7 eh-card-text">{btnLabel}</button>
		</div>
	</div>
</form>

<style>
	/* bigger text across all form fields */
	:global(.eh-quote-form input.form-control),
	:global(.eh-quote-form textarea.form-control) {
		font-size: 1rem !important;
		padding: 0.65rem 0.9rem !important;
	}

	/* dropdown — visually distinct from plain inputs */
	:global(.eh-quote-form select.form-control) {
		font-size: 1.15rem !important;
		font-weight: 600 !important;
		background-color: #dceeff !important;
		color: #204a77 !important;
		border: 1.5px solid #204a77 !important;
		border-radius: 6px !important;
		padding: 0.8rem 2.4rem 0.8rem 0.9rem !important;
		cursor: pointer !important;
		appearance: none !important;
		-webkit-appearance: none !important;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%23204a77' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important;
		background-repeat: no-repeat !important;
		background-position: right 0.8rem center !important;
		background-size: 20px 20px !important;
	}

	:global(.eh-quote-form select.form-control:focus) {
		outline: none !important;
		box-shadow: 0 0 0 3px rgba(32, 74, 119, 0.2) !important;
	}
</style>
