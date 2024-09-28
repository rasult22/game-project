<script>
  const status_list = [
    {
      value: 'alpha-beta',
      name: 'Alpha/Beta'
    },
    {
      value: 'soft-launch',
      name: 'Soft Launch'
    },
    {
      value: 'live',
      name: 'Live'
    },
    {
      value: 'maintenance',
      name: 'Maintenance'
    },
  ]

  export let active_status = {
    value: 'alpha-beta',
    name: 'Alpha/Beta'
  }
</script>
<div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
  <label>
    Project Status
    <span class="text-[#FA5252]">*</span>
  </label>
  <div class="flex sm:flex-wrap gap-3 mt-3">
    {#each status_list as status (status.value)}
      <div class="inline-flex gap-2 items-center select-none">
        <label class="relative flex items-center cursor-pointer" for={status.value}>
          <input
            bind:group={active_status.value}
            value={status.value}
            name="status"
            type="radio"
            class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
            id={status.value}
          />
          <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label class="cursor-pointer" for={status.value}>
          {status.name}
        </label>
      </div>
    {/each}
  </div>
</div>