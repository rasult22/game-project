<script>
  import { fade } from "svelte/transition";
  import { popupIsOpen } from "./state.ts";
  import pb from "~/pocketbase.ts";
  let loading = false
  let done = false
  let name = ''
  let phone = ''
  let telegram = ''
  let email = ''
  const submit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (loading || done) return

    loading = true
    pb.collection('games_event_requests').create({
      name,
      phone,
      email,
      telegram
    }).then(() => {
      done = true
      setTimeout(() => {
        $popupIsOpen = false
      }, 400)
    }).finally(() => {
      loading = false
    })
  }
</script>

{#if $popupIsOpen}
  <div
    transition:fade
    on:click={() => ($popupIsOpen = false)}
    class="fixed left-[50%] top-0 z-[150] flex h-[100vh] w-[100vw] translate-x-[-50%] cursor-pointer items-center justify-center bg-[rgba(0,0,0,0.5)] backdrop-blur-sm"
  >
    <div
      on:click|stopPropagation
      class="z-[150] w-[600px] sm:max-h-[80vh] max-h-[90vh] overflow-auto sm:overflow-auto  cursor-default rounded-[16px] bg-[#0D0D0F] px-4 pb-4"
    >
      <div
        class="flex w-full pt-4 sticky top-0 bg-[#0D0D0F] items-center justify-between text-[40px] leading-[120%]"
      >
        <span> Оставить заявку </span>
        <svg
          class="cursor-pointer"
          on:click={() => $popupIsOpen = false}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.0575 28.9428C11.5782 29.4635 12.4224 29.4635 12.9431 28.9428L20.0003 21.8856L27.0575 28.9428C27.5782 29.4635 28.4224 29.4635 28.9431 28.9428C29.4638 28.4221 29.4638 27.5779 28.9431 27.0572L21.8859 20L28.9431 12.9428C29.4638 12.4221 29.4638 11.5779 28.9431 11.0572C28.4224 10.5365 27.5782 10.5365 27.0575 11.0572L20.0003 18.1144L12.9431 11.0572C12.4224 10.5365 11.5782 10.5365 11.0575 11.0572C10.5368 11.5779 10.5368 12.4221 11.0575 12.9428L18.1147 20L11.0575 27.0572C10.5368 27.5779 10.5368 28.4221 11.0575 28.9428Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        class="mt-[20px] flex h-[150px] w-full items-end rounded-[12px] bg-[url(/optimized/ru-landing-banner.webp)] bg-cover bg-center"
      >
        <div
          class="flex w-full justify-between px-4 pb-1 text-[32px] font-bold leading-[100%] text-[#EBB957]"
        >
          <div>24 августа</div>
          <div>14:00, Mocква</div>
        </div>
      </div>
      <!-- form -->
       <form class="font-Inter mt-5 space-y-5" on:submit|preventDefault={submit}>
          <div class="flex flex-col gap-2">
            <label for="name">
              Имя <span class="text-red-600">*</span>
            </label>
            <input bind:value={name} id="name" required placeholder="Имя" class="bg-[#09171C66] rounded-[12px] border py-[14px] px-4 border-[#37373D]" type="text">
          </div>
          <div class="flex flex-col gap-2">
            <label for="phone">
              Телефон <span class="text-red-600">*</span>
            </label>
            <input bind:value={phone} id="phone" placeholder="Телефон" class="bg-[#09171C66] rounded-[12px] border py-[14px] px-4 border-[#37373D]" type="number">
          </div>
          <div class="flex flex-col gap-2">
            <label for="telegram">
              Телеграм <span class="text-red-600">*</span>
            </label>
            <input bind:value={telegram} id="telegram" required placeholder="Телеграм" class="bg-[#09171C66] rounded-[12px] border py-[14px] px-4 border-[#37373D]" type="text">
          </div>
          <div class="flex flex-col gap-2">
            <label for="email">
              Email почта <span class="text-red-600">*</span>
            </label>
            <input bind:value={email} id="email" required placeholder="Почта" class="bg-[#09171C66] rounded-[12px] border py-[14px] px-4 border-[#37373D]" type="email">
          </div>
          <button style="font-family: Bebas Neue;" class="bg-[#ECE8CF] anim-btn text-[#2A2A2A] text-[24px] font-bold pt-4 pb-3 w-full rounded-[12px] font-">
            {#if loading}
              <div class="flex justify-center items-center gap-4">
                <span>Loading</span>
                <div class="-mt-2 w-8 h-8 border-4 border-dashed rounded-full animate-spin border-gray-500"></div>
              </div>
            {:else if done}
            <div class="flex items-center justify-center gap-2">
              <span>
                Done
              </span>
              <svg class="-mt-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 6L9 18L3 12" stroke="green" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            {:else} 
            Принять учаcтие
            {/if}
          </button>
       </form>
    </div>
  </div>
{/if}
