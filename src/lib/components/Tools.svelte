<script>
	import { tools } from '$lib/tools';
	import { User } from '$lib/stores';

	import Dropdown from './Dropdown.svelte';
</script>

{#if !$User.hideTools}
	<aside class="row">
		{#each Object.entries(tools) as tool}
			<Dropdown data={tool} />
		{/each}
	</aside>
{/if}

<style lang="postcss">
	aside {
		gap: 0.5em;
	}
</style>
