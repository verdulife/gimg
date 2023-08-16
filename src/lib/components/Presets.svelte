<script>
	import PresetCard from '$components/PresetCard.svelte';

	const presetData = [
		{
			label: 'Vector logotype',
			presets: {
				size: null,
				aspect: 'square',
				color: null,
				type: null,
				filetype: 'svg',
				rights: null
			}
		},
		{
			label: 'HD transparency',
			presets: {
				size: 'large',
				aspect: null,
				color: 'transparent',
				type: null,
				filetype: 'png',
				rights: null
			}
		},
		{
			label: 'HD photography',
			presets: {
				size: '2mp',
				aspect: null,
				color: null,
				type: 'photo',
				filetype: null,
				rights: null
			}
		},
		{
			label: 'Ultrawide wallpaper',
			presets: {
				size: '2mp',
				aspect: 'ultrawide',
				color: null,
				type: null,
				filetype: null,
				rights: null
			}
		},
		{
			label: 'Vector icon',
			presets: {
				size: 'icon',
				aspect: null,
				color: 'transparent',
				type: null,
				filetype: 'svg',
				rights: null
			}
		}
	];
</script>

<ul class="row wrap jcenter wfull">
	{#each presetData as preset}
		<PresetCard data={preset} />
	{/each}
</ul>

<style lang="postcss">
	ul {
		max-width: var(--media-lg);
		gap: 0.5em;
		padding: 4em 2em;
	}
</style>
