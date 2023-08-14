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

<button class="col" on:click={togDropdown}>
	<ul class="col wfull">
		{#if isOpen}
			{#each values as option}
				<li
					tabindex="0"
					role="option"
					aria-selected={selection === option.value}
					on:click={(e) => selectOption(option)}
					on:keydown={(e) => selectOption(option)}
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
	ul {
		gap: 0.75em;
	}

	li:focus {
		text-decoration: underline;
	}

	h6 {
		text-transform: capitalize;
	}
</style>
