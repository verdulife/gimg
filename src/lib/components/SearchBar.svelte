<script>
	import { params } from '$lib/searchparams';
	import { User } from '$lib/stores';

	import Search from '$lib/icons/Search.svelte';
	import Ajust from '$lib/icons/Ajust.svelte';

	const BASE_URL = 'https://www.google.com/search';

	let term;
	let rows = 1;

	async function search(e) {
		if (e.key !== 'Enter') return;
		else e.preventDefault();

		const url = new URL(BASE_URL);

		url.searchParams.append('q', term);
		url.searchParams.append(...params.images);

		/* for (let key in $User.currentSelection) {
			let value = $User.currentSelection[key];
			if (!value) return;

			url.searchParams.append(...params[key][value]);
		} */

		console.log(url);
		/* window.open(url, '_blank'); */
	}
</script>

<label class="row acenter wfull" for="search">
	<span class="row fcenter">
		<Search />
	</span>

	<textarea
		{rows}
		class="clear wfull"
		role="searchbox"
		type="search"
		maxlength="2048"
		autocapitalize="off"
		autocomplete="off"
		autocorrect="off"
		spellcheck="false"
		title="Buscar"
		autofocus
		bind:value={term}
		on:keydown={(e) => search(e)}
	/>

	<span class="row fcenter" on:click={search}>
		<Ajust />
	</span>
</label>

<style lang="postcss">
	label {
		max-width: 600px;
		background-color: var(--base-900);
		border-radius: 1em;
	}

	span {
		padding: 1em;
	}
</style>
