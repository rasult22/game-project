<script>
	import BaseChip from './base-chip.svelte';
  let items = [
    {
      name: 'Android',
      key: 'android'
    },
    {
      name: 'iOS',
      key: 'ios'
    },
    {
      name: 'WEB',
      key: 'web'
    },
    {
      name: 'PC',
      key: 'pc'
    },
  ]
  let open = true
</script>
<div class="max-w-[500px] border-b pb-4 select-none">
  <div on:click={() => open = !open} class="flex justify-between cursor-pointer">
    <div class="text-[16px] font-semibold">Device</div>
    <svg class:rotate-180={!open} class="transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L12 13.5858L6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L11.2929 15.7071Z" fill="white"/>
    </svg>
  </div>
  {#if open}
    <div class="flex gap-[10px] flex-wrap pt-4">
      {#each items as item (item.key) }
        <BaseChip active={false}>
          <span slot="text">
            {item.name}
          </span>
        </BaseChip>
      {/each}
    </div>
  {/if}
</div>