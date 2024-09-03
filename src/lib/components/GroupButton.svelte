<script>
	import { ButtonGroup } from 'flowbite-svelte';

	import { Filter, ChevronDown } from 'lucide-svelte';
	import { RotateCcw } from 'lucide-svelte';
	import Button from './common/Button.svelte';
	import Dropdown from './common/Dropdown.svelte';

	let className = "";
	export {className as class}

	let dropDownList = ["Dashboard","Settings"]
</script>

<ButtonGroup class="outline outline-gray-200 outline-1 dark:outline-templateClr dark: templateDarkClr {className}">
	<Button outlined color="none" noShadow  class="dark:text-dark"><Filter /></Button>
	<Dropdown class="shadow-" list={dropDownList} />
	<Button outlined color="none" noShadow  class="dark:text-dark"><RotateCcw class="w-5 h-5"/></Button>
</ButtonGroup>
