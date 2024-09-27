<script>
export let radio = 'project-listed-no'

export let aggregator_name = ''
</script>

<div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[12px]">
  <label class="font-semibold">
    Is your project listed on aggregators
    <span class="text-[#FA5252]">*</span>
  </label>
  <div class="flex flex-col gap-3 mt-3">
    <div class="inline-flex gap-2 items-center select-none">
      <label class="relative flex items-center cursor-pointer" for="project-listed-yes">
        <input
          value="project-listed-yes"
          bind:group={radio}
          type="radio"
          class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
          id="project-listed-yes"
        />
        <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      </label>
      <label class="cursor-pointer" for="project-listed-yes">
        Yes
      </label>
    </div>
    <div class="inline-flex gap-2 items-center select-none">
      <label class="relative flex items-center cursor-pointer" for="project-listed-no">
        <input
          bind:group={radio}
          value="project-listed-no"
          name="color"
          type="radio"
          class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
          id="project-listed-no"
        />
        <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      </label>
      <label class="cursor-pointer" for="project-listed-no">
        No
      </label>
    </div>
  </div>
</div>

{#if radio === 'project-listed-yes'}
  <!-- aggregator-name -->
  <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[20px]">
    <label for="aggregator-name">
      Please specify which aggregators
      <span class="text-[#FA5252]">*</span>
    </label>
    <input bind:value={aggregator_name} type="text" id="aggregator-name" required class="my-input mt-[6px]" placeholder="Aggregator name">
  </div>
{/if}


<style>
  .my-input {
    @apply px-4 py-[14px] rounded-[12px] placeholder:text-[#888888] bg-[#141414] border border-[#323234] hover:outline-none
  }
</style>