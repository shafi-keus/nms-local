<script lang="ts">
	import { writable } from "svelte/store";

	type deviceType = {
		type: string;
		name: string;
		KPN: string;
		count: number;
	};
	// export let id:String;
	// export let name:String;
	// export let email:String;
	// export let role:userRoleType;
	// export let status:userStatusType;
	export let items: deviceType[] = [
		{
			type: 'KZSC7C',
			name: 'Smart Console Small',
			KPN: 'SD342',
			count: 21
		},
		{
			type: 'KZSC9C',
			name: 'Smart Console Small',
			KPN: 'SD342',
			count: 22
		},
		{
			type: 'KZSC8C',
			name: 'Smart Console Small',
			KPN: 'SD342',
			count: 23
		},
		{
			type: 'KZSC3C',
			name: 'Smart Console Small',
			KPN: 'SD342',
			count: 24
		},
		{
			type: 'KZSC2C',
			name: 'Smart Console Small',
			KPN: 'SD342',
			count: 25
		}
	];
	const sortKey = writable('type');
	const sortDirection = writable(1);
	const sortItems = writable(items.slice());
	const sortTable = (key: any) => {
		if ($sortKey === key) {
			sortDirection.update((val) => -val);
		} else {
			sortKey.set(key);
			sortDirection.set(1);
		}
	};
	$: {
		const key = $sortKey;
		const direction = $sortDirection;
		const sorted = [...$sortItems].sort((a: any, b: any) => {
			const aVal = a[key];
			const bVal = b[key];
			if (aVal < bVal) {
				return -direction;
			} else if (aVal > bVal) {
				return direction;
			}
			return 0;
		});
		sortItems.set(sorted);
	}
</script>

<div class="h-full flex-col justify-start items-start gap-[18px] inline-flex w-full">
	<div class="self-stretch text-light text-lg font-bold font-['Nunito Sans']">
		Device summary
	</div>
	<div class="self-stretch h-[376px] flex-col justify-start items-start gap-0.5 flex dark:bg-templateDarkClr">
		<!-- Header Row -->
		<div
			class="self-stretch h-[61px] px-6 md:px-[122px] py-[13px] flex justify-center items-center gap-2.5 border-2 rounded-[10px] dark:bg-black"
		>
			<div class="w-full flex items-center justify-between dark:text-dark ">
				<div class="w-1/4 text-center text-[15px] font-bold font-['Nunito Sans'] whitespace-nowrap">
					Device type
				</div>
				<div
					class="w-1/4 text-center text-[15px] font-bold font-['Nunito Sans'] whitespace-nowrap hidden lg:block"
				>
					Friendly Name
				</div>
				<div class="w-1/4 text-center text-[15px] font-bold font-['Nunito Sans'] whitespace-nowrap">
					KPN
				</div>
				<div class="w-1/4 text-center text-[15px] font-bold font-['Nunito Sans'] whitespace-nowrap">
					Count
				</div>
			</div>
		</div>
		<!-- Data Rows -->
		{#each items as item}
			<div
				class="self-stretch h-[61px] px-6 md:px-[122px] py-[13px] flex justify-center items-center gap-2.5 border-2 rounded-[10px] dark:bg-black"
			>
				<div class="w-full flex items-center justify-between dark:text-dark">
					<div
						class="w-1/4 text-center text-[15px] font-normal font-['Nunito Sans'] whitespace-nowrap"
					>
						{item.type}
					</div>
					<div
						class="w-1/4 text-center text-[15px] font-normal font-['Nunito Sans'] whitespace-nowrap hidden lg:block"
					>
						{item.name}
					</div>
					<div
						class="w-1/4 text-center text-[15px] font-normal font-['Nunito Sans'] whitespace-nowrap"
					>
						{item.KPN}
					</div>
					<div
						class="w-1/4 text-center text-[15px] font-normal font-['Nunito Sans'] whitespace-nowrap"
					>
						{item.count}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
