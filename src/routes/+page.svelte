<script>
	import { metadata as data } from '$lib/meta';

	import Meta from '$components/global/Meta.svelte';
	import SearchBar from '$components/SearchBar.svelte';
	import Logo from '$components/Logo.svelte';
	import Tools from '$components/Tools.svelte';
</script>

<Meta {data} />

<section class="col acenter wfull">
	<Logo />
	<SearchBar />
	<Tools />
</section>

<style lang="postcss">
	section {
		gap: 2em;
		margin-top: 15%;
	}
</style>
