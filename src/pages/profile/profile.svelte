<script>
	import GameCard from './../../components/game-card.svelte';
	import BalanceCard from './../../components/profile-page/balance-card.svelte';
  import ProfileCard from '~/components/profile-page/profile-card.svelte';
  import {dragscroll} from '@svelte-put/dragscroll'
  import { auth } from '~/store/auth';
  import { items } from '../gamehub/mock';
  $: {
    if(!$auth.isAuthorized) {
      const link = document.createElement('a')
      link.href = '/'
      link.click()
    }
  }
</script>
{#if $auth.isAuthorized}
  <div class="w-full sm:grid md:grid sm:grid-cols-1 md:grid-cols-1 flex gap-4 rounded-[12px]">
    <ProfileCard />
    <BalanceCard />
  </div>
{/if}

<div class="bg-[#1C1C1E] rounded-[20px] p-4 mt-4">
  <div class="text-[24px] font-medium">My Games</div>
  <div use:dragscroll class="flex min-h-[382px] gap-[10px] mt-4 overflow-x-auto pb-3" >
    {#each items as game}
      <GameCard name={game.game_info.name} img={game.banner} networks={game.networks} tags={game.game_info.tags} />
    {/each}
  </div>
</div>