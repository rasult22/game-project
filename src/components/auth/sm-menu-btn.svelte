<script>
	import ProfileCard from '~/components/profile-page/profile-card.svelte';
  import { auth } from "~/store/auth";
  import { auth_modal_is_open } from './state';
</script>

{#if $auth.isAuthorized}
  <ProfileCard transparent_bg/>
{:else}
  <button on:click={() => $auth_modal_is_open = true} class="w-full my-[50px] font-medium bg-[#fff] text-black border py-[9px] active:border-[#fff] active:scale-95 active:bg-[#D9D9D9] transition-all px-[36px] 13-inch:px-4 rounded-[12px]">Log in</button>
{/if}