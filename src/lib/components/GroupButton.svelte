<script>
	import { ButtonGroup, Dropdown, DropdownItem } from 'flowbite-svelte';

	import { Filter, ChevronDown } from 'lucide-svelte';
	import { RotateCcw } from 'lucide-svelte';
	import Button from './common/Button.svelte';
</script>

<ButtonGroup class="outline outline-templateDarkClr outline-1 dark:outline-templateClr">
	<Button outlined color="none" noShadow  class="text-light dark:text-dark"><Filter /></Button>
	<script>
	</script>

	<Button outlined color="none" noShadow class="text-light dark:text-dark">Dropdown button <ChevronDown class="w-4 h-4"/></Button>
	<Dropdown>
		<DropdownItem>Dashboard</DropdownItem>
		<DropdownItem>Settings</DropdownItem>
		<DropdownItem>Earnings</DropdownItem>
		<DropdownItem>Sign out</DropdownItem>
	</Dropdown>
	<Button outlined color="none" noShadow  class="text-light dark:text-dark"><RotateCcw class="w-5 h-5"/></Button>
</ButtonGroup>
