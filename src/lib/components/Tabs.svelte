<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Plus, X } from 'lucide-svelte';
	import Card from './common/Card.svelte';

	export let tabs: string[] = ['Aditya Casa', 'Ashwik', 'Brijesh'];
	let className: string = '';
	export { className as class };
	const dispatch = createEventDispatcher();

	const addTab = () => {
		dispatch('newGateway');
		tabs = [...tabs, 'Shafi'];
		active = tabs.length - 1;
	};

	const removeTab = (i: number) => {
		tabs = tabs.filter((tab, index) => index != i);
		active = tabs.length - 1;
	};
	let active = 0;
</script>

<div class="main flex gap-2 w-full items-center mb-2">
	<div class="scrollable flex gap-2 max-w-[90%] overflow-x-auto">
		{#each tabs as tab, i}
			<Card
				class="shadow-none dark:shadow-none flex items-center justify-between gap-2 min-w-max cursor-pointer"
			>
				<div
					class="flex items-center justify-between gap-2 min-w-max"
					class:active={active == i}
					on:click={() => (active = i)}
				>
					<p class="text-sm">{tab}</p>
					<p on:click={() => removeTab(i)}><X class="w-4 h-4" /></p>
				</div>
			</Card>
		{/each}
	</div>

	<Card
		on:click={addTab}
		class=" shadow-none rounded-full flex items-center justify-center cursor-pointer w-8 h-8"
	>
		<Plus class="w-4 h-4" />
	</Card>
</div>

<style lang="scss">
	.main {
		&::-webkit-scrollbar {
			display: none;
		}
		& {
			-ms-overflow-style: none; /* for IE and Edge */
			scrollbar-width: none; /* for Firefox */
		}
	}
	.scrollable {
		&::-webkit-scrollbar {
			display: none;
		}
	}
	.active {
		@apply text-primary-900;
	}
</style>
