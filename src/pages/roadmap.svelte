<script>
  import { fade } from "svelte/transition";
  let active = "3Q"; // '3Q' | '4Q' | '4Q1Q' | 2Q

  const prev = () => {
    if (active == "2Q") {
      active = "4Q1Q";
    } else if (active === "4Q1Q") {
      active = "4Q";
    } else if (active === "4Q") {
      active = "3Q";
    }
  };

  const next = () => {
    if (active == "3Q") {
      active = "4Q";
    } else if (active === "4Q") {
      active = "4Q1Q";
    } else if (active === "4Q1Q") {
      active = "2Q";
    }
  };
</script>

<div class="mx-auto sm:hidden min-h-[596px] w-full max-w-[1520px] pt-[241px]">
  <div
    class:translate-x-[0%]={active === "3Q"}
    class:md:translate-x-[-20vw]={active === "3Q"}
    class:translate-x-[-30%]={active === "4Q"}
    class:md:translate-x-[-80vw]={active === "4Q"}
    class:translate-x-[-60%]={active === "4Q1Q"}
    class:md:translate-x-[-150vw]={active === "4Q1Q"}
    class:translate-x-[-90%]={active === "2Q"}
    class:md:translate-x-[-200vw]={active === "2Q"}
    class="relative z-[2] transition-transform duration-700"
  >
    <div
      on:click={() => (active = "3Q")}
      class:container-active={active === "3Q"}
      class="container absolute left-0 flex w-[120px] translate-x-[450%] flex-col items-center space-y-6 transition-all"
    >
      <div class:title-active={active === "3Q"} class="title transition-all">
        3Q
      </div>
      <div class:text-active={active === "3Q"} class="text transition-all">
        2024
      </div>
      <div
        class:circle-active={active === "3Q"}
        class="circle transition-all"
      />
    </div>

    <div
      on:click={() => (active = "4Q")}
      class:container-active={active === "4Q"}
      class="container absolute left-0 flex w-[120px] translate-x-[850%] flex-col items-center space-y-6 transition-all"
    >
      <div class:title-active={active === "4Q"} class="title transition-all">
        4Q
      </div>
      <div class:text-active={active === "4Q"} class="text transition-all">
        2024
      </div>
      <div
        class:circle-active={active === "4Q"}
        class="circle transition-all"
      />
    </div>

    <div
      on:click={() => (active = "4Q1Q")}
      class:container-active={active === "4Q1Q"}
      class="container absolute left-0 flex w-[120px] translate-x-[1250%] flex-col items-center space-y-6 transition-all"
    >
      <div class:title-active={active === "4Q1Q"} class="title transition-all">
        4Q-1Q
      </div>
      <div class:text-active={active === "4Q1Q"} class="text transition-all">
        2024-2025
      </div>
      <div
        class:circle-active={active === "4Q1Q"}
        class="circle transition-all"
      />
    </div>

    <div
      on:click={() => (active = "2Q")}
      class:container-active={active === "2Q"}
      class="container absolute left-0 flex w-[120px] translate-x-[1650%] flex-col items-center space-y-6 transition-all"
    >
      <div class:title-active={active === "2Q"} class="title transition-all">
        2Q
      </div>
      <div class:text-active={active === "2Q"} class="text transition-all">
        2025
      </div>
      <div
        class:circle-active={active === "2Q"}
        class="circle transition-all"
      />
    </div>
  </div>
  <div
    class="z-[1] h-[5px] w-[400vw] translate-x-[-100vw] bg-gradient-to-r from-[#FF2600] to-[#F97C0E]"
  ></div>
  <div class="mt-[48px] pl-[72px]">
    {#if active === "3Q"}
      <div in:fade={{ duration: 700 }} class="flex">
        <div class="shrink-0 text-[40px] md:hidden font-medium text-[#37373D]">
          3Q 2024
        </div>
        <div class="ml-[300px] md:ml-0 flex space-x-4">
          <ul class="max-w-[468px] list-disc leading-[150%]">
            <li>Team organization</li>
            <li>Web Resources development</li>
            <li>Social Media development</li>
            <li>Aggregator Gen1 (GameHUB v 1.0) development</li>
            <li>Launching the first original game on BizzonGames</li>
            <li>Integration of Web3 solutions</li>
            <li>Development of first 10 indicators of BizzonGames ranking system</li>
            <li>Release of BizzonGames Platform v 1.0</li>
          </ul>
          <ul class="max-w-[478px] list-disc leading-[150%]">
            <li>Demonstration and popularization of BizzonGames at crypto events</li>
            <li>Seed funding Round start</li>
            <li>Aggregator Gen2 development</li>
            <li>Active community expansion</li>
            <li>Game designers’ partnership activities</li>
            <li>BizzonID system implementation</li>
          </ul>
        </div>
      </div>
    {/if}
    {#if active === "4Q"}
      <div in:fade={{ duration: 700 }} class="flex">
        <div class="shrink-0 text-[40px] md:hidden font-medium text-[#37373D]">
          4Q 2024
        </div>
        <div class="ml-[300px] md:ml-0 flex space-x-4">
          <ul class="max-w-[468px] list-disc leading-[150%]">
            <li>Launch of 2nd and 3rd original games form Bizzon</li>
            <li>Expansion of game devs partnerships</li>
            <li>Bizzon Cross-economy development</li>
            <li>Expanding on-chain support on BizzonGames Platform</li>
            <li>Staking events launch</li>
          </ul>
        </div>
      </div>
    {/if}
    {#if active === "4Q1Q"}
      <div in:fade={{ duration: 700 }} class="flex">
        <div
          class="shrink-0 text-[40px] md:hidden font-medium leading-[140%] text-[#37373D]"
        >
          4Q 2024 <br />
          – 1Q 2025
        </div>
        <div class="ml-[300px] md:ml-0 flex space-x-4">
          <ul class="max-w-[468px] list-disc leading-[150%]">
            <li>Expanding game devs involvement activity</li>
            <li>Aggregator Gen3 upgrades</li>
            <li>New BizzonGames original games launch</li>
            <li>Producing Center active promotion</li>
            <li>Active IDO Launchpad promotion</li>
          </ul>
        </div>
      </div>
    {/if}
    {#if active === "2Q"}
      <div in:fade={{ duration: 700 }} class="flex">
        <div
          class="shrink-0 text-[40px] md:hidden font-medium leading-[140%] text-[#37373D]"
        >
          2Q 2025
        </div>
        <div class="ml-[300px] md:ml-0 flex space-x-4">
          <ul class="max-w-[468px] list-disc leading-[150%]">
            <li>BizzonGames NFT collection development</li>
            <li>BizzonID system improvements</li>
            <li>Producing Center complete business activity</li>
            <li>IDO Launchpad active listing phase</li>
          </ul>
        </div>
      </div>
    {/if}
  </div>
</div>
<div class="mt-10 sm:hidden flex justify-center gap-9">
  <button
    disabled={active === "3Q"}
    class:text-[#414141]={active === "3Q"}
    class="anim-btn"
    on:click={prev}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29.1213 21.8787C27.9497 20.7071 26.0503 20.7071 24.8787 21.8787L12.8787 33.8787C11.7071 35.0503 11.7071 36.9497 12.8787 38.1213L24.8787 50.1213C26.0503 51.2929 27.9497 51.2929 29.1213 50.1213C30.2929 48.9497 30.2929 47.0503 29.1213 45.8787L22.2426 39H57C58.6569 39 60 37.6569 60 36C60 34.3431 58.6569 33 57 33H22.2426L29.1213 26.1213C30.2929 24.9497 30.2929 23.0503 29.1213 21.8787Z"
        fill="currentColor"
      />
    </svg>
  </button>
  <button
    disabled={active === "2Q"}
    class:text-[#414141]={active === "2Q"}
    class="anim-btn"
    on:click={next}
  >
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.8787 21.8787C44.0503 20.7071 45.9497 20.7071 47.1213 21.8787L59.1213 33.8787C60.2929 35.0503 60.2929 36.9497 59.1213 38.1213L47.1213 50.1213C45.9497 51.2929 44.0503 51.2929 42.8787 50.1213C41.7071 48.9497 41.7071 47.0503 42.8787 45.8787L49.7574 39H15C13.3431 39 12 37.6569 12 36C12 34.3431 13.3431 33 15 33H49.7574L42.8787 26.1213C41.7071 24.9497 41.7071 23.0503 42.8787 21.8787Z"
        fill="currentColor"
      />
    </svg>
  </button>
</div>
<!-- mobile -->
<div class="hidden sm:flex">
  <div class="w-[4px] bg-[#FF2600] shrink-0 relative">
    <div class="w-[32px] h-[32px] bg-white rounded-full absolute left-[-350%] top-[54px]" />
  </div>
  <div class="ml-7 mt-[58px]">
    <div class="text-[24px] leading-[120%] font-medium">
      3Q <span class="text-[16px] ml-1">2024</span>
    </div>
    <ul class="text-[#888888] list-disc pl-6 mt-6">
      <li>Team organization</li>
      <li>Web Resources development</li>
      <li>Social Media development</li>
      <li>Aggregator Gen1 (GameHUB v 1.0) development</li>
      <li>Launching the first original game on BizzonGames</li>
      <li>Integration of Web3 solutions</li>
      <li>Development of first 10 indicators of BizzonGames ranking system</li>
      <li>Release of BizzonGames Platform v 1.0</li>
      <li>Demonstration and popularization of BizzonGames at crypto events</li>
      <li>Seed funding Round start</li>
      <li>Aggregator Gen2 development</li>
      <li>Active community expansion</li>
      <li>Game designers’ partnership activities</li>
      <li>BizzonID system implementation</li>
    </ul>
  </div>
</div>
<div class="hidden sm:flex">
  <div class="w-[4px] bg-[#FF2600] shrink-0 relative">
    <div class="w-[32px] h-[32px] bg-white rounded-full absolute left-[-350%] top-[34px]" />
  </div>
  <div class="ml-7 mt-[38px]">
    <div class="text-[24px] leading-[120%] font-medium">
      4Q <span class="text-[16px] ml-1">2024</span>
    </div>
    <ul class="text-[#888888] list-disc pl-6 mt-6">
      <li>Launch of 2nd and 3rd original games form Bizzon</li>
      <li>Expansion of game devs partnerships</li>
      <li>Bizzon Cross-economy development</li>
      <li>Expanding on-chain support on BizzonGames Platform</li>
      <li>Staking events launch</li>
    </ul>
  </div>
</div>
<div class="hidden sm:flex">
  <div class="w-[4px] bg-[#FF2600] shrink-0 relative">
    <div class="w-[32px] h-[32px] bg-white rounded-full absolute left-[-350%] top-[34px]" />
  </div>
  <div class="ml-7 mt-[38px]">
    <div class="text-[24px] leading-[120%] font-medium">
      4Q-1Q <span class="text-[16px] ml-1">2024-2025</span>
    </div>
    <ul class="text-[#888888] list-disc pl-6 mt-6">
      <li>Expanding game devs involvement activity</li>
      <li>Aggregator Gen3 upgrades</li>
      <li>New BizzonGames original games launch</li>
      <li>Producing Center active promotion</li>
      <li>Active IDO Launchpad promotion</li>
    </ul>
  </div>
</div>
<div class="hidden sm:flex">
  <div class="w-[4px] bg-[#FF2600] shrink-0 relative">
    <div class="w-[32px] h-[32px] bg-white rounded-full absolute left-[-350%] top-[34px]" />
  </div>
  <div class="ml-7 mt-[38px] pb-4">
    <div class="text-[24px] leading-[120%] font-medium">
      2Q <span class="text-[16px] ml-1">2025</span>
    </div>
    <ul class="text-[#888888] list-disc pl-6 mt-6">
      <li>BizzonGames NFT collection development</li>
      <li>BizzonID system improvements</li>
      <li>Producing Center complete business activity</li>
      <li>IDO Launchpad active listing phase</li>
    </ul>
  </div>
</div>

<style>
  .title {
    @apply text-[24px] font-medium leading-[120%] text-[#37373D];
  }
  .title-active {
    @apply text-[32px] font-medium leading-[120%] text-white;
  }
  .text {
    @apply font-semibold text-[#37373D];
  }
  .text-active {
    @apply font-semibold text-white;
  }
  .container {
    @apply bottom-[-10px];
  }
  .container-active {
    @apply bottom-[-17px];
  }
  .circle {
    @apply h-[16px] w-[16px] rounded-full bg-white;
  }
  .circle-active {
    @apply h-[32px] w-[32px] rounded-full bg-white;
  }
</style>
