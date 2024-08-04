<script>
  import GenreFilter from "~/components/filters/genre-filter.svelte";
  import NetworkFilter from "~/components/filters/network-filter.svelte";
  import DeviceFilter from "~/components/filters/device-filter.svelte";
  import StatusFilter from "~/components/filters/status-filter.svelte";
  import Search from "~/components/filters/search.svelte";
  import Dropdown from "~/components/filters/dropdown.svelte";
  import GameCardBasic from "~/components/game-card-basic.svelte";
  import GamesTable from '~/components/games-table.svelte'
  
  let tab = 'gamehub'
</script>

<div class="flex space-x-4">
  <a on:click|preventDefault={() => tab = 'gamehub'} class:border-b-2={tab === 'gamehub'} class="pb-[5px] cursor-pointer">Gamehub</a>
  <a on:click|preventDefault={() => tab = 'ranking'} class:border-b-2={tab === 'ranking'} class="pb-[5px] cursor-pointer">Ranking</a>
</div>

{#if tab === 'gamehub'}
  <div class="flex mt-[50px] space-x-4 h-full">
    <!-- sidebar -->
    <div class="max-w-[280px] flex flex-col ">
      <!-- Filters -->
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C13.4477 5 13 5.44772 13 6C13 6.55228 13.4477 7 14 7C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5ZM11.1707 5C11.5825 3.83481 12.6938 3 14 3C15.3062 3 16.4175 3.83481 16.8293 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H16.8293C16.4175 8.16519 15.3062 9 14 9C12.6938 9 11.5825 8.16519 11.1707 7H4C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5H11.1707ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11ZM5.17071 11C5.58254 9.83481 6.69378 9 8 9C9.30622 9 10.4175 9.83481 10.8293 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H10.8293C10.4175 14.1652 9.30622 15 8 15C6.69378 15 5.58254 14.1652 5.17071 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H5.17071ZM17 17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19C17.5523 19 18 18.5523 18 18C18 17.4477 17.5523 17 17 17ZM14.1707 17C14.5825 15.8348 15.6938 15 17 15C18.3062 15 19.4175 15.8348 19.8293 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H19.8293C19.4175 20.1652 18.3062 21 17 21C15.6938 21 14.5825 20.1652 14.1707 19H4C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17H14.1707Z" fill="white"/>
        </svg>
        <span class="text-[24px] font-medium">Filters</span>
      </div>
      <!-- Ranking rate -->
      <div class="mt-11">
        <div class="font-medium mb-3">Ranking Rate</div>
        <div class="flex space-x-[10px]">
            <div class="flex flex-col">
              <label class="w-full text-[14px] leading-[150%] mb-1" for="from">From</label>
              <input id="from" class="w-full px-4 py-[10px] rounded-[8px] focus:border-white outline-none bg-transparent border border-[#464648]" type="number">
            </div>
            <div class="flex flex-col">
              <label class="w-full text-[14px] leading-[150%] mb-1" for="to">To</label>
              <input id="to" class="w-full px-4 py-[10px] rounded-[8px] focus:border-white outline-none bg-transparent border border-[#464648]" type="number">
            </div>
        </div>
      </div>
      <!-- Genre Filter -->
      <div class="mt-6">
        <GenreFilter />
      </div>
      <!-- Network Filter -->
      <div class="mt-6">
        <NetworkFilter />
      </div>
      <!-- Device Filter -->
      <div class="mt-6">
        <DeviceFilter />
      </div>
      <!-- Status Filter -->
      <div class="mt-6">
        <StatusFilter />
      </div>
      <!-- Market Cap -->
      <div class="mt-11">
        <div class="font-medium mb-3">Market Cap</div>
        <div class="flex space-x-[10px]">
            <div class="w-full flex flex-col">
              <label class="w-full text-[14px] leading-[150%] mb-1" for="from">From</label>
              <input id="from" class="w-full px-4 py-[10px] rounded-[8px] focus:border-white outline-none bg-transparent border border-[#464648]" type="number">
            </div>
            <div class="w-full flex flex-col">
              <label class="w-full text-[14px] leading-[150%] mb-1" for="to">To</label>
              <input id="to" class="w-full px-4 py-[10px] rounded-[8px] focus:border-white outline-none bg-transparent border border-[#464648]" type="number">
            </div>
        </div>
      </div>
      <!-- Reset button -->
      <div class="mt-5">
        <button class="w-full justify-center font-medium bg-[#272727] flex items-center space-x-2 text-white py-[10px] active:scale-95 active:bg-[#272727] transition-all px-[36px] rounded-[12px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6H18.9883C18.9953 5.99993 19.0024 5.99993 19.0095 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H19.9201L18.9997 19.0458C18.9878 19.8249 18.6731 20.5695 18.1213 21.1213C17.5587 21.6839 16.7957 22 16 22H8C7.20435 22 6.44129 21.6839 5.87868 21.1213C5.32687 20.5695 5.01223 19.8249 5.00035 19.0458L4.07987 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H4.99054C4.9976 5.99993 5.00466 5.99993 5.0117 6H8V4C8 3.46957 8.21071 2.96086 8.58579 2.58579ZM6.0868 8L6.99655 18.917C6.99885 18.9446 7 18.9723 7 19C7 19.2652 7.10536 19.5196 7.29289 19.7071C7.48043 19.8946 7.73478 20 8 20H16C16.2652 20 16.5196 19.8946 16.7071 19.7071C16.8946 19.5196 17 19.2652 17 19C17 18.9723 17.0012 18.9446 17.0035 18.917L17.9132 8H6.0868ZM14 6H10V4H14V6ZM10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10ZM14 10C14.5523 10 15 10.4477 15 11V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V11C13 10.4477 13.4477 10 14 10Z" fill="white"/>
          </svg>
          <span>
            Reset
          </span>
        </button>
      </div>
    </div>
    <!-- main -->
    <div class="w-full">
      <!-- header -->
      <div class="flex items-center justify-between">
        <Search />
        <Dropdown />
      </div> 
      <div class="mt-[50px] p-4 gap-3 grid grid-cols-4 bg-[#2A2A2A] rounded-[16px]">
        <GameCardBasic />
        <GameCardBasic />
        <GameCardBasic />
        <GameCardBasic />
        <GameCardBasic />
        <GameCardBasic />
        <GameCardBasic />
        <GameCardBasic />
        <GameCardBasic />
        <GameCardBasic />
        <GameCardBasic />
        <GameCardBasic />
      </div>
    </div>
  </div>
  {:else}
  <div class="flex mt-[50px] space-x-4 h-full">
    <!-- ranking -->
    <GamesTable />
  </div>
{/if}