<script lang="ts">
  import OverviewTabClient from "./tabs/OverviewTabClient.svelte";
  import AboutTab from "./tabs/AboutTab.svelte";
  import OcpTab from "./tabs/OCPTab.svelte";
  import SlTab from "./tabs/SLTab.svelte";
  import type { ProjectExtended } from "~/services";

  export let game: ProjectExtended;

  let activeTab = "overview";
  const tabs = [
    {
      name: "Overview",
      key: "overview",
    },
    {
      name: "About",
      key: "about",
    },
    // {
    //   name: 'On-Chain Perfomance',
    //   key: 'ocp'
    // },
    {
      name: "Social Level",
      key: "sl",
    },
  ];
</script>

<div class="flex">
  <div class="flex space-x-6 border-b border-[#464648] leading-[150%]">
    {#each tabs as tab (tab.key)}
      <button
        on:click={() => {
          activeTab = tab.key;
        }}
        class:border-white={tab.key === activeTab}
        class="border-b-2 border-transparent pb-[5px] transition-all"
      >
        {tab.name}
      </button>
    {/each}
  </div>
</div>

<div class="mt-9">
  {#if activeTab === "overview"}
      <OverviewTabClient
        erase_venture={true}
        white_paper_link={game.whitepaper?.external_link || game.whitepaper?.pdf_url}
        game_id={game.id}
        game={game}
        analytics_id={'none'}
        token_name={game.token_info?.contract_address}
        sale_exchanges={game.token_info?.exchange_names}
        team_profile={game.team_members}
        backedBy={[]}
      />
  {/if}
  {#if activeTab === "about"}
    <AboutTab data={game.about} />
  {/if}
  {#if activeTab === "ocp"}
    <!-- <OcpTab on_chain_performance={game.on_chain_performance.data} /> -->
  {/if}
  {#if activeTab === "sl"}
    <!-- <SlTab is_demo={!game.isNewFormat} social_data={game.social_data} /> -->
  {/if}
</div>
