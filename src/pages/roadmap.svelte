<script>
	import { fade } from 'svelte/transition';
let active = '3Q' // '3Q' | '4Q' | '4Q1Q' | 2Q

const prev = () => {
  if (active == '2Q') {
    active = '4Q1Q'
  } else if (active==='4Q1Q') {
    active = '4Q'
  } else if (active==='4Q') {
    active = '3Q'
  }
}

const next = () => {
  if (active == '3Q') {
    active = '4Q'
  } else if (active==='4Q') {
    active = '4Q1Q'
  } else if (active==='4Q1Q') {
    active = '2Q'
  }
}
</script>

<div class="min-h-[596px] max-w-[1520px] mx-auto w-full pt-[241px]">
  <div 
  class:translate-x-[0%]={active==='3Q'}
  class:translate-x-[-30%]={active==='4Q'}
  class:translate-x-[-60%]={active==='4Q1Q'} 
  class:translate-x-[-90%]={active==='2Q'} 
  class="relative z-[2] transition-transform duration-700">
    <div on:click={() => active = '3Q'} class:container-active={active==='3Q'} class="container transition-all absolute left-0 translate-x-[450%]  space-y-6 flex flex-col items-center w-[120px]">
      <div class:title-active={active==='3Q'} class="title transition-all">
        3Q
      </div>
      <div class:text-active={active==='3Q'} class="text transition-all">
        2024
      </div>
      <div class:circle-active={active==='3Q'} class="circle transition-all"/>
    </div>

    <div on:click={() => active = '4Q'} class:container-active={active==='4Q'} class="container transition-all absolute left-0 translate-x-[850%]  space-y-6 flex flex-col items-center w-[120px]">
      <div class:title-active={active==='4Q'} class="title transition-all">
        4Q
      </div>
      <div class:text-active={active==='4Q'} class="text transition-all">
        2024
      </div>
      <div class:circle-active={active==='4Q'} class="circle transition-all"/>
    </div>

    <div on:click={() => active = '4Q1Q'} class:container-active={active==='4Q1Q'} class="container transition-all absolute left-0 translate-x-[1250%]  space-y-6 flex flex-col items-center w-[120px]">
      <div class:title-active={active==='4Q1Q'} class="title transition-all">
        4Q-1Q
      </div>
      <div class:text-active={active==='4Q1Q'} class="text transition-all">
        2024-2025
      </div>
      <div class:circle-active={active==='4Q1Q'} class="circle transition-all"/>
    </div>

    <div on:click={() => active = '2Q'} class:container-active={active==='2Q'} class="container transition-all absolute left-0 translate-x-[1650%]  space-y-6 flex flex-col items-center w-[120px]">
      <div class:title-active={active==='2Q'} class="title transition-all">
        2Q
      </div>
      <div class:text-active={active==='2Q'} class="text transition-all">
        2025
      </div>
      <div class:circle-active={active==='2Q'} class="circle transition-all"/>
    </div>
  </div>
  <div class="h-[5px] z-[1] w-[400vw] translate-x-[-100vw] bg-gradient-to-r from-[#FF2600] to-[#F97C0E]">
  </div>
  <div class="mt-[48px] pl-[72px]">
    {#if active === '3Q'}
      <div in:fade={{duration: 700}} class="flex">
        <div class="text-[40px] shrink-0 font-medium text-[#37373D]">
          3Q 2024
        </div>
        <div class="ml-[300px] flex space-x-4">
          <ul class="leading-[150%] max-w-[468px] list-disc">
            <li>Team organization</li>
            <li>Web development</li>
            <li>Social Media Resources</li>
            <li>Aggregator (GameHUB Gen 1)</li>
            <li>Development of the first BIZZON Games game</li>
            <li>Integration of MM TW SP C98 wallet development </li>
            <li>Prototyping of 9 ranked ranking rendition system</li>
            <li>Release of the first beta version of the BIZZON Games</li>
          </ul>
          <ul class="leading-[150%] max-w-[478px] list-disc">
            <li>Private demo of BIZZON beta at cryptocurrency conference</li>
            <li>Initial funding round</li>
            <li>Aggregator (GameHUB Gen 2)</li>
            <li>Active community development</li>
            <li>Preparation of game product from AI project partner (Beta Quest to earn)</li>
            <li>BIZZON STATION partnership with game projects</li>
            <li>BIZZON ID system (Basiс)</li>
          </ul>
        </div>
      </div>
    {/if}
    {#if active === '4Q'}
      <div in:fade={{duration: 700}} class="flex">
        <div class="text-[40px] shrink-0 font-medium text-[#37373D]">
          4Q 2024
        </div>
        <div class="ml-[300px] flex space-x-4">
          <ul class="leading-[150%] max-w-[468px] list-disc">
            <li>BIZZON Open Minnet</li>
            <li>Integration for Gen v2.0 wallet development</li>
            <li>Game product demo from AI project partner</li>
            <li>Official launch of the first game from BIZZON Games</li>
            <li>cross-chain technology development</li>
            <li>Support for 3 chains (TON / BSC / ERC / SOL)</li>
            <li>Staking</li>
          </ul>
          <ul class="leading-[150%] max-w-[478px] list-disc">
            <li>Active involvement of crypto game developers</li>
            <li>Aggregator (GameHUB Gen 3)</li>
            <li>Improvement of the ranking system prototype</li>
            <li>Development of BIZZON Games' second game (#2)</li>
            <li>Start of development of revolutionary cross-economy of BIZZON Games games</li>
          </ul>
        </div>
      </div>
    {/if}
    {#if active === '4Q1Q'}
      <div in:fade={{duration: 700}} class="flex">
        <div class="text-[40px] shrink-0 font-medium leading-[140%] text-[#37373D]">
          4Q 2024 <br/>
          – 1Q 2025
        </div>
        <div class="ml-[300px] flex space-x-4">
          <ul class="leading-[150%] max-w-[468px] list-disc">
            <li>EARN</li>
            <li>New UI/UX Ver2</li>
            <li>Active attraction of gold influencers</li>
            <li>Launch of Private/Pre-sale rounds</li>
            <li>Steaking Event 1.0 (Limited Steaking)</li>
            <li>Launch of beta test of the second game BIZZON Games</li>
            <li>Beta testing of BIZZON Games' revolutionary cross-economy games</li>
          </ul>
          <ul class="leading-[150%] max-w-[478px] list-disc">
            <li>BIZZON ID system (Creation of NFT collection of commons, epics, legendaries)</li>
            <li>Release of the first NFT BIZZON collection</li>
          </ul>
        </div>
      </div>
    {/if}
    {#if active === '2Q'}
      <div in:fade={{duration: 700}} class="flex">
        <div class="text-[40px] shrink-0 font-medium leading-[140%] text-[#37373D]">
          2Q 2025
        </div>
        <div class="ml-[300px] flex space-x-4">
          <ul class="leading-[150%] max-w-[468px] list-disc">
            <li>BIZZON Games #2 open mynet</li>
            <li>Development of BIZZON Games #3 (a revolutionary game that combines genres: Tower defense, Strategy with RPG elements)</li>
            <li>Scaling up the BIZZON team</li>
            <li>BIZZON Games cross-economy launch</li>
            <li>Roadmap v 2.0</li>
          </ul>
        </div>
      </div>
    {/if}
  </div>
</div>
<div class="flex justify-center mt-10 gap-9">
  <button disabled={active === '3Q'} class:text-[#414141]={active === '3Q'} class="anim-btn" on:click={prev}>
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M29.1213 21.8787C27.9497 20.7071 26.0503 20.7071 24.8787 21.8787L12.8787 33.8787C11.7071 35.0503 11.7071 36.9497 12.8787 38.1213L24.8787 50.1213C26.0503 51.2929 27.9497 51.2929 29.1213 50.1213C30.2929 48.9497 30.2929 47.0503 29.1213 45.8787L22.2426 39H57C58.6569 39 60 37.6569 60 36C60 34.3431 58.6569 33 57 33H22.2426L29.1213 26.1213C30.2929 24.9497 30.2929 23.0503 29.1213 21.8787Z" fill="currentColor"/>
    </svg>
  </button>
  <button disabled={active === '2Q'}  class:text-[#414141]={active === '2Q'} class="anim-btn" on:click={next}>
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8787 21.8787C44.0503 20.7071 45.9497 20.7071 47.1213 21.8787L59.1213 33.8787C60.2929 35.0503 60.2929 36.9497 59.1213 38.1213L47.1213 50.1213C45.9497 51.2929 44.0503 51.2929 42.8787 50.1213C41.7071 48.9497 41.7071 47.0503 42.8787 45.8787L49.7574 39H15C13.3431 39 12 37.6569 12 36C12 34.3431 13.3431 33 15 33H49.7574L42.8787 26.1213C41.7071 24.9497 41.7071 23.0503 42.8787 21.8787Z" fill="currentColor"/>
    </svg>
  </button>
</div>
<style>
  .title {
    @apply text-[#37373D] text-[24px] font-medium leading-[120%];
  }
  .title-active {
    @apply text-white text-[32px] font-medium leading-[120%];
  }
  .text {
    @apply text-[#37373D] font-semibold
  }
  .text-active {
    @apply text-white font-semibold
  }
  .container {
    @apply bottom-[-10px];
  }
  .container-active {
    @apply bottom-[-17px];
  }
  .circle {
    @apply w-[16px] h-[16px] bg-white rounded-full;    
  }
  .circle-active {
    @apply w-[32px] h-[32px] bg-white rounded-full;    
  }
</style>