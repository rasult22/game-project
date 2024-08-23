<script>
  import GbIcon from './gb-icon.svelte'
  import RuIcon from './ru-icon.svelte'
  import ContentEn from './content-en.svelte';
	import ContentRu from './content-ru.svelte';
  import { fade } from 'svelte/transition';

let active = 'EN'
</script>


<!-- Lang selector -->
<div class="flex">
  <div class="bg-[#2A2A2A] flex rounded-[14px] p-1">
    <div on:click={() => active ='EN'} class:active={active === 'EN'} class="flex justify-center items-center gap-2 cursor-pointer transition-all rounded-[12px] w-[125px] py-[10px]">
      <GbIcon />
      <span>
        EN
      </span>
    </div>
    <div on:click={() => active ='RU'} class:active={active === 'RU'} class="flex justify-center items-center gap-2 cursor-pointer transition-all rounded-[12px] w-[125px] py-[10px]">
      <RuIcon />
      <span>
        RU
      </span>
    </div>
  </div>
</div>

{#if active === 'EN'}
  <div in:fade>
    <ContentEn />
  </div>
{:else}
  <div in:fade>
    <ContentRu />
  </div>
{/if}

<style>
  .active {
    @apply bg-white text-[#2A2A2A] 
  }
</style>