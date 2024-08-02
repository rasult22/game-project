<script>
  export let active = 'investor'
  let options = [
    {
      key: 'investor',
      val: `I'm an investor`
    },
    {
      key: 'dev_team',
      val: `We’re developers`
    }
  ]
</script>
<div class="flex bg-[#1B1B1B] rounded-[14px] p-1">
  {#each options as op}
    <button class:btn-tab-active={op.key === active} on:click={() => active = op.key} class="btn-tab">
      {op.val}
    </button>
  {/each}
</div>

<style>
  .btn-tab {
    @apply py-[10px] px-[24px] bg-[transparent] text-[#888888] rounded-[12px] transition-all;
  }
  .btn-tab-active {
    @apply py-[10px] px-[24px] bg-[#FFF] text-black rounded-[12px];
  }
</style>