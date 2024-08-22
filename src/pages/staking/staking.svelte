<script>
  import { fade } from "svelte/transition";

  let tab = "staking";
</script>

<div class="flex space-x-4">
  <a
    on:click|preventDefault={() => (tab = "staking")}
    class:border-b-2={tab === "staking"}
    class="pb-[5px] cursor-pointer">Staking</a
  >
  <a
    on:click|preventDefault={() => (tab = "ratings")}
    class:border-b-2={tab === "ratings"}
    class="pb-[5px] cursor-pointer">Staker Ratings</a
  >
</div>

{#if tab === "staking"}
  <div in:fade class="font-Oxanium mt-[50px] sm:bg-[#28282C] sm:space-y-6 sm:p-4 sm:-mx-4 flex sm:flex-wrap ">
    <div>
      <div class="flex items-center gap-1">
        <span class="font-medium"> Round ends </span>
        <div class="relative group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0013 3.33317C6.3194 3.33317 3.33464 6.31794 3.33464 9.99984C3.33464 13.6817 6.3194 16.6665 10.0013 16.6665C13.6832 16.6665 16.668 13.6817 16.668 9.99984C16.668 6.31794 13.6832 3.33317 10.0013 3.33317ZM1.66797 9.99984C1.66797 5.39746 5.39893 1.6665 10.0013 1.6665C14.6037 1.6665 18.3346 5.39746 18.3346 9.99984C18.3346 14.6022 14.6037 18.3332 10.0013 18.3332C5.39893 18.3332 1.66797 14.6022 1.66797 9.99984ZM9.16797 6.6665C9.16797 6.20627 9.54106 5.83317 10.0013 5.83317H10.0096C10.4699 5.83317 10.843 6.20627 10.843 6.6665C10.843 7.12674 10.4699 7.49984 10.0096 7.49984H10.0013C9.54106 7.49984 9.16797 7.12674 9.16797 6.6665ZM8.33464 9.99984C8.33464 9.5396 8.70773 9.1665 9.16797 9.1665H10.0013C10.4615 9.1665 10.8346 9.5396 10.8346 9.99984V12.4998C11.2949 12.4998 11.668 12.8729 11.668 13.3332C11.668 13.7934 11.2949 14.1665 10.8346 14.1665H10.0013C9.54106 14.1665 9.16797 13.7934 9.16797 13.3332V10.8332C8.70773 10.8332 8.33464 10.4601 8.33464 9.99984Z"
              fill="white"
              fill-opacity="0.5"
            />
          </svg>
          <div in:fade class="absolute transition-all rounded-[12px] hidden group-hover:block top-10 left- bg-[#252E37] w-[200px] p-4">
            You can only buy one steak per 24 hours
          </div>
        </div>
      </div>
      <div class="text-[32px] md:text-[24px] sm:text-[24px] font-medium mt-3">— : — : —</div>
    </div>
    <div class="ml-[70px] sm:w-full sm:ml-0">
      <div class="flex items-center gap-1">
        <span class="font-medium"> Staking pool </span>
      </div>
      <div class="text-[32px] md:text-[24px] sm:text-[24px] font-medium mt-3 flex items-center gap-4 md:gap-2 sm:gap-2">
        <img class="md:w-[24px] sm:w-[24px]" width="48" src="/media/staking.svg" alt="" />
        <span>1.200.000 / 1.200.000</span>
      </div>
    </div>
    <div class="ml-[70px] sm:ml-0 sm:w-full">
      <div class="flex items-center gap-1">
        <span class="font-medium"> Your staking rank </span>
      </div>
      <div class="text-[32px] md:text-[24px] sm:text-[24px] font-medium mt-2">–</div>
    </div>
  </div>

  <div in:fade class="flex sm:flex-col sm:items-center sm:ml-0 -ml-9 sm:space-x-0 -space-x-9 mt-[45px]">
    <img
      width="320"
      class="max-w-[320px] sm:max-w-none sm:w-full md:max-w-[215px] hover:scale-105 active:scale-[0.99] transition-all cursor-pointer"
      src="/optimized/common-box.webp"
      alt=""
    />
    <img
      width="320"
      class="max-w-[320px] sm:max-w-none sm:w-full md:max-w-[215px] hover:scale-105 active:scale-[0.99] transition-all cursor-pointer"
      src="/optimized/epic-box.webp"
      alt=""
    />
    <img
      width="320"
      class="max-w-[320px] sm:max-w-none sm:w-full md:max-w-[215px] hover:scale-105 active:scale-[0.99] transition-all cursor-pointer"
      src="/optimized/legendary-box.webp"
      alt=""
    />
  </div>
{/if}

{#if tab === "ratings"}
  <div in:fade class="mt-[50px]">
    <div
      class="grid border-b border-[#787575] mb-4 text-center grid-cols-5 sm:grid-cols-3 items-center py-2 text-sm group d"
    >
      <div class="col-span-2 flex space-x-[36px]">
        <div class="text-left text-[#787575]">Rank</div>
        <div class="text-left">Metamask Name</div>
      </div>
      <div class="sm:hidden">Stake Name</div>
      <div class="sm:hidden">Staking Points</div>
      <div>Rewards</div>
    </div>
    {#each {length: 3} as i, index}
      <div class="grid border-b border-[#787575] grid-cols-5 sm:grid-cols-3 items-center py-2 text-sm group d">
        <div class="col-span-2 flex items-center gap-[24px]">
          <span class="w-14 text-left">
            <span class="text-[#787575]">{index + 1}</span>
          </span>
          <div class="flex items-center space-x-4">
            <img width="50" src="/optimized/metamask-icon.webp" alt="">
            <span class="font-semibold">–</span>
          </div>
        </div>
        <div class="text-center sm:hidden">
          <span>–</span>
        </div>
        <div class="text-center sm:hidden">
          <span>–</span>
        </div>
        <div class="text-center">
          <span>–</span>
        </div>
      </div>
    {/each}
  </div>
  <div in:fade class="text-[96px] md:text-[64px] sm:text-[40px] opacity-55 uppercase font-Oxanium flex items-center justify-center mt-[200px]">
    Coming soon...
  </div>
{/if}
