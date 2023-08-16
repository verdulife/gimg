<script>
	import { User } from '$lib/stores';

	export let data;

	function applyPresets() {
		$User.currentSelection = data.presets;
	}
</script>

<li
	class="row acenter"
	on:click={applyPresets}
	on:keydown={(e) => e.key === 'Enter' && applyPresets}
>
	{data.label}
	<span class="row">
		{#each Object.values(data.presets) as preset}
			{#if preset}
				<small>{preset}</small>
			{/if}
		{/each}
	</span>
</li>

<style lang="postcss">
	li {
		cursor: pointer;
		gap: 1em;
		background-color: var(--base-900);
		color: var(--base-200);
		font-size: var(--font-xs);
		border-radius: 0.5em;
		padding: 0.75em;
	}

	span {
		gap: 0.25em;
	}

	small {
		background-color: var(--base-800);
		text-transform: uppercase;
		font-size: var(--font-2xs);
		font-weight: bold;
		border-radius: 0.25em;
		padding: 0.1em 0.5em;
	}
</style>
