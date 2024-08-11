<script>
  import { init } from '~/utils/ton';
	import ProfileBtn from './profile-btn.svelte';
  import { fade } from "svelte/transition";
  import LoginMetamask from "./login-metamask.svelte";
  import LoginTrustwallet from './login-trustwallet.svelte';
  import LoginTon from './login-ton.svelte'
  import { auth } from "~/store/auth";
  import { onMount } from 'svelte';
  export let open = false
  onMount(() => {
    if (!$auth.isAuthorized) {
      init() // init ton
    }
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (acc) => {
        if (!acc.length) {
          $auth = {
            ...$auth,
            isAuthorized: false,
            user: null
          }
        }
      })
    }
  })

  $: isConflict = window.ethereum && window.ethereum.isTrustWallet && window.ethereum.isMetaMask
</script>
<div id="ton-connect" class="hidden"></div>
{#if $auth.isAuthorized}
  <ProfileBtn name={$auth.user && $auth.user.name} address={$auth.user && $auth.user.address} />
{:else}
  <button on:click={() => open = true} class="font-medium bg-[#fff] text-black border py-[10px] active:border-[#fff] active:scale-95 active:bg-[#D9D9D9] transition-all px-[36px] rounded-[12px]">Log in</button>
{/if}
{#if open}
  <div transition:fade on:click={() => open = false} class="fixed cursor-pointer flex items-center justify-center top-0 left-[50%] translate-x-[-50%] bg-[rgba(0,0,0,0.5)] backdrop-blur-sm w-[100vw] h-[100vh] z-10">
    <div on:click|stopPropagation class="flex w-[600px] cursor-default z-50 rounded-[24px] overflow-hidden">
      <div class="bg-[#2A2A2A] w-full p-6">
        <!-- header -->
        <div class="flex items-center justify-between">
          <div class="text-[32px] text-white font-medium leading-[120%]">Sign in</div>
          <button on:click={() => open = false}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0573 28.9427C11.578 29.4634 12.4222 29.4634 12.9429 28.9427L20.0001 21.8855L27.0573 28.9427C27.578 29.4634 28.4222 29.4634 28.9429 28.9427C29.4636 28.422 29.4636 27.5778 28.9429 27.0571L21.8857 19.9999L28.9429 12.9427C29.4636 12.422 29.4636 11.5778 28.9429 11.0571C28.4222 10.5364 27.578 10.5364 27.0573 11.0571L20.0001 18.1143L12.9429 11.0571C12.4222 10.5364 11.578 10.5364 11.0573 11.0571C10.5366 11.5778 10.5366 12.422 11.0573 12.9427L18.1145 19.9999L11.0573 27.0571C10.5366 27.5778 10.5366 28.422 11.0573 28.9427Z" fill="white"/>
            </svg>
          </button>
        </div>
        {#if isConflict}
          <div class="text-[14px] text-black  mt-4 bg-orange-400 p-4 rounded-[20px]">
            <div class="font-medium">Caution! You have both (Metamask & TrustWallet) extensions installed.</div>
            <div class="font-semibold mt-1">Please <span class="underline">disable one of them</span> in your browser settings to avoid conflicts</div>
          </div>
        {/if}
        <!-- body -->
        <div class="space-y-4 mt-4">
          <LoginMetamask bind:authPopupIsOpen={open}/>
          <LoginTrustwallet bind:authPopupIsOpen={open} />
          <LoginTon bind:authPopupIsOpen={open} />
          <div class="flex items-center justify-center space-x-4">
            <div class="border-t w-[30%] border-[#888888]"></div>
            <div class="text-[#888888]">Or</div>
            <div class="border-t w-[30%] border-[#888888]"></div>
          </div>
          <button class="w-full justify-center font-medium bg-[#fff] flex items-center space-x-2 text-black border py-3 active:border-[#fff] active:scale-95 active:bg-[#D9D9D9] transition-all px-[36px] rounded-[12px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M33.7516 18.3498C33.7516 17.0548 33.6443 16.1098 33.4123 15.1298H18.323V20.9748H27.1801C27.0016 22.4273 26.0373 24.6148 23.8944 26.0847L23.8643 26.2804L28.6353 29.9025L28.9658 29.9348C32.0015 27.1873 33.7516 23.1448 33.7516 18.3498Z" fill="#4285F4"/>
              <path d="M18.322 33.7499C22.6612 33.7499 26.304 32.3498 28.9648 29.9349L23.8933 26.0848C22.5362 27.0123 20.7148 27.6598 18.322 27.6598C14.072 27.6598 10.4649 24.9123 9.17908 21.1148L8.99061 21.1305L4.02972 24.893L3.96484 25.0698C6.60766 30.2148 12.0362 33.7499 18.322 33.7499Z" fill="#34A853"/>
              <path d="M9.17996 21.1151C8.84068 20.1351 8.64433 19.085 8.64433 18.0001C8.64433 16.915 8.84068 15.865 9.16211 14.8851L9.15312 14.6763L4.13005 10.8534L3.96571 10.93C2.87647 13.065 2.25146 15.4626 2.25146 18.0001C2.25146 20.5376 2.87647 22.935 3.96571 25.07L9.17996 21.1151Z" fill="#FBBC05"/>
              <path d="M18.3221 8.33996C21.3399 8.33996 23.3755 9.61745 24.5363 10.685L29.072 6.345C26.2864 3.80751 22.6613 2.25 18.3221 2.25C12.0363 2.25 6.60768 5.78497 3.96484 10.9299L9.16126 14.885C10.465 11.0875 14.0721 8.33996 18.3221 8.33996Z" fill="#EB4335"/>
            </svg>
            <span>
              Sign Up with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}





