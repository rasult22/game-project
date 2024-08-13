<script>
export let name = 'MOBOX'
export let img = '/game-project/media/game-card-sample.png'
export let tags = 'Casual, Metaverse, Adventure'
export let networks = []
</script>
<div class="min-w-[260px] px-2 pt-2 pb-3 rounded-[14px] max-w-[290px] group hover:bg-[#37373D] cursor-pointer transition-all">
  <img width="257" height="300" class="w-[257px] h-[300px] object-cover rounded-[10px]" src={img} alt="">
  <div class="mt-2 group-hover:hidden transition-all">
    <div class="leading-[120%]">
      {name}
    </div>
    <div class="flex items-center justify-between mt-2">
      <div class="text-[14px] leading-[120%] text-gray-400">{tags.join(', ').length > 25 ?  tags.join(', ').slice(0, 25) + '...' : tags.join(', ')}</div>
      <div class="flex -space-x-2">
        {#each  networks as network }
          {#if network === 'solana'}
            <img width="20" height="20" src="/game-project/media/solana-icon.svg" alt="">
          {:else if network === 'ton'}
            <img width="20" height="20" src="/game-project/media/ton-icon.svg" alt="">
          {:else if network === 'polygon'}
            <img width="20" height="20" src="/game-project/media/polygon-icon.svg" alt="">
          {:else if network === 'avax'}
            <img width="20" height="20" src="/game-project/media/avax-icon.svg" alt="">
          {:else if network === 'ronin'}
            <img width="20" height="20" src="/game-project/media/ronin-icon.svg" alt="">
          {:else if network === 'eth'}
            <img width="20" height="20" src="/game-project/media/ethereum-icon.svg" alt="">
          {:else if network === 'moonbeam'}
            <img width="20" height="20" src="/game-project/media/moonbeam-icon.svg" alt="">
          {:else if network === 'bsc'}
            <img width="20" height="20" src="/game-project/media/bnb-icon.svg" alt="">
          {:else}
          {network}
          {/if}
        {/each}
      </div>
    </div>
  </div>
  <button class="hidden hover:bg-[#1CC141] w-full group/btn mt-2 font-medium bg-[#fff] group-hover:flex items-center justify-center space-x-2 text-black py-[10px] active:scale-95 active:bg-[#17B23A] transition-all px-[36px] rounded-[12px]">
    <svg class="group-hover/btn:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 4V20L20 12L7 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="group-hover/btn:text-white">
      Play
    </span>
  </button>
</div>