<script>
export let discord = ''
export let twitter = ''
export let facebook = ''
export let instagram = ''
export let telegram = ''
export let other = ''
</script>

<div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
  <label>
    Social Media
  </label>
  <div class="grid grid-cols-2 gap-3 mt-3">
    <div class="flex flex-col w-full">
      <label class="flex gap-[6px]">
        <img width="24" src="/media/x.svg" alt="">
        <span>
          X (formerly Twitter)
        </span>
      </label>
      <input bind:value={twitter} type="text" class="my-input mt-[10px]" placeholder="Enter URL">
    </div>
    <div class="flex flex-col w-full">
      <label class="flex gap-[6px]">
        <img width="24" src="/media/discord.svg" alt="">
        <span>
          Discord
        </span>
      </label>
      <input bind:value={discord} type="text" class="my-input mt-[10px]" placeholder="Enter URL">
    </div>
    <div class="flex flex-col w-full">
      <label class="flex gap-[6px]">
        <img width="24" src="/media/facebook.svg" alt="">
        <span>
          Facebook
        </span>
      </label>
      <input bind:value={facebook} type="text" class="my-input mt-[10px]" placeholder="Enter URL">
    </div>
    <div class="flex flex-col w-full">
      <label class="flex gap-[6px]">
        <img width="24" src="/media/instagram.svg" alt="">
        <span>
          Instagram
        </span>
      </label>
      <input bind:value={instagram} type="text" class="my-input mt-[10px]" placeholder="Enter URL">
    </div>
    <div class="flex flex-col w-full">
      <label class="flex gap-[6px]">
        <img width="24" src="/media/telegram.svg" alt="">
        <span>
          Telegram
        </span>
      </label>
      <input bind:value={telegram} type="text" class="my-input mt-[10px]" placeholder="Enter URL">
    </div>
    <div class="flex flex-col w-full">
      <label class="flex gap-[6px]">
        <span>
          Other
        </span>
      </label>
      <input bind:value={other} type="text" class="my-input mt-[10px]" placeholder="Enter URL">
    </div>
  </div>
</div>

<style>
  .my-input {
    @apply px-4 py-[14px] rounded-[12px] placeholder:text-[#888888] bg-[#141414] border border-[#323234] hover:outline-none
  }
</style>