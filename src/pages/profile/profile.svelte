<script>
	import GameCard from './../../components/game-card.svelte';
	import BalanceCard from './../../components/profile-page/balance-card.svelte';
  import ProfileCard from '~/components/profile-page/profile-card.svelte';
  import {dragscroll} from '@svelte-put/dragscroll'
  import { auth } from '~/store/auth';
  import { items } from '../gamehub/mock';
  import { onMount } from 'svelte';
  
  let fav_list = []
  onMount(() => {
    const fav_list_string = localStorage.getItem('favorite_list')
    if (fav_list_string) {
      fav_list = JSON.parse(fav_list_string)
    }
  })
  $: {
    if(!$auth.isAuthorized) {
      const link = document.createElement('a')
      link.href = '/'
      link.click()
    }
  }

  $: list = items.filter((game) => {
    const inList = fav_list.find(game_id => game.id === game_id)
    if (inList) {
      return true
    } else {
      return false
    }
  })
</script>
{#if $auth.isAuthorized}
  <div class="w-full sm:grid md:grid sm:grid-cols-1 md:grid-cols-1 flex gap-4 rounded-[12px]">
    <ProfileCard />
    <BalanceCard games={list} />
  </div>
{/if}

<div class="bg-[#1C1C1E] rounded-[20px] p-4 mt-4">
  <div class="text-[24px] font-medium">My Games</div>
  <div use:dragscroll class="flex min-h-[382px] gap-[10px] mt-4 overflow-x-auto pb-3" >
    {#each list as game}
      <GameCard on:play={() => {
        if (game.game_info.game_play_link) {
          window.open(game.game_info.game_play_link)
        }
      }} name={game.game_info.name} img={game.banner} networks={game.networks} tags={game.game_info.tags} />
    {/each}

    {#if list.length < 1}
      <div class="text-[32px] flex items-center justify-center w-full opacity-[0.52]">
        You don't have favorite games yet
      </div>
    {/if}
  </div>
</div>