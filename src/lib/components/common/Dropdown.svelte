<script lang="ts">
    import { Dropdown, DropdownItem } from "flowbite-svelte";
    // import { ChevronDownOutline } from "flowbite-svelte-icons";
    import { ChevronDown } from 'lucide-svelte';
    import { createEventDispatcher } from "svelte";
    import Button from "./Button.svelte"
  
    export let list: any[];
    let className = "";
    export {className as class}
    let heading:any = list[0] || "Select";
    let isOpen = false;
  
    const dispatch = createEventDispatcher();
  
    const clicked = (index: number) => {
      heading = list[index];
      dispatch("clickItem", { item: list[index], index });
      isOpen = false;
    };
  
    const openDropdownList = () => {
      isOpen = true;
    }
    
  </script>
  
    <Button color="light" noShadow class="dark:text-dark font-normal overflow-hidden text-nowrap flex justify-between  dark:bg-templateDarkClr {className}"
  on:click={openDropdownList}
    >
    <span class="overflow-hidden flex-1">{heading}</span>
    <ChevronDown
      class="h-3 ms-2 dark:text-dark"
    /></Button
  >
  <Dropdown bind:open={isOpen} >
    {#each list as item, index}
      <DropdownItem on:click={() => clicked(index)}>{item}</DropdownItem>
    {/each}
  </Dropdown>
  