 <script>
  export let radio = 'traded-no'

  export let exchange_name = ''
 </script>
 <!-- traded cex/dex -->
 <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[12px]">
  <label class="font-semibold">
    Is it traded on CEX/DEX
    <span class="text-[#FA5252]">*</span>
  </label>
  <div class="flex flex-col gap-3 mt-3">
    <div class="inline-flex gap-2 items-center select-none">
      <label class="relative flex items-center cursor-pointer" for="traded-yes">
        <input
          bind:group={radio}
          checked
          value="traded-yes"
          type="radio"
          class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
          id="traded-yes"
        />
        <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      </label>
      <label class="cursor-pointer" for="traded-yes">
        Yes
      </label>
    </div>
    <div class="inline-flex gap-2 items-center select-none">
      <label class="relative flex items-center cursor-pointer" for="traded-no">
        <input
          bind:group={radio}
          value="traded-no"
          type="radio"
          class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
          id="traded-no"
        />
        <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      </label>
      <label class="cursor-pointer" for="traded-no">
        No
      </label>
    </div>
  </div>
</div>

{#if radio === 'traded-yes'}
  <!-- exchange-name -->
  <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[20px]">
    <label for="contract-address">
      Please specify where it is traded
      <span class="text-[#FA5252]">*</span>
    </label>
    <input bind:value={exchange_name} type="text" id="exchange-name" required class="my-input mt-[6px]" placeholder="Exchange name">
  </div>
{/if}

<style>
  .my-input {
    @apply px-4 py-[14px] rounded-[12px] placeholder:text-[#888888] bg-[#141414] border border-[#323234] hover:outline-none
  }
</style>