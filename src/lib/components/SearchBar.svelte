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
		term = '';

		$Selection = {
			size: null,
			aspect: null,
			color: null,
			type: null,
			filetype: null,
			rights: null
		};
	}

	function savePreset() {
		const check = prompt('Choose a name for the new preset');
		if (!check) return;

		const newPreset = {
			label: check,
			presets: $Selection
		};

		$User.presets = [newPreset, ...$User.presets];
	}

	function autoFocus() {
		inputElement.focus();
	}

	function getTextWidth(text, font) {
		let canvas = document.createElement('canvas');
		let context = canvas.getContext('2d');
		context.font = font;
		let metrics = context.measureText(text);
		return metrics.width;
	}

	function ajustRows() {
		const inputWidth = '375';
		const maxLines = 6;

		if (term) {
			const amount = Math.ceil(getTextWidth(term, '16px Inter') / inputWidth);
			rows = amount < maxLines ? amount : maxLines;
		} else rows = 1;
	}

	$: $User || $Selection, inputElement && autoFocus();
	$: term, ajustRows();
</script>

<label class="row wfull" for="search">
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
		title="Save preset"
		on:click={savePreset}
		on:keydown={(e) => e.key === 'Enter' && savePreset()}
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

		@media (--light) {
			background-color: var(--base-100);
		}
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
		padding: 0.6em 0;
	}
</style>
