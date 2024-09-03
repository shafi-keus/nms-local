<script>
	import { onMount } from 'svelte';
	import { Sun, SunMoon } from 'lucide-svelte';

	let theme = 'light';

	const updateTheme = () => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
	};
	const toggleTheme = () => {
		theme = theme === 'light' ? 'dark' : 'light';
		updateTheme();
	};
	onMount(updateTheme);
</script>

<div
	on:click={toggleTheme}
	class="p-2 rounded focus:outline-none transition duration-300 cursor-pointer"
>
	{#if theme === 'light'}
		<p class="font-bold text-black"><SunMoon class="w-6 h-6" /></p>
	{:else}
		<p class="font-bold text-white"><Sun class="w-6 h-6" /></p>
	{/if}
</div>
