<script>
  import { fade } from 'svelte/transition';
  import ButtonTab from './button-tab.svelte'
  import BaseInput from './base-input.svelte'
  let activeTab = 'investor'
  export let open = false
</script>
<button on:click={() => open = true} class="font-medium border py-[10px] active:border-[#fff] active:scale-95 transition-all px-[36px] rounded-[12px]">Send request</button>

{#if open}
  <div transition:fade on:click={() => open = false} class="fixed cursor-pointer flex items-center justify-center top-0 left-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm w-[100vw] h-[100vh] z-10">
    <div on:click|stopPropagation class="flex max-w-[1200px] z-50 cursor-default rounded-[24px] overflow-hidden">
      <img class="w-[50%]" src="/join-us.png" alt="">
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
        <div class="mt-6 flex">
          <ButtonTab bind:active={activeTab} />
        </div>
        <form class="py-4 space-y-4" on:submit|preventDefault>
          <BaseInput id="name" placeholder={activeTab === 'investor' ? 'Name' : 'Project Name'} required />
          <div class="flex space-x-4">
            <BaseInput id="telegram" placeholder="Telegram" required />
            <BaseInput id="mail" placeholder="Mail" required />
          </div>
          <div>
            <textarea placeholder="About your project (Optional)" class="w-full block bg-transparent border focus:outline-none focus:border-white placeholder:text-[#888888] border-[#888] py-[14px] px-3 rounded-[12px] appearance-none peer" />
          </div>
          <button class="flex justify-center items-center space-x-2 w-full active:opacity-80 active:scale-95 transition-all py-4 px-9 bg-white text-black rounded-[12px]">
            <span>Send</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2071 2.29292C22.4813 2.56708 22.5722 2.975 22.4406 3.33967L15.9406 21.3397C15.9312 21.3657 15.9207 21.3914 15.9092 21.4166C15.7855 21.6864 15.587 21.9151 15.3372 22.0754C15.0874 22.2357 14.7969 22.3209 14.5001 22.3209C14.2033 22.3209 13.9127 22.2357 13.6629 22.0754C13.4191 21.9189 13.2242 21.6974 13.1 21.4359L9.75465 14.7454L3.0642 11.4001C2.80276 11.276 2.58118 11.081 2.42471 10.8372C2.26441 10.5874 2.1792 10.2968 2.1792 10C2.1792 9.70323 2.26441 9.41267 2.42471 9.16288C2.58501 8.9131 2.81366 8.71458 3.08347 8.59094C3.10868 8.57939 3.13435 8.56889 3.16042 8.55947L21.1604 2.05947C21.525 1.92779 21.9329 2.01876 22.2071 2.29292ZM11.7168 14.1975L14.4322 19.6283L19.0365 6.8777L11.7168 14.1975ZM17.6223 5.46352L4.87182 10.0679L10.3025 12.7833L17.6223 5.46352Z" fill="#141517"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
{/if}





