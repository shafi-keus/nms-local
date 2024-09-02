<script lang="ts">
	import '../app.css';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Search from '$lib/components/Search.svelte';
	import { DatabaseBackup, LayoutDashboard, Link, Network, type Icon } from 'lucide-svelte';
	import { type ComponentType } from 'svelte';
	import { Tooltip } from 'flowbite-svelte';
	export let isCollapsed = true;
	type Tabstype = 'Dashboard' | 'Gateways' | 'Pairing' | 'Ota';
	let tabsArr: Tabstype[] = ['Dashboard', 'Gateways', 'Pairing', 'Ota'];
	let iconsArr: Array<ComponentType<Icon>> = [LayoutDashboard, Network, Link, DatabaseBackup];
	let active: Tabstype = 'Dashboard';

	const toggleSidebar = () => {
		isCollapsed = !isCollapsed;
	};
</script>

<div class="flex flex-col h-screen">
	<!-- App nav -->
	<nav
		class="bg-white h-fit flex-shrink-0 p-4 flex justify-between items-center z-10 dark:bg-gray-800"
	>
		<div class="cursor-pointer" on:click={toggleSidebar}>
			{#if isCollapsed}
				<span class="font-bold">☰</span>
			{:else}
				<span class=" text-lg font-bold">Keus<span class="text-primary-900">NMS</span></span>
			{/if}
		</div>
		<Search />
		<ThemeToggle />
	</nav>

	<div class="flex flex-1 overflow-y-auto">
		<!-- Sidebar nav-->
		<nav
			class={`transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} sticky top-0 bg-white text-black dark:text-white dark:bg-gray-800`}
		>
			<div>
				{#each tabsArr as tab, i}
					<div
						class="cursor-pointer py-2 px-4"
						on:click={() => {
							active = tab;
							isCollapsed = true;
						}}
					>
						<span class={`flex items-center gap-2 ${active == tab ? 'text-primary-900' : ''}`}>
							<svelte:component this={iconsArr[i]} class="w-6 h-6" />
							<span class={`${isCollapsed ? 'hidden' : ''}`}>
								{tab}
							</span>
						</span>
					</div>
					{#if isCollapsed}
						<Tooltip placement="top">{tab}</Tooltip>
					{/if}
				{/each}
			</div>
		</nav>

		<!-- SLOT -->
		<!-- <div class="p-4 bg-templateClr dark:bg-black" on:click={() => (isCollapsed = true)}> -->
		<slot></slot>
		<!-- </div> -->
	</div>
</div>
