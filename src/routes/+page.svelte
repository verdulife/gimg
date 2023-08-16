<script>
	import { metadata as data } from '$lib/meta';

	import Meta from '$components/global/Meta.svelte';
	import SearchBar from '$components/SearchBar.svelte';
	import Logo from '$components/Logo.svelte';
	import Tools from '$components/Tools.svelte';
	import Presets from '$components/Presets.svelte';
</script>

<Meta {data} />

<section class="col acenter wfull">
	<Logo />
	<SearchBar />
	<Tools />
	<Presets />
</section>

<style lang="postcss">
	section {
		gap: 2em;
		margin-top: 15%;
	}
</style>
