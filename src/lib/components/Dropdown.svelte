<script>
	import { tools } from '$lib/tools';
	import { Selection } from '$lib/stores';

	export let data;

	const [key, value] = data;
	const { title, values } = value;

	$: label = title;

	function selectOption(option) {
		$Selection[key] = option.value;
	}

	function getLabel(option) {
		const match = tools[title].values.find((tool) => tool.value === option);
		return match.label;
	}

	$: $Selection[key], (label = $Selection[key] === null ? title : getLabel($Selection[key]));
</script>

<button tabindex="0" class="col">
	<h6>{label}</h6>
	<ul class="scrollbar">
		{#each values as option}
			<li
				tabindex="0"
				role="option"
				class="wfull tleft"
				aria-selected={$Selection[key] === option.value}
				on:click={() => selectOption(option)}
				on:keydown={() => selectOption(option)}
			>
				{option.label}
			</li>
		{/each}
	</ul>
</button>

<style lang="postcss">
	button {
		&:focus {
			position: relative;
			background-color: var(--base-900);

			@media (--light) {
				background-color: var(--base-100);
			}
		}

		&:focus-within ul {
			display: flex;
		}
	}

	ul {
		position: absolute;
		top: calc(100% + 0.25em);
		left: 0;
		display: none;
		flex-direction: column;
		width: 175px;
		height: auto;
		max-height: 300px;
		background-color: var(--alt);
		color: var(--accent);
		border-radius: 0.75em;
		box-shadow: inset 0px 1px 2px 0px hsl(var(--base-hsl), 0.25);
		padding: 0.5em;

		@media (--light) {
			background-color: var(--base);
			color: var(--alt);
			box-shadow: inset 0px 1px 2px 0px hsl(var(--alt-hsl), 0.25);
		}
	}

	li {
		padding: 0.5em 1em;

		&:focus {
			background-color: var(--base-900);
			border-radius: 0.5em;

			@media (--light) {
				background-color: var(--base-100);
			}
		}
	}

	h6 {
		font-weight: bold;
		text-transform: capitalize;
	}
</style>
