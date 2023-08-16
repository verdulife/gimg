<script>
	import { tools } from '$lib/tools';
	import { User, Selection } from '$lib/stores';

	import Dropdown from './Dropdown.svelte';
</script>

{#if !$User.hideTools}
	<aside class="row">
		{#each Object.entries(tools) as [key, value]}
			<Dropdown data={value} bind:selection={$Selection[key]} />
		{/each}
	</aside>
{/if}

<style lang="postcss">
	aside {
		gap: 0.5em;
	}
</style>
