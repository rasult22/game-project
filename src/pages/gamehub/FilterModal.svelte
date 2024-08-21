<script>
  import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
  import DeviceFilter from "~/components/filters/device-filter.svelte";
  import GenreFilter from "~/components/filters/genre-filter.svelte";
  import NetworkFilter from "~/components/filters/network-filter.svelte";
  import StatusFilter from "~/components/filters/status-filter.svelte";
  
  export let genreFilter
  export let networkFilter
  const dispatch = createEventDispatcher()
  let open = false
</script>

<button on:click={() => open = true} class="p-[11px] anim-btn bg-[#464648] rounded-[8px] flex items-center gap-2">
  <span class="hidden sm:inline">Filters</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C13.4477 5 13 5.44772 13 6C13 6.55228 13.4477 7 14 7C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5ZM11 5C11.4118 3.83481 12.6938 3 14 3C15.3062 3 16.5882 3.83481 17 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H17C16.5882 8.16519 15.3062 9 14 9C12.6938 9 11.4118 8.16519 11 7H4C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5H11ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11ZM5 11C5.41184 9.83481 6.69378 9 8 9C9.30622 9 10.5882 9.83481 11 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H11C10.5882 14.1652 9.30622 15 8 15C6.69378 15 5.41184 14.1652 5 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H5ZM17 17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19C17.5523 19 18 18.5523 18 18C18 17.4477 17.5523 17 17 17ZM14 17C14.4118 15.8348 15.6938 15 17 15C18.3062 15 19.5882 15.8348 20 17C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19C19.5882 20.1652 18.3062 21 17 21C15.6938 21 14.4118 20.1652 14 19H4C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17H14Z" fill="white"/>
  </svg>
</button>

{#if open}
  <div transition:fade on:click={() => open = false} class="fixed cursor-pointer flex items-center justify-center left-[50%] translate-x-[-50%] top-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm w-[100vw] h-[100vh] z-[150]">
    <div on:click|stopPropagation class="flex md:max-h-[80vh] sm:max-h-[80vh] sm:overflow-auto md:overflow-auto flex-col max-w-[1200px] w-[90vw] pt-4 pb-6 px-6 sm:px-4 z-[150] cursor-default rounded-[24px] overflow-hidden bg-[#26262A]">
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C13.4477 5 13 5.44772 13 6C13 6.55228 13.4477 7 14 7C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5ZM11 5C11.4118 3.83481 12.6938 3 14 3C15.3062 3 16.5882 3.83481 17 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H17C16.5882 8.16519 15.3062 9 14 9C12.6938 9 11.4118 8.16519 11 7H4C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5H11ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11ZM5 11C5.41184 9.83481 6.69378 9 8 9C9.30622 9 10.5882 9.83481 11 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H11C10.5882 14.1652 9.30622 15 8 15C6.69378 15 5.41184 14.1652 5 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H5ZM17 17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19C17.5523 19 18 18.5523 18 18C18 17.4477 17.5523 17 17 17ZM14 17C14.4118 15.8348 15.6938 15 17 15C18.3062 15 19.5882 15.8348 20 17C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19C19.5882 20.1652 18.3062 21 17 21C15.6938 21 14.4118 20.1652 14 19H4C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17H14Z" fill="white"/>
            </svg>
          </div>
          <div class="text-[24px]">Filter</div>
        </div>
        <div>
          <svg on:click={() => open = false} class="cursor-pointer" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0565 28.9427C11.5772 29.4634 12.4215 29.4634 12.9422 28.9427L19.9993 21.8855L27.0565 28.9427C27.5772 29.4634 28.4215 29.4634 28.9422 28.9427C29.4629 28.422 29.4629 27.5778 28.9422 27.0571L21.885 19.9999L28.9422 12.9427C29.4629 12.422 29.4629 11.5778 28.9422 11.0571C28.4215 10.5364 27.5772 10.5364 27.0565 11.0571L19.9993 18.1143L12.9422 11.0571C12.4215 10.5364 11.5772 10.5364 11.0565 11.0571C10.5358 11.5778 10.5358 12.422 11.0565 12.9427L18.1137 19.9999L11.0565 27.0571C10.5358 27.5778 10.5358 28.422 11.0565 28.9427Z" fill="white"/>
          </svg>
        </div>
      </div>
      <!--  -->
      <div class="mt-5 w-full">
        <div class="font-medium mb-3">Ranking Rate</div>
        <div class="flex w-full space-x-[10px]">
            <div class="flex md:w-full flex-col">
              <label class="w-full text-[14px] leading-[150%] mb-1" for="from">From</label>
              <input id="from" class="w-full px-4 py-[10px] rounded-[8px] focus:border-white outline-none bg-transparent border border-[#464648]" type="number">
            </div>
            <div class="flex md:w-full flex-col">
              <label class="w-full text-[14px] leading-[150%] mb-1" for="to">To</label>
              <input id="to" class="w-full px-4 py-[10px] rounded-[8px] focus:border-white outline-none bg-transparent border border-[#464648]" type="number">
            </div>
        </div>
      </div>
      <div class="mt-5">
        <GenreFilter bind:genreFilter={genreFilter} />
      </div>
      <div class="mt-5">
        <NetworkFilter bind:networkFilter={networkFilter} />
      </div>
      <div class="mt-5">
        <DeviceFilter />
      </div>
      <div class="mt-5">
        <StatusFilter />
      </div>
      <div class="mt-5">
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
      <div class="mt-5 space-y-[10px]">
        <button on:click={() => open = false} class="w-full justify-center font-medium bg-white flex items-center space-x-2 text-[#2A2A2A] py-[10px] active:scale-95 active:opacity-85 transition-all px-[36px] rounded-[12px]">
          <span>
            Confirm
          </span>
        </button>
        <button on:click={() => {
          dispatch('reset')
          open = false
        }} class="w-full justify-center font-medium bg-[#373737] flex items-center space-x-2 text-white py-[10px] active:scale-95 active:opacity-85 transition-all px-[36px] rounded-[12px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6H18.9883C18.9953 5.99993 19.0024 5.99993 19.0095 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H19.9201L18.9997 19.0458C18.9878 19.8249 18.6731 20.5695 18.1213 21.1213C17.5587 21.6839 16.7957 22 16 22H8C7.20435 22 6.44129 21.6839 5.87868 21.1213C5.32687 20.5695 5.01223 19.8249 5.00035 19.0458L4.07987 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H4.99054C4.9976 5.99993 5.00466 5.99993 5.0117 6H8V4C8 3.46957 8.21071 2.96086 8.58579 2.58579ZM6.0868 8L6.99655 18.917C6.99885 18.9446 7 18.9723 7 19C7 19.2652 7.10536 19.5196 7.29289 19.7071C7.48043 19.8946 7.73478 20 8 20H16C16.2652 20 16.5196 19.8946 16.7071 19.7071C16.8946 19.5196 17 19.2652 17 19C17 18.9723 17.0012 18.9446 17.0035 18.917L17.9132 8H6.0868ZM14 6H10V4H14V6ZM10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10ZM14 10C14.5523 10 15 10.4477 15 11V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V11C13 10.4477 13.4477 10 14 10Z" fill="white"/>
          </svg>
          <span>
            Reset
          </span>
        </button>
      </div>
    </div>
  </div>
{/if}