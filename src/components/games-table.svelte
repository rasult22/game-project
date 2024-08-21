<script>
  import ChevronDown from './icons/ChevronDown.svelte'
  import ChevronUp from './icons/ChevronUp.svelte'

  export let data = []
</script>

<div class="bg-transparent space-y-3 w-full text-white p-4 rounded-lg">
  <div class="grid sm:hidden border-b border-[#787575] mb-4 text-center grid-cols-8 md:grid-cols-6 items-center py-2 text-sm group d">
    <div class="col-span-2 flex space-x-[24px]">
      <div class="text-left text-[#787575]">Rank</div>
      <div class="text-left">Name</div>
    </div>
    <div>Retention</div>
    <div>Session Lenght</div>
    <div>ARPDAU</div>
    <div>Churn Rate</div>
    <div class="text-center md:hidden">Token Volume</div>
    <div class="text-center md:hidden">Market cap</div>
  </div>  
  {#each data as item, index}
    <div class="grid grid-cols-8 md:grid-cols-6 sm:grid-cols-2 items-center py-2 text-sm group">
      <div class="col-span-2 flex items-center gap-3">
        <span class="w-14 text-left">
          {#if index === 0}
          <button class="bg-[#27B1EC] active:scale-95 transition-all py-1 px-[6px] rounded-[8px]">Ad</button>
          {:else}
          <span class="">
            {index}
          </span>
          {/if}
        </span>
        <img width="52" src={item.image} alt={item.name} class="w-[52px] h-[52px] rounded-md" />
        <div class="flex flex-col">
          <span class="font-semibold">{item.name}</span>
          <div class="flex items-center gap-1">
            {#each  item.networks as network }
              {#if network === 'solana'}
                <img width="20" height="20" src="/media/solana-icon.svg" alt="">
              {:else if network === 'ton'}
                <img width="20" height="20" src="/media/ton-icon.svg" alt="">
              {:else if network === 'polygon'}
                <img width="20" height="20" src="/media/polygon-icon.svg" alt="">
              {:else if network === 'avax'}
                <img width="20" height="20" src="/media/avax-icon.svg" alt="">
              {:else if network === 'ronin'}
                <img width="20" height="20" src="/media/ronin-icon.svg" alt="">
              {:else if network === 'eth'}
                <img width="20" height="20" src="/media/ethereum-icon.svg" alt="">
              {:else if network === 'moonbeam'}
                <img width="20" height="20" src="/media/moonbeam-icon.svg" alt="">
              {:else if network === 'bsc'}
                <img width="20" height="20" src="/media/bnb-icon.svg" alt="">
              {:else}
                {network}
              {/if}
            {/each}
          </div>
        </div>
      </div>
      <div class="text-center sm:hidden">
        <span>{item.retention}</span>
        <div class="flex items-center justify-center text-red-500">
          <ChevronDown class="w-4 h-4" />
          <span>{item.retentionChange}</span>
        </div>
      </div>
      <div class="text-center sm:hidden">
        <span>{item.session}</span>
        <div class="flex items-center justify-center text-green-500">
          <ChevronUp class="w-4 h-4" />
          <span>{item.sessionChange}</span>
        </div>
      </div>
      <div class="text-center sm:hidden">
        <span>{item.arp_dau}</span>
        <div class="flex items-center justify-center text-green-500">
          <ChevronUp class="w-4 h-4" />
          <span>{item.arp_dau_change}</span>
        </div>
      </div>
      <div class="text-center sm:hidden">
        <span>{item.churn}</span>
        <div class="flex items-center justify-center text-green-500">
          <ChevronUp class="w-4 h-4" />
          <span>{item.churnChange}</span>
        </div>
      </div>
      <div class="text-center md:hidden sm:hidden">{item.token_volume}</div>
      <div class="text-center md:hidden sm:hidden">{item.market_cap}</div>
    </div>
  {/each}
</div>