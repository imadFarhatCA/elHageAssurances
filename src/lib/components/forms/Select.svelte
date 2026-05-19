<script>
	import { onMount } from 'svelte';

	let {
		value = $bindable(''),
		options = [],
		placeholder = 'Choose…',
		accent = 'blue',
		id = '',
		required = false
	} = $props();

	let open = $state(false);
	let wrap;

	const selected = $derived(options.find(o => o.value === value));

	function toggle() { open = !open; }
	function pick(v) { value = v; open = false; }
	function onKey(e) {
		if (e.key === 'Escape') open = false;
		else if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === wrap?.querySelector('.trigger')) {
			e.preventDefault();
			open = !open;
		}
	}
	function onDocClick(e) {
		if (wrap && !wrap.contains(e.target)) open = false;
	}

	onMount(() => {
		document.addEventListener('mousedown', onDocClick);
		document.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('mousedown', onDocClick);
			document.removeEventListener('keydown', onKey);
		};
	});
</script>

<div class="select-wrap accent-{accent}" bind:this={wrap}>
	<button
		type="button"
		{id}
		class="trigger"
		class:placeholder={!selected}
		class:open
		aria-haspopup="listbox"
		aria-expanded={open}
		onclick={toggle}
	>
		<span class="label">{selected?.label ?? placeholder}</span>
		<span class="chevron" class:flip={open}>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
		</span>
	</button>

	{#if required}<input type="text" tabindex="-1" aria-hidden="true" class="sr" {value} {required} />{/if}

	{#if open}
		<ul class="menu" role="listbox">
			{#each options as opt}
				<li>
					<button
						type="button"
						class="opt"
						class:active={opt.value === value}
						role="option"
						aria-selected={opt.value === value}
						onclick={() => pick(opt.value)}
					>
						<span class="opt-label">{opt.label}</span>
						{#if opt.value === value}
							<span class="check">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
							</span>
						{/if}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.select-wrap {
		--accent: #204a77;
		--accent-tint: #e8f0fa;
		--accent-soft: rgba(32,74,119,0.12);
		position: relative;
		width: 100%;
	}
	.accent-gold {
		--accent: #c8a96e;
		--accent-tint: #f7eede;
		--accent-soft: rgba(200,169,110,0.22);
	}

	.trigger {
		box-sizing: border-box;
		width: 100%;
		display: flex; align-items: center; justify-content: space-between;
		gap: 0.75rem;
		padding: 0.85rem 0.95rem;
		background: #fff;
		border: 1.5px solid #e5e9ef;
		border-radius: 8px;
		font-size: 0.95rem;
		color: #0f1e2e;
		font-family: inherit;
		text-align: left;
		cursor: pointer;
		transition: border-color 0.15s ease, box-shadow 0.15s ease;
	}
	.trigger.placeholder .label { color: #8b97a8; }
	.trigger:hover { border-color: #c8d4e3; }
	.trigger.open,
	.trigger:focus-visible {
		outline: none;
		border-color: var(--accent);
		box-shadow: 0 0 0 3px var(--accent-soft);
	}
	.label { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
	.chevron {
		display: inline-flex;
		color: var(--accent);
		transition: transform 0.2s ease;
	}
	.chevron.flip { transform: rotate(180deg); }

	.sr { position: absolute; left: -9999px; opacity: 0; pointer-events: none; }

	.menu {
		position: absolute;
		top: calc(100% + 6px); left: 0; right: 0;
		z-index: 30;
		margin: 0; padding: 0.4rem;
		list-style: none;
		background: #fff;
		border: 1px solid #eef1f5;
		border-radius: 12px;
		box-shadow:
			0 1px 0 rgba(255,255,255,0.6) inset,
			0 18px 48px -14px rgba(15,30,46,0.18),
			0 6px 16px -8px rgba(15,30,46,0.1);
		animation: menu-in 0.16s ease-out;
		max-height: min(420px, 60vh);
		overflow-y: auto;
	}
	@keyframes menu-in {
		from { opacity: 0; transform: translateY(-4px) scale(0.98); }
		to   { opacity: 1; transform: translateY(0) scale(1); }
	}

	.opt {
		width: 100%;
		display: flex; align-items: center; justify-content: space-between;
		gap: 0.5rem;
		padding: 0.65rem 0.8rem;
		background: transparent;
		border: none; border-radius: 8px;
		font-size: 0.92rem;
		color: #0f1e2e;
		font-family: inherit;
		text-align: left;
		cursor: pointer;
		transition: background 0.1s ease, color 0.1s ease;
	}
	.opt:hover { background: var(--accent-tint); color: var(--accent); }
	.opt.active {
		background: var(--accent-tint);
		color: var(--accent);
		font-weight: 600;
	}
	.check { display: inline-flex; color: var(--accent); }
</style>
