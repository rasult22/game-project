<script>
  let radio = 'token-no'
</script>
<div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[12px]">
  <label class="font-semibold">
    Is there an issued token (coin)?
    <span class="text-[#FA5252]">*</span>
  </label>
  <div class="flex flex-col gap-3 mt-3">
    <div class="inline-flex gap-2 items-center select-none">
      <label class="relative flex items-center cursor-pointer" for="token-yes">
        <input
          bind:group={radio}
          value="token-yes"
          type="radio"
          class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
          id="token-yes"
        />
        <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      </label>
      <label class="cursor-pointer" for="token-yes">
        Yes
      </label>
    </div>
    <div class="inline-flex gap-2 items-center select-none">
      <label class="relative flex items-center cursor-pointer" for="token-no">
        <input
          bind:group={radio}
          value="token-no"
          type="radio"
          class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
          id="token-no"
        />
        <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      </label>
      <label class="cursor-pointer" for="token-no">
        No
      </label>
    </div>
  </div>
</div>

{#if radio === 'token-yes'}
  <!-- network-issuance -->
  <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[20px]">
    <label for="network-issuance">
      Network of Issuance
      <span class="text-[#FA5252]">*</span>
    </label>
    <input type="text" id="network-issuance" required class="my-input mt-[6px]" placeholder="Enter Network">
  </div>

  <!-- token-ticker -->
  <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[20px]">
    <label for="token-ticker">
      Token Ticker
      <span class="text-[#FA5252]">*</span>
    </label>
    <input type="text" id="token-ticker" required class="my-input mt-[6px]" placeholder="Enter token ticker">
  </div>
  <!-- contract-address -->
  <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[20px]">
    <label for="contract-address">
      Contract Address
      <span class="text-[#FA5252]">*</span>
    </label>
    <input type="text" id="contract-address" required class="my-input mt-[6px]" placeholder="Enter contract adress">
  </div>
{/if}
<style>
  .my-input {
    @apply px-4 py-[14px] rounded-[12px] placeholder:text-[#888888] bg-[#141414] border border-[#323234] hover:outline-none
  }
</style>