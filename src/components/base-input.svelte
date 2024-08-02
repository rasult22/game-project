<script>
  export let error = false;
  export let value = ''
</script>

<div class="relative">
  <input
    bind:value={value}
    type="text"
    id="floating_filled"
    class:border-red-500={error}
    class="block bg-transparent border focus:outline-none focus:border-white placeholder:text-[#888888] border-[#888] py-[14px] px-3 rounded-[12px] appearance-none peer"
    placeholder=" "
  />
  <label
    for="floating_filled"
    class:text-red-500={error}
    class="absolute text-[#888888] duration-300 transform -translate-y-4 scale-0 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-0 peer-focus:-translate-y-4"
  >
    Text
    <span class="text-red-500">*</span>
  </label>
  {#if error}
    <div class="text-red-500 text-[14px] px-3 mt-1">Error</div>
  {/if}
</div>
