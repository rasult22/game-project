<script>
	import { auth_modal_is_open } from './state.ts';
  import { fade } from "svelte/transition";
  import LoginMetamask from "./login-metamask.svelte";
  import LoginTrustwallet from './login-trustwallet.svelte';
  import SignInWithGoogle from './sign-in-with-google.svelte';
  import LoginTon from './login-ton.svelte'

  $: isConflict = window.ethereum && window.ethereum.isTrustWallet && window.ethereum.isMetaMask

  const closePopup = () => {
    $auth_modal_is_open = false
  }
</script>
{#if $auth_modal_is_open}
  <div transition:fade on:click={closePopup} class="fixed z-[155] cursor-pointer flex items-center justify-center top-0 left-[50%] translate-x-[-50%] bg-[rgba(0,0,0,0.5)] backdrop-blur-sm w-[100vw] h-[100vh]">
    <div on:click|stopPropagation class="flex w-[600px] cursor-default z-[160] rounded-[24px] overflow-hidden">
      <div class="bg-[#2A2A2A] w-full p-6">
        <!-- header -->
        <div class="flex items-center justify-between">
          <div class="text-[32px] text-white font-medium leading-[120%]">Sign in</div>
          <button on:click={closePopup}>
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
          <LoginMetamask bind:authPopupIsOpen={$auth_modal_is_open}/>
          <LoginTrustwallet bind:authPopupIsOpen={$auth_modal_is_open} />
          <LoginTon bind:authPopupIsOpen={$auth_modal_is_open} />
          <div class="flex items-center justify-center space-x-4">
            <div class="border-t w-[30%] border-[#888888]"></div>
            <div class="text-[#888888]">Or</div>
            <div class="border-t w-[30%] border-[#888888]"></div>
          </div>
          <SignInWithGoogle bind:authPopupIsOpen={$auth_modal_is_open} />
        </div>
      </div>
    </div>
  </div>
{/if}





