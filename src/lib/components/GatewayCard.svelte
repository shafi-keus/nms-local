<script lang="ts">
	import Button from './common/Button.svelte';
	import Card from './common/Card.svelte';
	import { Copy } from 'lucide-svelte';
	type HubType = 'Main' | 'Mini' | 'Media';

	export let hubType: HubType = 'Main';
	export let ipAddress: string = '192.168.0.10';
	export let gatewayId: string = '12343124';
	export let version: string = '2.0.1 Beta Final Release';
	export let channel: string = '28';
</script>

<Card class="px-4 py-5">
	<div class="flex items-center gap-4">
		<div class="min-w-[35%]">
			<img src="/gateway.svg" alt="Gateway Image" class="w-full" />
		</div>
		<div class="flex flex-col gap-3">
			<div>
				<h6 class="text-md font-bold text-light dark:text-dark mb-1">{hubType} Hub</h6>
				<p class="text-xs text-light dark:text-dark leading-6">
					<b class="font-semibold">IP Address :</b>{ipAddress}<Copy class="inline ml-2 h-4 w-4" />
					<br />
					<b class="font-semibold">Gateway ID :</b>
					{gatewayId}
					<Copy class="inline ml-2 h-4 w-4 border-none ring-0" /><br />
					<b class="font-semibold">Version :</b>
					{version}<br />
					<b class="font-semibold">Zigbee Channel :</b>
					{channel}
				</p>
			</div>
			<div class="flex flex-wrap items-center justify-between">
				<Button class="bg-primary-900  rounded-md" size="xs">Ping</Button>
				<Button
					class="bg-secondary-50 hover:bg-secondary-100 dark:bg-secondary-50 dark:hover:bg-secondary-100 rounded-md"
					size="xs">Reboot</Button
				>
			</div>
		</div>
	</div>
</Card>
