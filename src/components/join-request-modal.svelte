<script>
  import { fade } from 'svelte/transition';
  import RequestForm from './request-form.svelte';
  export let open = false
</script>
<button on:click={() => open = true} class="font-medium border py-[10px] active:border-[#fff] active:scale-95 transition-all px-[36px] rounded-[12px]">Send request</button>

{#if open}
  <div transition:fade on:click={() => open = false} class="fixed cursor-pointer flex items-center justify-center left-[50%] translate-x-[-50%] top-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm w-[100vw] h-[100vh] z-[150]">
    <div on:click|stopPropagation class="flex max-w-[1200px] z-[150] cursor-default rounded-[24px] overflow-hidden">
      <img width="600" class="w-[50%]" src="/game-project/media/join-us.png" alt="">
      <div class="bg-[#2A2A2A] w-full p-6">
        <!-- header -->
        <div class="flex items-center justify-between">
          <div class="text-[32px] text-white font-medium leading-[120%]">Request</div>
          <button on:click={() => open = false}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0573 28.9427C11.578 29.4634 12.4222 29.4634 12.9429 28.9427L20.0001 21.8855L27.0573 28.9427C27.578 29.4634 28.4222 29.4634 28.9429 28.9427C29.4636 28.422 29.4636 27.5778 28.9429 27.0571L21.8857 19.9999L28.9429 12.9427C29.4636 12.422 29.4636 11.5778 28.9429 11.0571C28.4222 10.5364 27.578 10.5364 27.0573 11.0571L20.0001 18.1143L12.9429 11.0571C12.4222 10.5364 11.578 10.5364 11.0573 11.0571C10.5366 11.5778 10.5366 12.422 11.0573 12.9427L18.1145 19.9999L11.0573 27.0571C10.5366 27.5778 10.5366 28.422 11.0573 28.9427Z" fill="white"/>
            </svg>
          </button>
        </div>
        <!-- body -->
        <RequestForm />
      </div>
    </div>
  </div>
{/if}





