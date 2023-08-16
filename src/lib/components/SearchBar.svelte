<script>
	import { params } from '$lib/searchparams';
	import { User, Selection } from '$lib/stores';

	import Search from '$lib/icons/Search.svelte';
	import Ajust from '$lib/icons/Ajust.svelte';
	import Clean from '$lib/icons/Clean.svelte';

	const BASE_URL = 'https://www.google.com/search';

	let inputElement, term;
	let rows = 1;

	function search(e) {
		if (e.key !== 'Enter') return;
		else e.preventDefault();

		const url = new URL(BASE_URL);

		url.searchParams.append('q', term);
		url.searchParams.append(...params.images);

		let query = [];

		for (let key in $Selection) {
			let value = $Selection[key];
			if (!value) continue;

			query.push(params[key][value]);
		}

		url.searchParams.append(params.searchBy, query.toString());
		window.open(url, '_blank');
	}

	function cleanAll() {
		$Selection = {
			size: null,
			aspect: null,
			color: null,
			type: null,
			filetype: null,
			rights: null
		};
	}

	function togTools() {
		$User.hideTools = !$User.hideTools;
	}

	function autoFocus() {
		inputElement.focus();
	}

	$: $User || $Selection, inputElement && autoFocus();
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
		title="Search"
		bind:this={inputElement}
		bind:value={term}
		on:keydown={(e) => search(e)}
	/>

	<span
		tabindex="0"
		role="button"
		class="row fcenter"
		title="Clean all"
		on:click={cleanAll}
		on:keydown={(e) => e.key === 'Enter' && cleanAll()}
	>
		<Clean />
	</span>

	<span
		tabindex="0"
		role="button"
		class="row fcenter"
		title="Toggle tools"
		on:click={togTools}
		on:keydown={(e) => e.key === 'Enter' && togTools()}
	>
		<Ajust />
	</span>
</label>

<style lang="postcss">
	label {
		max-width: 600px;
		background-color: var(--base-900);
		border-radius: 1em;
		padding: 0.25em;
	}

	span {
		padding: 0.75em;

		&:not(:first-of-type) {
			cursor: pointer;

			&:focus {
				background-color: var(--base-800);
				border-radius: 0.75em;
			}
		}
	}

	textarea {
		font-family: var(--font-base);
	}
</style>
