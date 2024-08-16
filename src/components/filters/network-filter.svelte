<script>
	import { fade } from 'svelte/transition';
	import NetworkChip from './network-chip.svelte';
  let items = [
    {
      name: 'TON',
      img: '/game-project/media/ton-icon.svg',
      key: 'ton'
    },
    {
      name: 'Solana',
      img: '/game-project/media/solana-icon.svg',
      key: 'solana'
    },
    {
      name: 'Ethereum',
      img: '/game-project/media/ethereum-icon.svg',
      key: 'eth'
    },
    {
      name: 'BSC',
      img: '/game-project/media/bnb-icon.svg',
      key: 'bsc'
    },
    {
      name: 'Ronin',
      img: '/game-project/media/ronin-icon.svg',
      key: 'ronin'
    },
    {
      name: 'Polygon',
      img: '/game-project/media/polygon-icon.svg',
      key: 'polygon'
    },
    {
      name: 'AVAX',
      img: '/game-project/media/avax-icon.svg',
      key: 'avax'
    },
    {
      name: 'Moonbeam',
      img: '/game-project/media/moonbeam-icon.svg',
      key: 'moonbeam'
    },
  ]
  export let networkFilter = []

  const onSelect = (item) => {
    if (networkFilter.find(el => el.key === item.key)) {
      networkFilter = networkFilter.filter(x => x.key !== item.key)
    } else {
      networkFilter.push(item)
      networkFilter = networkFilter
    }
  }
  let open = true
</script>
<div class="max-w-[500px] border-b border-[#464648] pb-4 select-none">
  <div on:click={() => open = !open} class="flex justify-between cursor-pointer">
    <div class="text-[16px] font-semibold">Network</div>
    <svg class:rotate-180={!open} class="transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L12 13.5858L6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L11.2929 15.7071Z" fill="white"/>
    </svg>
  </div>
  {#if open}
    <div transition:fade class="flex gap-[10px] flex-wrap pt-4">
      {#each items as item (item.key) }
        <NetworkChip on:click={() => onSelect(item)} active={networkFilter.some(el => el.key === item.key)}>
          <img width="32" slot="img" src={item.img} alt="">
          <span slot="text">
            {item.name}
          </span>
        </NetworkChip>
      {/each}
    </div>
  {/if}
</div>