<script>
  export let game_id
  import OverviewTab from "./OverviewTab.svelte";
  import AboutTab from "./AboutTab.svelte";

  let activeTab = 'overview'
  const tabs = [
    {
      name: 'Overview',
      key: 'overview'
    },
    {
      name: 'About',
      key: 'about'
    },
    {
      name: 'On-Chain Perfomance',
      key: 'ocp'
    },
    {
      name: 'Social Level',
      key: 'sl'
    },
  ]
</script>

<b>{game_id}</b>

<div class="flex">
  <div class="border-b border-[#464648] leading-[150%] flex space-x-6">
    {#each tabs as tab (tab.key)}
      <button on:click={() => {
        activeTab = tab.key
      }} class:border-white={tab.key === activeTab} class="border-b-2 transition-all pb-[5px] border-transparent">
        {tab.name}
      </button>
    {/each}
  </div>
</div>

<div class="mt-9">
  {#if activeTab === 'overview'}
    <OverviewTab />
  {/if}
  {#if activeTab === 'about'}
    <AboutTab />
  {/if}
</div>