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
      {#if done}
        <div class="text-[40px] font-bold text-center pt-6">перейти в телеграм канал</div>
        <svg class="mx-auto my-9" xmlns="http://www.w3.org/2000/svg" width="194" height="194" viewBox="0 0 194 194" fill="none">
          <path d="M97.1719 2.00391C149.817 2.00391 193.172 45.3587 193.172 98.0039C193.172 151.036 149.817 194.004 97.1719 194.004C44.1396 194.004 1.17188 151.036 1.17188 98.0039C1.17188 45.3587 44.1396 2.00391 97.1719 2.00391ZM141.301 67.4233C141.688 66.262 141.688 65.1007 141.301 63.5523C141.301 62.7781 140.527 61.6168 140.14 61.2297C138.978 60.0684 137.043 60.0684 136.269 60.0684C132.785 60.0684 126.978 62.0039 100.269 73.2297C90.9783 77.1007 72.3977 84.8426 44.5267 97.2297C39.8816 99.1652 37.559 100.714 37.1719 102.649C36.7848 105.746 41.817 106.907 47.6235 108.843C52.6557 110.391 59.2364 112.326 62.7203 112.326C65.817 112.326 69.3009 111.165 73.1719 108.456C99.1074 90.6491 112.656 81.7458 113.43 81.7458C114.204 81.7458 114.978 81.3587 115.365 81.7458C116.14 82.52 116.14 83.2942 115.753 83.6813C115.365 85.6168 90.9783 108.068 89.4299 109.617C84.0106 115.036 77.817 118.52 87.4945 124.714C95.6235 130.133 100.269 133.617 108.785 139.036C114.204 142.52 118.462 146.778 123.882 146.391C126.591 146.004 129.301 143.681 130.462 136.326C133.946 119.681 140.14 82.52 141.301 67.4233Z" fill="white"/>
        </svg>
        <div>
          <a target="_blank" href="https://t.me/+sscrybkxHv9mYzg6" style="font-family: Bebas Neue;" class="bg-[#ECE8CF] anim-btn text-[#2A2A2A] block text-center text-[24px] font-bold pt-4 pb-3 w-full rounded-[12px]">
            Перейти
          </a>
        </div>
      {:else}
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
                Телеграм (@username) <span class="text-red-600">*</span>
              </label>
              <input bind:value={telegram} id="telegram" required placeholder="Телеграм (@username)" class="bg-[#09171C66] rounded-[12px] border py-[14px] px-4 border-[#37373D]" type="text">
            </div>
            <div class="flex flex-col gap-2">
              <label for="email">
                Email  <span class="text-red-600">*</span>
              </label>
              <input bind:value={email} id="email" required placeholder="Email" class="bg-[#09171C66] rounded-[12px] border py-[14px] px-4 border-[#37373D]" type="email">
            </div>
            <button style="font-family: Bebas Neue;" class="bg-[#ECE8CF] anim-btn text-[#2A2A2A] text-[24px] font-bold pt-4 pb-3 w-full rounded-[12px] font-">
              {#if loading}
                <div class="flex justify-center items-center gap-4">
                  <span>Loading</span>
                  <div class="-mt-2 w-8 h-8 border-4 border-dashed rounded-full animate-spin border-gray-500"></div>
                </div>
              {:else} 
              Принять учаcтие
              {/if}
            </button>
        </form>
      {/if}
    </div>
  </div>
{/if}
