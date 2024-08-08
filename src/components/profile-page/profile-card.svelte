<script>
	import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
	import BaseInput from './../../components/base/base-input.svelte';
  import { auth } from "~/store/auth";
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
</script>
<div class="bg-[#1C1C1E] relative w-full flex-wrap justify-center flex flex-col items-center p-6 rounded-[20px] space-y-3">
  <div class="rounded-full w-[120px] h-[120px] border-4 border-orange-400">
    <img class="w-full" width="120" height="120" src="/media/avatar.png" alt="">
  </div>
  <!-- auth type -->
  <div class="flex justify-center">
    {#if $auth.authType === 'metamask'}
      <img src="/media/metamask-icon.png" width="24" alt="">
    {/if}
    {#if $auth.authType === 'trustwallet'}
      <img src="/media/trustwallet-icon.png" width="24" alt="">
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
  {#if edit}
    <div transition:fade class="h-full w-[50%]">
    </div>
    <div transition:fade class="absolute p-2 text-black space-y-6 flex flex-col justify-center items-start right-0 -top-3 rounded-[20px] w-[50%] h-full bg-white">
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
 