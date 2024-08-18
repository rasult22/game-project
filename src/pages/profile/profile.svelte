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
  <div class="w-full flex gap-4 rounded-[12px]">
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

<div class="bg-[url(/optimized/footer-bg-2.webp)] bg-cover bg-center mt-4 p-6 rounded-[20px]  h-[317px]">
  <div class="text-[32px] font-semibold app-text-gradient-bg-2 font-Oxanium uppercase">Stay with us in social media</div>
  <div class="mt-7 flex space-x-4">
    <a class="hover:opacity-70 anim-btn" href="https://x.com/bizzongames" target="_blank">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM24.818 7H21.7512L16.6976 12.7517L12.3283 7H6L13.5613 16.8446L6.39494 25H9.46359L14.9946 18.7074L19.8284 25H26L18.1179 14.6246L24.818 7ZM22.3742 23.1723H20.6748L9.58133 8.73169H11.4049L22.3742 23.1723Z" fill="#0D0D0F"/>
      </svg>
    </a>
    <a class="hover:opacity-70 anim-btn" href="https://t.me/BIZZONGames" target="_blank">
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1953 0.333984C24.9695 0.333984 32.1953 7.55979 32.1953 16.334C32.1953 25.1727 24.9695 32.334 16.1953 32.334C7.3566 32.334 0.195312 25.1727 0.195312 16.334C0.195312 7.55979 7.3566 0.333984 16.1953 0.333984ZM23.5501 11.2372C23.6147 11.0437 23.6147 10.8501 23.5501 10.592C23.5501 10.463 23.4211 10.2695 23.3566 10.205C23.1631 10.0114 22.8405 10.0114 22.7114 10.0114C22.1308 10.0114 21.1631 10.334 16.7114 12.205C15.1631 12.8501 12.0663 14.1404 7.42112 16.205C6.64693 16.5275 6.25983 16.7856 6.19531 17.1082C6.1308 17.6243 6.96951 17.8179 7.93725 18.1404C8.77596 18.3985 9.87273 18.7211 10.4534 18.7211C10.9695 18.7211 11.5502 18.5275 12.1953 18.0759C16.5179 15.1082 18.776 13.6243 18.905 13.6243C19.034 13.6243 19.1631 13.5598 19.2276 13.6243C19.3566 13.7533 19.3566 13.8824 19.2921 13.9469C19.2276 14.2695 15.1631 18.0114 14.905 18.2695C14.0018 19.1727 12.9695 19.7533 14.5824 20.7856C15.9372 21.6888 16.7114 22.2695 18.1308 23.1727C19.034 23.7533 19.7437 24.463 20.6469 24.3985C21.0985 24.334 21.5502 23.9469 21.7437 22.7211C22.3243 19.9469 23.3566 13.7533 23.5501 11.2372Z" fill="#0D0D0F"/>
      </svg>     
    </a>
  </div>
</div>