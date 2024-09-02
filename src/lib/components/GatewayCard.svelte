<script lang="ts">
	import Button from './common/Button.svelte';
	import Card from './common/Card.svelte';
</script>

<Card>
	<div class="flex items-center gap-4">
		<div class="min-w-[25%]">
			<img src="/gateway.svg" alt="Gateway Image" class="w-full" />
		</div>
		<div class="flex flex-col gap-3">
			<div>
				<h6 class="text-md font-bold text-gray-500 dark:text-white mb-1">Main Hub</h6>
				<p class="text-sm text-gray-500 dark:text-white">
					<b>IP Address :</b> 192.168.0.10 <br />
					<b>Gateway ID :</b> 12343124 <br />
					<b>Version :</b> 2.0.1 Beta Final Release <br />
					<b>Zigbee Channel :</b> 28
				</p>
			</div>
			<div class="flex flex-wrap items-center justify-between">
				<Button color="primary" size="sm" class="rounded-md">Ping</Button>
				<Button color="red" size="sm" class="rounded-md">Reboot</Button>
			</div>
		</div>
	</div>
</Card>