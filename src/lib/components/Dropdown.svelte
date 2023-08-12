<script>
	export let data;
	export let selection;

	let { title, values } = data;
	let isOpen = false;

	function togDropdown() {
		isOpen = !isOpen;
	}

	function selectOption({ label, value }) {
		title = label;
		selection = value;
	}
</script>

<button tabindex="0" class="col" on:click={togDropdown}>
	<ul class="col wfull">
		{#if isOpen}
			{#each values as option}
				<li
					tabindex="0"
					role="option"
					class="wfull tleft"
					aria-selected={selection === option.value}
					on:click={() => selectOption(option)}
					on:keydown={() => selectOption(option)}
				>
					{option.label}
				</li>
			{/each}
		{:else}
			<h6>{selection || title}</h6>
		{/if}
	</ul>
</button>

<style lang="postcss">
	button:focus {
		background-color: var(--base-900);
	}

	li {
		padding: 0.5em 1em;

		&:focus {
			background-color: var(--base-900);
			border-radius: 0.25em;
		}
	}

	h6 {
		text-transform: capitalize;
	}
</style>
