<script>
  import { fade } from "svelte/transition";
  let container
  let items = [
    {
      name: 'All',
      val: 'all'
    },
    {
      name: 'Popular',
      val: 'popular'
    },
    {
      name: 'Profitable',
      val: 'profitable'
    },
    {
      name: 'Perspective',
      val: 'perspective'
    },
  ]
  
  let selected = {
      name: 'All',
      val: 'all'
    }
  let open = false

  function clickOutside (node) {
    const handleClick = event => {
        if (!node.contains(event.target) && open) {
          console.log('executed')
          open = false
        }
    };

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
          document.removeEventListener('click', handleClick, true);
        }
    };
  }

  const onClick = (e) => {
    e.stopPropagation()
    open = !open
  }
</script>
<div class="relative" use:clickOutside>
  <div bind:this={container} on:click={onClick} class="flex items-center space-x-3 select-none cursor-pointer">
    <span class="w-[140px] text-end">
      {selected.name}
    </span>
    <svg class:rotate-180={open} class="transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L12 13.5858L6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L11.2929 15.7071Z" fill="white"/>
    </svg>
  </div>
  <div transition:fade class:hidden={!open} class="absolute p-[10px] min-w-[180px] bg-[#353535] shadow-xl top-[120%] left-[-5%] rounded-[12px]">
    <div class="font-medium select-none">Show</div>
    <div class="mt-2 space-y-1">
      {#each items as item}
        <div on:click={() => {
          selected = item
          open = false
          }} class="flex space-x-2 items-center justify-between cursor-pointer active:scale-95 active:opacity-70 transition-all select-none">
          <span>
            {item.name}
          </span>

          {#if selected.val === item.val}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.256 5.91473C17.5814 6.24017 17.5814 6.76781 17.256 7.09324L8.92263 15.4266C8.59719 15.752 8.06956 15.752 7.74412 15.4266L3.57745 11.2599C3.25201 10.9345 3.25201 10.4068 3.57745 10.0814C3.90289 9.75596 4.43053 9.75596 4.75596 10.0814L8.33337 13.6588L16.0775 5.91473C16.4029 5.5893 16.9305 5.5893 17.256 5.91473Z" fill="white"/>
            </svg>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>