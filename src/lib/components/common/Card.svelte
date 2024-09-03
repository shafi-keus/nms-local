<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { press } from 'svelte-gestures';
	export let noShadow = false;
	export let style = '';
	export let className = '';
	export { className as class };
	$: classes =
		`${!noShadow ? 'shadow-lightNormal dark:shadow-darkNormal' : ''} p-2 w-fit dark:text-white ${className}`.trim();
</script>

<Card class={classes} {style} padding="none" on:click>
	<div class="card-main" use:press={{ timeframe: 400, triggerBeforeFinished: true }} on:press>
		<slot />
	</div>
</Card>
