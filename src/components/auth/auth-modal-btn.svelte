<script>
	import ProfileBtn from './profile-btn.svelte';
    import { auth } from "~/store/auth";
    import { auth_modal_is_open } from "./state";
    import { onMount } from 'svelte';
    import { init } from '~/utils/ton';

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
</script>

<div id="ton-connect" class="hidden"></div>
{#if $auth.isAuthorized}
  <ProfileBtn name={$auth.user && $auth.user.name} address={$auth.user && $auth.user.address} />
{:else}
  <button on:click={() => $auth_modal_is_open = true} class="font-medium bg-[#fff] text-black border py-[9px] active:border-[#fff] active:scale-95 active:bg-[#D9D9D9] transition-all px-[36px] 13-inch:px-4 rounded-[12px]">Log in</button>
{/if}
