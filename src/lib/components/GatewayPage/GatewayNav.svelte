<script lang="ts">
	import Button from '../common/Button.svelte';

	type navOptions = 'Home Info' | 'Rooms & Devices' | 'Backups' | 'Deployments';
	let navArr: navOptions[] = ['Home Info', 'Rooms & Devices', 'Backups', 'Deployments'];

	let active: navOptions = 'Home Info';

	const changeOption = (navTab: navOptions) => {
		active = navTab;
	};
</script>

<div class="flex items-center content-center gap-2 min-w-fit pb-3 border-b-2 flex-wrap">
	{#each navArr as navTab, i (navTab)}
		<Button
			on:click={() => changeOption(navTab)}
			class=" {active == navTab
				? 'bg-primary-900 text-white hover:bg-blue-800 dark:bg-primary-900 dark:hover:bg-blue-800'
				: 'bg-templateClr text-light'} "
			size="sm"
			color="light"
		>
			{navTab}
		</Button>
	{/each}
</div>
