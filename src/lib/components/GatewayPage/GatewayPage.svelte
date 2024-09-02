<script lang="ts">
	import Button from '../common/Button.svelte';
	import Card from '../common/Card.svelte';
	import GatewayCard from '../GatewayCard.svelte';
	import GatewayNav from './GatewayNav.svelte';
	import Modal from '../common/Modal.svelte';
	import GroupButton from '../GroupButton.svelte';
	import Info from '../Info.svelte';
	import Rooms from '../Rooms.svelte';
	let open = false;
	type navOptions = 'Home Info' | 'Rooms & Devices' | 'Backups' | 'Deployments';

	const tabChange = (event: any) => {
		console.log(event.detail.tab);
		tab = event.detail.tab;
	};
	let tab: navOptions = 'Home Info';
</script>

<div class="bg-white dark:bg-templateDarkClr p-3 rounded-md">
	<GatewayNav on:onTabChange={tabChange} />
	<!-- <div class="mb-3"></div>
	<Button color="alternative" size="xs" on:click={() => console.log('hii')}>hii</Button>
	<Button color="blue" size="sm">hii</Button>
	<Button color="green" pill>hii</Button>
	<Button color="primary">hii</Button>
	<Button color="primary" badge badgeColor="blue" badgeTxt="1">hii</Button>
	<Button color="blue" loading size="xs">hii</Button>
	<Button color="blue" outlined size="xs">hii</Button>

	<div class="mb-2"></div>

	<div class="flex gap-2 flex-wrap">
		<Card>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut natus error tempore! Magni
			commodi facere voluptates, exercitationem esse veritatis. Accusamus magni iusto omnis
			praesentium minus aperiam libero optio quia nulla. Odio, tenetur.
		</Card>
	</div>
	<div class="mb-2"></div>

	<Button color="blue" outlined size="xs" on:click={() => (open = true)}>modal</Button>

	<Modal bind:open>
		<div slot="header">modal head</div>
		<div slot="content">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita minima magnam adipisci
			fugiat ad soluta porro accusantium quibusdam! Exercitationem ullam, nulla cumque, provident
			amet eos unde corrupti dolorem esse voluptate voluptatem. Provident?
		</div>
	</Modal>

	<div class="m-2 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
		<GatewayCard />
		<GatewayCard />
		<GatewayCard />
		<GatewayCard />
	</div>

	<input type="radio" name="radio" class="border-blue-600" />
	<input type="radio" name="radio" />
	<GroupButton/> -->

	{#if tab == 'Home Info'}
		<Info />
	{:else if tab == 'Rooms & Devices'}
		<Rooms />
	{/if}
</div>
