<script>
	import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
	import BaseInput from './../../components/base/base-input.svelte';
  import { gapi } from "gapi-script";
  import { auth, logout as logout_s } from '~/store/auth';
  export let transparent_bg = false
  let name = ''
  let edit = false

  onMount(() => {
    if ($auth.user && $auth.user.name !== name) {
      name = $auth.user.name
    } 
  })
  const onConfirm = () => {
    if ($auth.user && name) {
      $auth.user.name = name
    }
    edit = false
  }
  const logout = async () => {
    if ($auth.authType === 'ton') {
      const tonConnectUI = new TonConnectUI({
        manifestUrl: 'https://www.bizzon.io/app_meta.json',
        buttonRootId: 'ton-connect'
      })
      window.tonConnectUI = tonConnectUI
      tonConnectUI.connector.restoreConnection().then(() => {
        setTimeout(() => {
          tonConnectUI.connector.disconnect().then(() => {
            logout_s()
          }, 1000)
        })
      })
    }
    if ($auth.authType === 'metamask') {
      logout_s()
    }
    if ($auth.authType === 'google') {
      gapi.load('client:auth2', async () => {
        await gapi.client
          .init({
            clientId:
              "216133606325-vqdj4mcc0jh5p3j659j8glllfmf5r3dq.apps.googleusercontent.com",
            scope: "profile email",
          })
        const authInstance = gapi.auth2.getAuthInstance();
        authInstance.signOut().then(() => {
          logout_s()
        });
      })
    }
  }
</script>
<div class:bg-transparent={transparent_bg} class="bg-[#1C1C1E] relative w-full flex-wrap justify-center flex flex-col items-center p-6 rounded-[20px] space-y-3">
  <div class="rounded-full w-[120px] h-[120px] border-4 border-orange-400">
    <img class="w-full" width="120" height="120" src="/optimized/avatar.webp" alt="">
  </div>
  <!-- auth type -->
  <div class="flex justify-center">
    {#if $auth.authType === 'metamask'}
      <img src="/optimized/metamask-icon.webp" width="24" alt="">
    {/if}
    {#if $auth.authType === 'google'}
      <img src="/optimized/google-icon.webp" width="24" alt="">
    {/if}
    {#if $auth.authType === 'trustwallet'}
      <img src="/optimized/trustwallet-icon.webp" width="24" alt="">
    {/if}
  </div>
  <!-- name -->
  <div class="flex items-center space-x-2">
    <span class="text-[20px] font-semibold">
      {$auth.user && $auth.user.name || '...'}
    </span>
    <img on:click={() => edit = true} class="active:scale-95 active:opacity-60 transition-all cursor-pointer" width="24" height="24" src="/media/edit-icon.svg" alt="">
  </div>
  <div class="flex items-center space-x-2">
    <span class="text-[#D9D9D9]">
      {$auth.user && $auth.user.address || '...'}
    </span>
    <img class="active:scale-95 active:opacity-60 transition-all cursor-pointer" on:click={() => {
      navigator.clipboard.writeText($auth.user.address_full)
    }} width="24" height="24" src="/media/copy-icon.svg" alt="">
  </div>
  <button on:click={logout} class="flex hover:opacity-80 active:scale-[.98] gap-2 items-center py-2 px-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3963 3.73223C2.86514 3.26339 3.50102 3 4.16406 3H9.9974C10.6604 3 11.2963 3.26339 11.7652 3.73223C12.234 4.20107 12.4974 4.83696 12.4974 5.5V7.16667C12.4974 7.6269 12.1243 8 11.6641 8C11.2038 8 10.8307 7.6269 10.8307 7.16667V5.5C10.8307 5.27899 10.7429 5.06702 10.5867 4.91074C10.4304 4.75446 10.2184 4.66667 9.9974 4.66667H4.16406C3.94305 4.66667 3.73109 4.75446 3.57481 4.91074C3.41853 5.06702 3.33073 5.27899 3.33073 5.5V15.5C3.33073 15.721 3.41853 15.933 3.57481 16.0893C3.73109 16.2455 3.94305 16.3333 4.16406 16.3333H9.9974C10.2184 16.3333 10.4304 16.2455 10.5867 16.0893C10.7429 15.933 10.8307 15.721 10.8307 15.5V13.8333C10.8307 13.3731 11.2038 13 11.6641 13C12.1243 13 12.4974 13.3731 12.4974 13.8333V15.5C12.4974 16.163 12.234 16.7989 11.7652 17.2678C11.2963 17.7366 10.6604 18 9.9974 18H4.16406C3.50102 18 2.86514 17.7366 2.3963 17.2678C1.92745 16.7989 1.66406 16.163 1.66406 15.5V5.5C1.66406 4.83696 1.92745 4.20107 2.3963 3.73223ZM14.4081 7.41074C14.7336 7.08531 15.2612 7.08531 15.5867 7.41074L18.0867 9.91074C18.4121 10.2362 18.4121 10.7638 18.0867 11.0893L15.5867 13.5893C15.2612 13.9147 14.7336 13.9147 14.4081 13.5893C14.0827 13.2638 14.0827 12.7362 14.4081 12.4107L15.4856 11.3333H5.83073C5.37049 11.3333 4.9974 10.9602 4.9974 10.5C4.9974 10.0398 5.37049 9.66667 5.83073 9.66667H15.4856L14.4081 8.58926C14.0827 8.26382 14.0827 7.73618 14.4081 7.41074Z" fill="#FA5252"/>
    </svg>
    <span class="text-[14px] text-[#FA5252]">
      Log Out
    </span>
  </button>
  {#if edit}
    <div transition:fade class="h-full sm:hidden w-[50%]">
    </div>
    <div transition:fade class="absolute p-2 text-black space-y-6 flex flex-col justify-center items-start right-0 -top-3 rounded-[20px] w-[50%] sm:w-full h-full bg-white">
      <div class="flex  items-center space-x-2">
        <img src="/media/edit-icon-black.svg" alt="">
        <span class="text-[20px] font-semibold">Edit</span>
      </div>
      <div class="w-full">
        <BaseInput id="name" placeholder="Enter your name" bind:value={name} />
      </div>
      <div class="w-full">
        <button on:click={onConfirm} class="px-9 active:scale-95 active:opacity-85 transition-all py-[10px] bg-orange-500 font-medium rounded-[12px] w-full">Confirm</button>
      </div>
    </div>
  {/if}
</div>
 