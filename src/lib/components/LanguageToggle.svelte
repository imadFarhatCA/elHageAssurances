<script>
	import { language } from '$lib/languageStore.js';

	function setLang(lang) {
		language.set(lang);
	}
</script>

<div class="lang-toggle" data-active={$language} role="group" aria-label="Language">
	<button
		class="lang-btn"
		class:lang-active={$language === 'EN'}
		onclick={() => setLang('EN')}
		aria-pressed={$language === 'EN'}
	>EN</button>
	<button
		class="lang-btn"
		class:lang-active={$language === 'FR'}
		onclick={() => setLang('FR')}
		aria-pressed={$language === 'FR'}
	>FR</button>
</div>

<style>
	.lang-toggle {
		display: inline-flex;
		align-items: center;
		background: rgba(255, 255, 255, 0.15);
		border-radius: 20px;
		padding: 3px;
		gap: 2px;
		position: relative;
	}

	/* sliding pill */
	.lang-toggle::before {
		content: '';
		position: absolute;
		width: calc(50% - 3.5px);
		height: calc(100% - 6px);
		background: #fff;
		border-radius: 16px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
		transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1);
		left: 3px;
		top: 3px;
		z-index: 0;
	}

	.lang-toggle[data-active='FR']::before {
		left: calc(50% + 0.5px);
	}

	.lang-btn {
		position: relative;
		z-index: 1;
		background: transparent;
		border: none;
		border-radius: 16px;
		cursor: pointer;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		color: rgba(255, 255, 255, 0.65);
		padding: 5px 11px;
		transition: color 0.28s ease;
		font-family: inherit;
		line-height: 1;
		flex: 1;
		text-align: center;
	}

	.lang-active {
		color: #1d3461;
	}

	.lang-btn:hover:not(.lang-active) {
		color: #fff;
	}
</style>
