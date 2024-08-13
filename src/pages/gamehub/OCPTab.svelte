<script>
  import { moneyFormatter } from "~/utils/utils";

  export let on_chain_performance;

  $: volume_rank = on_chain_performance.volume_rank || 'N/A'
  $: volume_24h_changed = on_chain_performance.volume_24h_changed || null
  $: market_cap = on_chain_performance.market_cap
  $: market_cap_7d_changed = on_chain_performance.market_cap_7d_changed || null
  $: current_roi = on_chain_performance.current_roi
  $: current_roi_7d_changed = on_chain_performance.current_roi_7d_changed
  $: circulating_supply = on_chain_performance.circulating_supply
  $: token_price = on_chain_performance.token_price
</script>
<div class="grid grid-cols-3 gap-4">
  <div class="min-w-[140px] border border-white p-4 rounded-[12px]">
    <div class="flex items-center justify-between">
      <div>Volume 24h</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0013 3.33317C6.3194 3.33317 3.33464 6.31794 3.33464 9.99984C3.33464 13.6817 6.3194 16.6665 10.0013 16.6665C13.6832 16.6665 16.668 13.6817 16.668 9.99984C16.668 6.31794 13.6832 3.33317 10.0013 3.33317ZM1.66797 9.99984C1.66797 5.39746 5.39893 1.6665 10.0013 1.6665C14.6037 1.6665 18.3346 5.39746 18.3346 9.99984C18.3346 14.6022 14.6037 18.3332 10.0013 18.3332C5.39893 18.3332 1.66797 14.6022 1.66797 9.99984ZM9.16797 6.6665C9.16797 6.20627 9.54106 5.83317 10.0013 5.83317H10.0096C10.4699 5.83317 10.843 6.20627 10.843 6.6665C10.843 7.12674 10.4699 7.49984 10.0096 7.49984H10.0013C9.54106 7.49984 9.16797 7.12674 9.16797 6.6665ZM8.33464 9.99984C8.33464 9.5396 8.70773 9.1665 9.16797 9.1665H10.0013C10.4615 9.1665 10.8346 9.5396 10.8346 9.99984V12.4998C11.2949 12.4998 11.668 12.8729 11.668 13.3332C11.668 13.7934 11.2949 14.1665 10.8346 14.1665H10.0013C9.54106 14.1665 9.16797 13.7934 9.16797 13.3332V10.8332C8.70773 10.8332 8.33464 10.4601 8.33464 9.99984Z" fill="white"/>
      </svg>
    </div>
    <div class="mt-12 text-[32px] font-medium leading-[120%]">
      {volume_24h_changed ? moneyFormatter(1).format(volume_24h_changed) : 'N/A'}
    </div>
    <div class="flex gap-2 mt-[10px]">
      {#if volume_24h_changed}
        {#if volume_24h_changed > -1}
          <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L12 13.5858L6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L11.2929 15.7071Z" fill="#0FFF18"/>
          </svg>
          <span class="text-[#0FFF18]">
            2.4%
          </span>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L12 13.5858L6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L11.2929 15.7071Z" fill="#EB122C"/>
          </svg>
          <span class="text-[#EB122C]">
            2.4%
          </span>
        {/if}
      {/if}
    </div>
  </div>
  <div class="min-w-[140px] border border-white p-4 rounded-[12px]">
    <div class="flex items-center justify-between">
      <div>Market Cap</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0013 3.33317C6.3194 3.33317 3.33464 6.31794 3.33464 9.99984C3.33464 13.6817 6.3194 16.6665 10.0013 16.6665C13.6832 16.6665 16.668 13.6817 16.668 9.99984C16.668 6.31794 13.6832 3.33317 10.0013 3.33317ZM1.66797 9.99984C1.66797 5.39746 5.39893 1.6665 10.0013 1.6665C14.6037 1.6665 18.3346 5.39746 18.3346 9.99984C18.3346 14.6022 14.6037 18.3332 10.0013 18.3332C5.39893 18.3332 1.66797 14.6022 1.66797 9.99984ZM9.16797 6.6665C9.16797 6.20627 9.54106 5.83317 10.0013 5.83317H10.0096C10.4699 5.83317 10.843 6.20627 10.843 6.6665C10.843 7.12674 10.4699 7.49984 10.0096 7.49984H10.0013C9.54106 7.49984 9.16797 7.12674 9.16797 6.6665ZM8.33464 9.99984C8.33464 9.5396 8.70773 9.1665 9.16797 9.1665H10.0013C10.4615 9.1665 10.8346 9.5396 10.8346 9.99984V12.4998C11.2949 12.4998 11.668 12.8729 11.668 13.3332C11.668 13.7934 11.2949 14.1665 10.8346 14.1665H10.0013C9.54106 14.1665 9.16797 13.7934 9.16797 13.3332V10.8332C8.70773 10.8332 8.33464 10.4601 8.33464 9.99984Z" fill="white"/>
      </svg>
    </div>
    <div class="mt-12 text-[32px] font-medium leading-[120%]">
      {market_cap ? moneyFormatter(1).format(market_cap) : 'N/A'}
    </div>
    <div class="flex gap-2 mt-[10px]">
      {#if market_cap_7d_changed}
        {#if market_cap_7d_changed > -1}
          <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L12 13.5858L6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L11.2929 15.7071Z" fill="#0FFF18"/>
          </svg>
          <span class="text-[#0FFF18]">
            2.4%
          </span>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L12 13.5858L6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L11.2929 15.7071Z" fill="#EB122C"/>
          </svg>
          <span class="text-[#EB122C]">
            2.4%
          </span>
        {/if}
      {/if}
    </div>
  </div>
  <div class="min-w-[140px] border border-white p-4 rounded-[12px]">
    <div class="flex items-center justify-between">
      <div>UAW <span class="opacity-50">24 h</span></div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0013 3.33317C6.3194 3.33317 3.33464 6.31794 3.33464 9.99984C3.33464 13.6817 6.3194 16.6665 10.0013 16.6665C13.6832 16.6665 16.668 13.6817 16.668 9.99984C16.668 6.31794 13.6832 3.33317 10.0013 3.33317ZM1.66797 9.99984C1.66797 5.39746 5.39893 1.6665 10.0013 1.6665C14.6037 1.6665 18.3346 5.39746 18.3346 9.99984C18.3346 14.6022 14.6037 18.3332 10.0013 18.3332C5.39893 18.3332 1.66797 14.6022 1.66797 9.99984ZM9.16797 6.6665C9.16797 6.20627 9.54106 5.83317 10.0013 5.83317H10.0096C10.4699 5.83317 10.843 6.20627 10.843 6.6665C10.843 7.12674 10.4699 7.49984 10.0096 7.49984H10.0013C9.54106 7.49984 9.16797 7.12674 9.16797 6.6665ZM8.33464 9.99984C8.33464 9.5396 8.70773 9.1665 9.16797 9.1665H10.0013C10.4615 9.1665 10.8346 9.5396 10.8346 9.99984V12.4998C11.2949 12.4998 11.668 12.8729 11.668 13.3332C11.668 13.7934 11.2949 14.1665 10.8346 14.1665H10.0013C9.54106 14.1665 9.16797 13.7934 9.16797 13.3332V10.8332C8.70773 10.8332 8.33464 10.4601 8.33464 9.99984Z" fill="white"/>
      </svg>
    </div>
    <div class="mt-12 text-[32px] font-medium leading-[120%]">
      N/A
    </div>
  </div>
</div>
<div class="grid grid-cols-2 gap-4 mt-4">
  <div class="min-w-[140px] border border-white p-4 rounded-[12px]">
    <div class="flex items-center justify-between">
      <div>Active players <span class="opacity-50">/24 h</span></div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0013 3.33317C6.3194 3.33317 3.33464 6.31794 3.33464 9.99984C3.33464 13.6817 6.3194 16.6665 10.0013 16.6665C13.6832 16.6665 16.668 13.6817 16.668 9.99984C16.668 6.31794 13.6832 3.33317 10.0013 3.33317ZM1.66797 9.99984C1.66797 5.39746 5.39893 1.6665 10.0013 1.6665C14.6037 1.6665 18.3346 5.39746 18.3346 9.99984C18.3346 14.6022 14.6037 18.3332 10.0013 18.3332C5.39893 18.3332 1.66797 14.6022 1.66797 9.99984ZM9.16797 6.6665C9.16797 6.20627 9.54106 5.83317 10.0013 5.83317H10.0096C10.4699 5.83317 10.843 6.20627 10.843 6.6665C10.843 7.12674 10.4699 7.49984 10.0096 7.49984H10.0013C9.54106 7.49984 9.16797 7.12674 9.16797 6.6665ZM8.33464 9.99984C8.33464 9.5396 8.70773 9.1665 9.16797 9.1665H10.0013C10.4615 9.1665 10.8346 9.5396 10.8346 9.99984V12.4998C11.2949 12.4998 11.668 12.8729 11.668 13.3332C11.668 13.7934 11.2949 14.1665 10.8346 14.1665H10.0013C9.54106 14.1665 9.16797 13.7934 9.16797 13.3332V10.8332C8.70773 10.8332 8.33464 10.4601 8.33464 9.99984Z" fill="white"/>
      </svg>
    </div>
    <div class="mt-12 text-[32px] font-medium leading-[120%]">
      N/A
    </div>
  </div>
  <div class="min-w-[140px] border border-white p-4 rounded-[12px]">
    <div class="flex items-center justify-between">
      <div>Active Wallets <span class="opacity-50">24 h</span></div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0013 3.33317C6.3194 3.33317 3.33464 6.31794 3.33464 9.99984C3.33464 13.6817 6.3194 16.6665 10.0013 16.6665C13.6832 16.6665 16.668 13.6817 16.668 9.99984C16.668 6.31794 13.6832 3.33317 10.0013 3.33317ZM1.66797 9.99984C1.66797 5.39746 5.39893 1.6665 10.0013 1.6665C14.6037 1.6665 18.3346 5.39746 18.3346 9.99984C18.3346 14.6022 14.6037 18.3332 10.0013 18.3332C5.39893 18.3332 1.66797 14.6022 1.66797 9.99984ZM9.16797 6.6665C9.16797 6.20627 9.54106 5.83317 10.0013 5.83317H10.0096C10.4699 5.83317 10.843 6.20627 10.843 6.6665C10.843 7.12674 10.4699 7.49984 10.0096 7.49984H10.0013C9.54106 7.49984 9.16797 7.12674 9.16797 6.6665ZM8.33464 9.99984C8.33464 9.5396 8.70773 9.1665 9.16797 9.1665H10.0013C10.4615 9.1665 10.8346 9.5396 10.8346 9.99984V12.4998C11.2949 12.4998 11.668 12.8729 11.668 13.3332C11.668 13.7934 11.2949 14.1665 10.8346 14.1665H10.0013C9.54106 14.1665 9.16797 13.7934 9.16797 13.3332V10.8332C8.70773 10.8332 8.33464 10.4601 8.33464 9.99984Z" fill="white"/>
      </svg>
    </div>
    <div class="flex gap-[64px]">
      <div>
        <div class="opacity-50 font-semibold mt-6">Token</div>
        <div class=" text-[32px] font-medium leading-[120%]">
          { token_price ? moneyFormatter(4).format(token_price) : ''}
        </div>
      </div>
      <div>
        <div class="opacity-50 font-semibold mt-6">NFT</div>
        <div class=" text-[32px] font-medium leading-[120%]">
          N/A
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mt-[48px]">
  <div class="text-[24px] leading-[120%] font-medium">Transaction Activities</div>
  <div class="bg-[#464648] h-[350px] rounded-[12px] mt-[24px]">
  </div>
</div>
<div class="mt-[48px]">
  <div class="text-[24px] leading-[120%] font-medium">Governance Token (VOXEL)</div>
  <div class="bg-[#464648] h-[350px] rounded-[12px] mt-[24px]">
  </div>
</div>