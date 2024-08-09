<script>
  export let address = '_'
  export let name = '_'
  export let profile_pic
</script>
<a href="/game-project/profile" class="flex group items-center -space-x-2 cursor-pointer">
  <div class="bg-[#2A2A2A] group-hover:bg-[#444] border border-[#F78E7B] cursor-pointer space-x-2 flex items-center px-3 py-1 rounded-[12px]">
    <div>
      <div class="text-[14px]">{name}</div>
      <div class="text-[12px] font-medium">{address}</div>
    </div>
    <div>
      {#if profile_pic}
        {profile_pic}
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9321 15.7071C12.3226 16.0976 12.9557 16.0976 13.3463 15.7071L19.3463 9.70711C19.7368 9.31658 19.7368 8.68342 19.3463 8.29289C18.9557 7.90237 18.3226 7.90237 17.9321 8.29289L12.6392 13.5858L7.34627 8.29289C6.95574 7.90237 6.32258 7.90237 5.93205 8.29289C5.54153 8.68342 5.54153 9.31658 5.93205 9.70711L11.9321 15.7071Z" fill="white"/>
        </svg>
      {/if}
    </div>
  </div>
  <img width="45" height="45" src="/game-project/media/avatar.png" alt="">
</a>