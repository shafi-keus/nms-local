<script>
	import GatewayCard from '$lib/components/GatewayCard.svelte';
	import Summary from './Summary.svelte';
	import { QrCode } from 'lucide-svelte';
</script>

<div class="flex flex-col p-4 gap-4">
	<!-- Info -->
	<div class="flex items-center justify-between">
		<!-- Basic info -->
		<div class="">
			<p class="text-sm text-light dark:text-dark leading-6 p-4">
				<b class="font-semibold">Customer Name : </b>Brijesh Chandwani
				<br />
				<b class="font-semibold">Lead ID : </b>
				L1234
				<br />
				<b class="font-semibold">Phone : </b>
				993846383<br />
				<b class="font-semibold">Email : </b>
				rohitarun237@gmail.com <br />
				<b class="font-semibold">Address : </b> Gandipet, 500075
			</p>
		</div>
		<!-- QR code -->
		<QrCode class="h-24 w-24 text-light dark:text-dark" />
	</div>
	<!-- Gateways -->
	<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5  justify-items-center p-4">
		<GatewayCard />
		<GatewayCard />
		<GatewayCard />
		<GatewayCard />
	</div>
	<!-- Summary -->
	<Summary />
</div>
