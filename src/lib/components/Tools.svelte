<script>
	import { tools } from '$lib/tools';
	import { User } from '$lib/stores';

	import Dropdown from './Dropdown.svelte';
</script>

<aside class="row">
	{#each Object.entries(tools) as [key, value]}
		<Dropdown data={value} bind:selection={$User.currentSelection[key]} />
	{/each}
</aside>

<style lang="postcss">
	aside {
		gap: 0.5em;
	}
</style>
