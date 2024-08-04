<script>
  export let error = false;
  export let value = '';
  export let placeholder = 'Text'
  export let id = 'floating_filled'
  export let required = false
</script>

<div class="relative w-full">
  <input
    bind:value={value}
    required={required}
    type="text"
    id={id}
    class:border-red-500={error}
    class="w-full block bg-transparent border focus:outline-none focus:border-white placeholder:text-[#888888] border-[#888] py-[14px] px-3 rounded-[12px] appearance-none peer"
    placeholder=" "
  />
  <label
    for={id}
    class:text-red-500={error}
    class="absolute text-[#888888] duration-300 transform -translate-y-4 scale-0 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-0 peer-focus:-translate-y-4"
  >
    {placeholder}
    {#if required}
      <span class="text-red-500">*</span>
    {/if}
  </label>
  {#if error}
    <div class="text-red-500 text-[14px] px-3 mt-1">Error</div>
  {/if}
</div>
