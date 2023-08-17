<script>
	import { User, Selection } from '$lib/stores';

	export let data;

	function handleClick(e) {
		if (e.shiftKey) removePreset();
		else applyPresets();
	}

	function applyPresets() {
		$Selection = data.presets;
	}

	function removePreset() {
		const newPresets = $User.presets.filter((preset) => preset !== data);
		$User.presets = newPresets;
	}
</script>

<li
	class="row acenter"
	on:click={(e) => handleClick(e)}
	on:keydown={(e) => e.key === 'Enter' && handleClick(e)}
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

		@media (--light) {
			background-color: var(--base-100);
			color: var(--base-800);
		}
	}

	span {
		gap: 0.25em;
	}

	small {
		background-color: var(--base-800);
		text-transform: uppercase;
		font-size: var(--font-2xs);
		border-radius: 0.25em;
		padding: 0.1em 0.5em;

		@media (--light) {
			background-color: var(--base-200);
			color: var(--base-800);
			font-weight: bold;
		}
	}
</style>
