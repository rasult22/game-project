<script>
  export let active = false
</script>
<button class="chip space-x-[6px] text-[14px]" class:chip-active={active}>
  <span>
    <slot name="text">
      TON
    </slot>
  </span>
</button>

<style>
  .chip {
    @apply border py-2 px-[10px] rounded-[12px] flex active:bg-white active:text-black active:scale-95 transition-all;
  }
  .chip-active {
    @apply border py-2 px-[10px] rounded-[12px] flex bg-white text-black active:scale-95 transition-all;
  }
</style>