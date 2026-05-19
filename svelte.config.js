import adapter from '@sveltejs/adapter-cloudflare';

const config = {
	kit: {
		adapter: adapter({
			// All SvelteKit endpoints (+server.js) become Cloudflare Pages
			// Functions; pages are prerendered where possible, SSR'd otherwise.
		})
	}
};

export default config;
