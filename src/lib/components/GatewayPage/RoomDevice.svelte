<script>
	import GatewayCard from "../GatewayCard.svelte";
	import GroupButton from "../GroupButton.svelte";
	import Search from "../Search.svelte";
	import RoomSidebar from "./RoomSidebar.svelte";

</script>


<!-- <div class="flex justify-between p-5">
    <RoomSidebar />
    <div class="w-full flex flex-col">
        <div class="flex justify-between px-5">
            <Search  />
            <GroupButton  />
        </div>
        <div class="m-2 grid sm:grid-cols-2  gap-y-3 justify-items-center p-4">
            <GatewayCard />
            <GatewayCard />
            <GatewayCard />
            <GatewayCard />
        </div>
    </div>
</div> -->


<div class="flex justify-between p-5 pr-0">
    <RoomSidebar />
    <div class="w-full flex flex-col">
        <!-- Upper Section -->
        <div class="flex justify-around gap-x-5 p-4">
            <Search />
            <GroupButton />
        </div>

        <!-- Lower Section -->
        <div class="grid sm:grid-cols-3  justify-items-center mx-auto gap-3">
            <GatewayCard />
            <GatewayCard />
            <GatewayCard />
            <GatewayCard />
        </div>
    </div>
</div>
