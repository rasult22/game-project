<script>
	import { numberFormatter } from './../utils/utils.ts';
  export let name = 'MOBOX'
  export let rank = '1'
  export let tags = 'Casual, Metaverse, Adventure'
  export let networks = ['ton','solana']
  export let players = 2303
  export let link = '#'
  export let img = ''
</script>
<a href={link} class="px-2 pt-2 pb-3 rounded-[14px]  group hover:bg-[#37373D] active:bg-[#111115] active:scale-95 cursor-pointer transition-all">
  <img width="257" height="300" class="w-full rounded-[10px] aspect-[257/300] object-cover" src={img} alt="">
  <div class="mt-2 transition-all">
    <div class="leading-[120%] flex items-center justify-between">
      <div>
        {name}
      </div>
      <div class="self-stretch text-[14px] leading-[120%] px-2 py-[6px] bg-white text-black rounded-[6px]">
        №{rank}
      </div>
    </div>
    <div class="flex items-center justify-between mt-2">
      <div class="text-[14px] leading-[120%] text-gray-400">{tags.join(', ').length > 25 ?  tags.join(', ').slice(0, 25) + '...' : tags.join(', ')}.</div>
      <div class="flex -space-x-2">
        {#each  networks as network }
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
          {:else if network === 'aptos'}
            <img width="20" height="20" src="/optimized/aptos-logo.webp" alt="">
          {:else}
          {network}
          {/if}
        {/each}
      </div>
    </div>
    <div class="flex items-center justify-between mt-3">
      <div class="flex items-center space-x-[10px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.59975 6C7.67495 5.99978 6.77864 6.32002 6.06335 6.90622C5.3481 7.49239 4.85805 8.30828 4.67658 9.21505C4.67657 9.2151 4.67659 9.215 4.67658 9.21505L3.04258 17.388C2.98731 17.6644 3.02335 17.9514 3.1453 18.2055C3.26726 18.4596 3.46851 18.6672 3.71872 18.797C3.96893 18.9268 4.25455 18.9718 4.53253 18.9251C4.81051 18.8785 5.0658 18.7427 5.25992 18.5383L9.27493 14.3113C9.46373 14.1125 9.72585 14 9.99999 14H13.9974C13.999 14 14.0006 14 14.0022 14H15.5C16.5609 14 17.5783 13.5786 18.3284 12.8284C19.0786 12.0783 19.5 11.0609 19.5 10C19.5 9.83586 19.4899 9.67277 19.4701 9.51154L19.4134 9.21979C19.4056 9.17967 19.4003 9.13964 19.3974 9.09986C19.2301 8.37545 18.8626 7.70575 18.3284 7.17157C17.5783 6.42143 16.5609 6 15.5 6H8.59975ZM20.2719 13.6371C20.1101 13.8494 19.9335 14.0518 19.7426 14.2426C18.8031 15.1822 17.584 15.7779 16.2809 15.949L18.7949 18.5951C18.7948 18.5951 18.7949 18.5952 18.7949 18.5951C18.9886 18.7989 19.2433 18.9345 19.5205 18.9814C19.7978 19.0282 20.0828 18.9839 20.3328 18.8551C20.5827 18.7263 20.7842 18.5198 20.9069 18.2668C21.0296 18.0138 21.067 17.7277 21.0133 17.4517L20.2719 13.6371ZM13.5707 16L17.345 19.9728C17.8368 20.4902 18.4832 20.8344 19.1871 20.9534C19.891 21.0724 20.6145 20.9599 21.2491 20.6329C21.8836 20.3058 22.395 19.7818 22.7065 19.1395C23.018 18.4971 23.1128 17.7711 22.9766 17.0703L21.4453 9.1915C21.2695 7.89876 20.6755 6.69027 19.7426 5.75736C18.6174 4.63214 17.0913 4 15.5 4L8.60022 4C8.60015 4 8.6003 4 8.60022 4C7.2131 3.99973 5.86849 4.48008 4.79562 5.35934C3.72269 6.23864 2.98759 7.46255 2.71542 8.8228L1.08141 16.9959C1.0814 16.9959 1.08141 16.9959 1.08141 16.9959C0.941104 17.6975 1.03262 18.4258 1.34219 19.0708C1.65177 19.7159 2.16263 20.2429 2.79778 20.5724C3.43293 20.9018 4.15796 21.016 4.86361 20.8975C5.56926 20.7791 6.21728 20.4345 6.71004 19.9157C6.71004 19.9157 6.71005 19.9157 6.71004 19.9157L10.4293 16H13.5707ZM7.99999 8C8.55228 8 8.99999 8.44772 8.99999 9C9.55228 9 9.99999 9.44772 9.99999 10C9.99999 10.5523 9.55228 11 8.99999 11C8.99999 11.5523 8.55228 12 7.99999 12C7.44771 12 6.99999 11.5523 6.99999 11C6.44771 11 5.99999 10.5523 5.99999 10C5.99999 9.44772 6.44771 9 6.99999 9C6.99999 8.44772 7.44771 8 7.99999 8ZM13 10C13 9.44772 13.4477 9 14 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H14C13.4477 11 13 10.5523 13 10Z" fill="white"/>
        </svg>
        <span class="text-[14px]">
          {numberFormatter.format(players)} players
        </span>
      </div>
      <div class="text-[14px] font-medium text-[#888888]">last 7 day</div>
    </div>
  </div>

</a>