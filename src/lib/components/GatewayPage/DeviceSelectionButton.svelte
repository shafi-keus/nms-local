<script>
    import Button from '../common/Button.svelte';
    import Dropdown from '../common/Dropdown.svelte';
    import { ButtonGroup } from 'flowbite-svelte';
    
    const handleClick = () => {
      alert('Clicked');
    };
  </script>
  
  <ButtonGroup class="*:!ring-primary-700">
    <Button on:click={handleClick}>Click me</Button>
    <Button> <Dropdown list={["Smart Console"]} /> </Button>
    <Button>Messages</Button>
  </ButtonGroup>