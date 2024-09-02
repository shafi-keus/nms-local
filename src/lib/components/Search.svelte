<script>
	import { Input } from 'flowbite-svelte';
	import { Search } from 'lucide-svelte';

	export let placeholder = '';
	let query = '';
</script>

<div class="relative max-w-[70%] flex-grow">
	<div class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
		<Search class="w-4 h-4 text-grey dark:text-white"/>
	</div>
	<Input id="search-navbar" class="ps-10 bg-templateClr" placeholder="Search..." />
</div>
