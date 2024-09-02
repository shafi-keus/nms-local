<script>
	import { Modal } from 'flowbite-svelte';
	export let open = false;
    export let title = ""
    export let closeBtn = false
</script>

<Modal {title} bind:open autoclose class="dark:text-white">
    <slot name="header" class="text-base leading-relaxed text-gray-500 dark:text-gray-400"/>
    <slot name="content"class="text-base leading-relaxed text-gray-500 dark:text-gray-400"/>
    <slot />
</Modal>
