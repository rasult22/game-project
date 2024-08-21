<script>
  export let active = false
</script>
<button on:click class="chip space-x-[6px] text-[14px]" class:chip-active={active}>
  <slot name="img">
    <img src="/media/ton-icon.svg" alt="">
  </slot>
  <span>
    <slot name="text">
      TON
    </slot>
  </span>
</button>

<style>
  .chip {
    @apply border border-[#464648] px-2 py-[6px] rounded-[12px] flex items-center active:bg-white active:text-black active:scale-95 transition-all;
  }
  .chip-active {
    @apply border border-[#464648] px-2 py-[6px] rounded-[12px] flex bg-white text-black active:scale-95 transition-all;
  }
</style>