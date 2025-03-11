<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  const dispatch = createEventDispatcher();
  export let email = ''
</script>
<div transition:fade class="fixed z-[155] cursor-pointer flex items-center justify-center top-0 left-[50%] translate-x-[-50%] bg-[rgba(0,0,0,0.5)] backdrop-blur-sm w-[100vw] h-[100vh]">
  <div on:click|stopPropagation class="flex w-[380px] cursor-default z-[160] rounded-[24px] overflow-hidden">
    <div class="bg-[#2A2A2A] w-full p-6">
      <div class="text-[#FFFFFF] text-center text-[24px] font-medium">Success!</div>
      <div class="text-center mt-4 text-[#C1C2C5]">We have sent the registration link to your email:  {email}</div>
      <svg class="mx-auto mt-6" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="64" fill="#12B886"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M94.9577 43.7081C96.3463 45.0967 96.3463 47.3479 94.9577 48.7365L59.4022 84.292C58.0136 85.6805 55.7624 85.6805 54.3739 84.292L36.5961 66.5142C35.2076 65.1257 35.2076 62.8745 36.5961 61.4859C37.9846 60.0974 40.2359 60.0974 41.6244 61.4859L56.888 76.7495L89.9294 43.7081C91.3179 42.3196 93.5692 42.3196 94.9577 43.7081Z" fill="white"/>
      </svg>
      <button on:click={() => dispatch('close')} class="flex w-full mt-6 justify-center gap-2 md:w-full sm:w-full disabled:opacity-[0.5] disabled:cursor-not-allowed anim-btn rounded-[12px] py-[14px] text-black px-9 bg-[white]">
        <span>Got it</span>
      </button>
    </div>
  </div>
</div>