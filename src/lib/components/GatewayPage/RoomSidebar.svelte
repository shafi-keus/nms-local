<script lang="ts">
    import Card from "../common/Card.svelte";
    import Dropdown from "../common/Dropdown.svelte";
    import RadioButton from "../common/RadioButton.svelte";
    import { BedSingle } from 'lucide-svelte';
    import { onMount } from "svelte";
   
    type colorType =
          | "red"
          | "yellow"
          | "orange"
          | "green"
          | "purple"
          | "blue"
          | "light"
          | "dark"
          | "primary"
          | "none"
          | "alternative";
  
     type DeviceType = {name:string,color:colorType}
    let floorData:any = {
      "First floor" : [
          "Bedroom-1", "Living room-1" ,"Kitchen-1", "Loungs=1","Bedroom-1", "Living room-1" ,"Kitchen-1", "Loungs=1"
      ],
      "Second floor" : [
          "Bedroom-2", "Living room-2" ,"Kitchen-2", "Loungs-2","Bedroom-2", "Living room-2" ,"Kitchen-2", "Loungs-2"
      ],
      "Third floor" : [
          "Bedroom-3", "Living room-3" ,"Kitchen-3", "Loungs-3","Bedroom-3", "Living room-3" ,"Kitchen-3", "Loungs-3"
      ]
    }
  
    let checkBoxes:boolean[] = [false,false,false,false];
  
  
  
    let types:DeviceType[] = [
      {
          name:"Devices",
          color: "green"
      },
      {
          name:"Groups",
          color: "blue"
      },
      {
          name:"Scenes",
          color: "orange"
      },
      {
          name:"Schedules",
          color: "purple"
      }
    ]
  
    let list = ["First floor", "Second floor", "Third floor"]
    let selectedFloor = "First floor";
    let activeRoomIndex = 0;
  
    const handleItem = (e:CustomEvent) => {
      selectedFloor = e.detail.item
      activeRoomIndex = 0;
      console.log("Floor Rooms",floorData[selectedFloor])
    }
  
    const handleSelectedRoom = (index:number) => {
      activeRoomIndex = index;
    }
  
    const handleClick = (index:number) => {
      checkBoxes = checkBoxes.map((x: boolean, i: number) => i == index);
      console.log(!checkBoxes[index],checkBoxes,index)
    }
  
    onMount(()=>{
  
    })
  
  </script>
      <Card class="min-w-72 p-5">
          <div class="flex flex-col gap-5 p-3">
                  <div class="flex items-center justify-between">
                      <span class="title-medium text-center flex align-middle dark:text-dark font-bold">Rooms</span>
                      <Dropdown on:clickItem={(e)=>handleItem(e)} {list} />
                  </div>
                  <div class="flex flex-col">
                      {#each floorData[selectedFloor] as room,index}
                      <!-- svelte-ignore a11y-click-events-have-key-events -->
                      <!-- svelte-ignore a11y-no-static-element-interactions -->
                      <div on:click={()=>handleSelectedRoom(index)} class="flex justify-between items-center p-3 gap-3 {index==activeRoomIndex ? 'text-[#4880ff] opacity-[10] dark:bg-templateDarkClr' : 'dark:text-dark'} rounded">
                          <!-- svelte-ignore a11y-missing-attribute -->
                           <div class="flex justify-between items-center gap-2 text-sm ">
                               <BedSingle class="{activeRoomIndex==index ? '  text-[#4880ff]' : 'dark:text-dark' } w-4 h-4" />
                               <span class=" font-{activeRoomIndex==index ? 'bold ' : 'semibold dark:text-dark'}"> {room}</span>
                           </div>
                          <span class="text-sm font-{activeRoomIndex==index ? 'bold ' : ' dark:text-dark semibold opacity-[0.6]'}">1200</span>
                      </div>
                      {/each}
                  </div>
                  <div class="flex flex-col gap-5 text-sm">
                      <span class="title-medium text-center flex align-middle dark:text-dark font-bold">Type</span>
                      <div class="flex flex-col gap-4">
                          <!-- svelte-ignore a11y-click-events-have-key-events -->
                          <!-- svelte-ignore a11y-no-static-element-interactions -->
                          <div class="flex px-3 gap-3" on:click={()=>handleClick(0)}>
                              <RadioButton class="border border-green-500" bind:activeClick={checkBoxes[0]} color="{types[0].color}" /> 
                              <span class="font-semibold text-[{activeRoomIndex==0 ? 'green' : ''}] title-medium dark:text-dark">{types[0].name}</span>
                          </div>
                          <!-- svelte-ignore a11y-click-events-have-key-events -->
                          <!-- svelte-ignore a11y-no-static-element-interactions -->
                          <div class="flex px-3 gap-3" on:click={()=>handleClick(1)}>
                              <RadioButton class="border border-blue-500" bind:activeClick={checkBoxes[1]} color="{types[1].color}" /> 
                              <span class="font-semibold text-[{activeRoomIndex==1 ? 'blue' : ''}] title-medium dark:text-dark">{types[1].name}</span>
                          </div>
                          <!-- svelte-ignore a11y-click-events-have-key-events -->
                          <!-- svelte-ignore a11y-no-static-element-interactions -->
                          <div class="flex px-3 gap-3" on:click={()=>handleClick(2)}>
                              <RadioButton class="border border-orange-500" bind:activeClick={checkBoxes[2]} color="{types[2].color}" /> 
                              <span class="font-semibold text-[{activeRoomIndex==2 ? 'orange' : ''}] title-medium dark:text-dark">{types[2].name}</span>
                          </div>
                          <!-- svelte-ignore a11y-click-events-have-key-events -->
                          <!-- svelte-ignore a11y-no-static-element-interactions -->
                          <div class="flex px-3 gap-3" on:click={()=>handleClick(3)}>
                              <RadioButton class="border border-purple-500" bind:activeClick={checkBoxes[3]} color="{types[3].color}" /> 
                              <span class="font-semibold text-[{activeRoomIndex==3 ? 'purple' : ''}] title-medium dark:text-dark">{types[3].name}</span>
                          </div>
                          </div>
                  </div>
              </div>
      </Card>