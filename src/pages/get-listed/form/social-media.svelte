<script>

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
      <input type="text" required class="my-input mt-[10px]" placeholder="Enter URL">
    </div>
    <div class="flex flex-col w-full">
      <label class="flex gap-[6px]">
        <img width="24" src="/media/discord.svg" alt="">
        <span>
          Discord
        </span>
      </label>
      <input type="text" required class="my-input mt-[10px]" placeholder="Enter URL">
    </div>
    <div class="flex flex-col w-full">
      <label class="flex gap-[6px]">
        <img width="24" src="/media/facebook.svg" alt="">
        <span>
          Facebook
        </span>
      </label>
      <input type="text" required class="my-input mt-[10px]" placeholder="Enter URL">
    </div>
    <div class="flex flex-col w-full">
      <label class="flex gap-[6px]">
        <img width="24" src="/media/instagram.svg" alt="">
        <span>
          Instagram
        </span>
      </label>
      <input type="text" required class="my-input mt-[10px]" placeholder="Enter URL">
    </div>
    <div class="flex flex-col w-full">
      <label class="flex gap-[6px]">
        <img width="24" src="/media/telegram.svg" alt="">
        <span>
          Telegram
        </span>
      </label>
      <input type="text" required class="my-input mt-[10px]" placeholder="Enter URL">
    </div>
    <div class="flex flex-col w-full">
      <label class="flex gap-[6px]">
        <span>
          Other
        </span>
      </label>
      <input type="text" required class="my-input mt-[10px]" placeholder="Enter URL">
    </div>
  </div>
</div>

<style>
  .my-input {
    @apply px-4 py-[14px] rounded-[12px] placeholder:text-[#888888] bg-[#141414] border border-[#323234] hover:outline-none
  }
</style>