<script>
	import GameCard from './../../components/game-card.svelte';
	import BalanceCard from './../../components/profile-page/balance-card.svelte';
  import ProfileCard from '~/components/profile-page/profile-card.svelte';
  import {dragscroll} from '@svelte-put/dragscroll'
  import { auth } from '~/store/auth';
  $: {
    if(!$auth.isAuthorized) {
      const link = document.createElement('a')
      link.href = '/'
      link.click()
    }
  }
</script>
{#if $auth.isAuthorized}
  <div class="w-full flex gap-4 rounded-[12px]">
    <ProfileCard />
    <BalanceCard />
  </div>
{/if}

<div class="bg-[#1C1C1E] rounded-[20px] p-4 mt-4">
  <div class="text-[24px] font-medium">My Games</div>
  <div use:dragscroll class="flex min-h-[382px] gap-[10px] mt-4 overflow-x-auto pb-3" >
    <GameCard />
    <GameCard />
    <GameCard />
    <GameCard />
    <GameCard />
    <GameCard />
    <GameCard />
  </div>
</div>

<div class="bg-gradient-to-r mt-4 p-6 rounded-[20px] from-[#2892DE] to-[#2366C3] h-[317px]">
  <div class="text-[36px] font-semibold">Stay with us in social media</div>
  <div class="mt-6">
    Subscribe to our Telegram and X
  </div>
</div>