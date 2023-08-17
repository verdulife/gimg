<script>
	import { User } from '$lib/stores';
	import PresetCard from '$components/PresetCard.svelte';

	$: presetData = $User.presets;
</script>

<section class="col acenter wfull">
	<p><small>SHIFT</small> + <small>CLICK</small> to delete a preset</p>

	<ul class="row wrap jcenter wfull">
		{#each presetData as preset}
			<PresetCard data={preset} />
		{/each}
	</ul>
</section>

<style lang="postcss">
	section {
		max-width: var(--media-lg);
		gap: 1em;
		padding: 4em 2em;
	}

	p {
		color: var(--base-700);
		font-size: var(--font-xs);

		& small {
			background-color: var(--base-900);
			font-weight: bold;
			border-radius: 0.5em;
			padding: 0.25em 0.5em;
		}
	}

	ul {
		gap: 0.5em;
	}
</style>
