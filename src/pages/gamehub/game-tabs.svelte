<script>
  export let game_id
  import OverviewTab from "./tabs/OverviewTab.svelte";
	import OverviewTabClient from './tabs/OverviewTabClient.svelte';
  import AboutTab from "./tabs/AboutTab.svelte";
  import OcpTab from "./tabs/OCPTab.svelte";
  import SlTab from "./tabs/SLTab.svelte";

  export let game

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
    // {
    //   name: 'On-Chain Perfomance',
    //   key: 'ocp'
    // },
    {
      name: 'Social Level',
      key: 'sl'
    },
  ]
</script>

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
    {#if game.isNewFormat}
      <OverviewTabClient erase_venture={game.erase_venture} white_paper_link={game.white_paper_link} game_id={game.id} token_name={game.game_info.token_name} sale_exchanges={game.game_info.sale_exchanges} team_profile={game.team_profile} backedBy={game.game_info.backed_by}/>
    {:else}
      <OverviewTab game_id={game.id} sale_exchanges={game.game_info.sale_exchanges} team_profile={game.team_profile} on_chain_performance={game.on_chain_performance.data} backedBy={game.game_info.backed_by} />
    {/if}
  {/if}
  {#if activeTab === 'about'}
    <AboutTab data={game.about} />
  {/if}
  {#if activeTab === 'ocp'}
    <OcpTab on_chain_performance={game.on_chain_performance.data} />
  {/if}
  {#if activeTab === 'sl'}
    <SlTab is_demo={!game.isNewFormat} social_data={game.social_data} />
  {/if}
</div>