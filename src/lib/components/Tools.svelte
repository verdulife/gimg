<script>
	import { tools } from '$lib/tools';
	import Dropdown from './Dropdown.svelte';
</script>

<aside class="row">
	{#each Object.entries(tools) as tool}
		<Dropdown data={tool} />
	{/each}
</aside>

<style lang="postcss">
	aside {
		gap: 0.5em;
	}
</style>
