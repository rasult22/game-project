<script>
  import TelegramStats from "./telegram-stats.svelte";
  import TwitterStats from "./twitter-stats.svelte";

  export let social_data
</script>

<div
class="bg-gradient-to-r from-[#FDFC47] to-[#24FE41] text-black rounded-[20px] py-[20px] px-[72px] flex justify-center items-center space-x-9"
>
<div>
  <div class="flex items-center space-x-2">
    <span class="text-[20px] font-semibold">Social Health</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 8C11 7.44772 11.4477 7 12 7H12.01C12.5623 7 13.01 7.44772 13.01 8C13.01 8.55228 12.5623 9 12.01 9H12C11.4477 9 11 8.55228 11 8ZM10 12C10 11.4477 10.4477 11 11 11H12C12.5523 11 13 11.4477 13 12V15C13.5523 15 14 15.4477 14 16C14 16.5523 13.5523 17 13 17H12C11.4477 17 11 16.5523 11 16V13C10.4477 13 10 12.5523 10 12Z"
        fill="#2A2A2A"
      />
    </svg>
  </div>
  <div class="mt-[10px]">
    Project activity in social networks
  </div>
</div>
<div>
  <div class="text-[32px] font-bold w-[106px] h-[106px] flex items-center justify-center rounded-full border-[10px] border-[#0000004D]">A</div>
</div>
</div>

<div class="flex gap-3 mt-9">
  <div class="bg-[#2A2A2A] w-full p-4 rounded-[12px]">
    <div class="flex justify-between">
      <div class="font-semibold leading-[120%]">Telegram<br/>
        Channel</div>
        <img width="32" src="/media/tg-icon.svg" alt="">
    </div>
    <img class="mt-10" src="/optimized/social-media-rate.webp" alt="">
  </div>
  <div class="bg-[#2A2A2A] w-full p-4 rounded-[12px]">
    <div class="flex justify-between">
      <div class="font-semibold leading-[120%]">X
        <br/>‎ 
      </div>
      <img width="24" src="/media/x-icon.svg" alt="">
    </div>
    <img class="mt-10" src="/optimized/social-media-rate.webp" alt="">
  </div>
</div>

<TwitterStats stats={social_data.twitter_data_30d} />
<TelegramStats stats={social_data.tg_group_data_30d} />