<script>
	import { onMount, onDestroy } from 'svelte';
	import { TURNSTILE_SITE_KEY } from '$lib/config/turnstile.js';

	let {
		token = $bindable(''),
		theme = 'light',
		size = 'normal'
	} = $props();

	let host;
	let widgetId;

	const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

	function loadScript() {
		if (window.turnstile) return Promise.resolve();
		if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
			return new Promise(resolve => {
				const id = setInterval(() => {
					if (window.turnstile) { clearInterval(id); resolve(); }
				}, 50);
			});
		}
		return new Promise((resolve, reject) => {
			const s = document.createElement('script');
			s.src = SCRIPT_SRC;
			s.async = true; s.defer = true;
			s.onload = resolve;
			s.onerror = reject;
			document.head.appendChild(s);
		});
	}

	async function render() {
		await loadScript();
		if (!host || !window.turnstile) return;
		widgetId = window.turnstile.render(host, {
			sitekey: TURNSTILE_SITE_KEY,
			theme,
			size,
			callback: (t) => { token = t; },
			'expired-callback': () => { token = ''; },
			'error-callback':   () => { token = ''; }
		});
	}

	onMount(() => { render(); });
	onDestroy(() => {
		if (widgetId && window.turnstile) {
			try { window.turnstile.remove(widgetId); } catch {}
		}
	});
</script>

<div class="turnstile-host" bind:this={host}></div>

<style>
	.turnstile-host { display: flex; justify-content: center; min-height: 65px; }
</style>
