<script>
  import DatePicker from "./date-picker.svelte";
</script>

<div class="text-[36px] font-Oxanium font-medium uppercase">
  Send request
</div>
<div class="text-[#888888]">Fill out the form below and our manager will contact you as soon as possible</div>
<form class="mt-6">
  <!-- project -->
  <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
    <label for="project-name">
      Project Name
      <span class="text-[#FA5252]">*</span>
    </label>
    <input type="text" id="project-name" required class="my-input mt-[6px]" placeholder="Enter the project name">
  </div>
  <!-- studio -->
  <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
    <label for="studio-name">
      Studio Name
    </label>
    <input type="text" id="studio-name" class="my-input mt-[6px]" placeholder="Enter the studio name">
  </div>


  <!-- Application type -->
  <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
    <label>
      Application Type
      <span class="text-[#FA5252]">*</span>
    </label>
    <div class="flex gap-4 mt-3 select-none">
      <label class="flex items-center space-x-2 cursor-pointer">
        <!-- The wrapper span will contain the custom checkbox -->
        <span class="relative w-[20px] h-[20px] ">
          <input type="checkbox" class="opacity-0 absolute w-full h-full peer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px] hidden absolute left-[50%] translate-x-[-50%] z-[2] top-[50%] translate-y-[-50%] peer-checked:block" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8021 4.19526C14.0625 4.45561 14.0625 4.87772 13.8021 5.13807L7.13547 11.8047C6.87512 12.0651 6.45301 12.0651 6.19266 11.8047L2.85932 8.4714C2.59898 8.21106 2.59898 7.78894 2.85932 7.5286C3.11967 7.26825 3.54178 7.26825 3.80213 7.5286L6.66406 10.3905L12.8593 4.19526C13.1197 3.93491 13.5418 3.93491 13.8021 4.19526Z" fill="white"/>
          </svg>
          <div class="w-[20px] h-[20px] peer-checked:bg-[#F97C0E] border-2 border-[#DEE2E6] peer-checked:border-transparent rounded-[4px] absolute top-0 left-0 z-[1]">
          </div>
        </span>
        <span>Game</span>
      </label>
      <label class="flex items-center space-x-2 cursor-pointer">
        <!-- The wrapper span will contain the custom checkbox -->
        <span class="relative w-[20px] h-[20px] ">
          <input type="checkbox" class="opacity-0 absolute w-full h-full peer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px] hidden absolute left-[50%] translate-x-[-50%] z-[2] top-[50%] translate-y-[-50%] peer-checked:block" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8021 4.19526C14.0625 4.45561 14.0625 4.87772 13.8021 5.13807L7.13547 11.8047C6.87512 12.0651 6.45301 12.0651 6.19266 11.8047L2.85932 8.4714C2.59898 8.21106 2.59898 7.78894 2.85932 7.5286C3.11967 7.26825 3.54178 7.26825 3.80213 7.5286L6.66406 10.3905L12.8593 4.19526C13.1197 3.93491 13.5418 3.93491 13.8021 4.19526Z" fill="white"/>
          </svg>
          <div class="w-[20px] h-[20px] peer-checked:bg-[#F97C0E] border-2 border-[#DEE2E6] peer-checked:border-transparent rounded-[4px] absolute top-0 left-0 z-[1]">
          </div>
        </span>
        <span>Application</span>
      </label>
      <label class="flex items-center space-x-2 cursor-pointer">
        <!-- The wrapper span will contain the custom checkbox -->
        <span class="relative w-[20px] h-[20px] ">
          <input type="checkbox" class="opacity-0 absolute w-full h-full peer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px] hidden absolute left-[50%] translate-x-[-50%] z-[2] top-[50%] translate-y-[-50%] peer-checked:block" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8021 4.19526C14.0625 4.45561 14.0625 4.87772 13.8021 5.13807L7.13547 11.8047C6.87512 12.0651 6.45301 12.0651 6.19266 11.8047L2.85932 8.4714C2.59898 8.21106 2.59898 7.78894 2.85932 7.5286C3.11967 7.26825 3.54178 7.26825 3.80213 7.5286L6.66406 10.3905L12.8593 4.19526C13.1197 3.93491 13.5418 3.93491 13.8021 4.19526Z" fill="white"/>
          </svg>
          <div class="w-[20px] h-[20px] peer-checked:bg-[#F97C0E] border-2 border-[#DEE2E6] peer-checked:border-transparent rounded-[4px] absolute top-0 left-0 z-[1]">
          </div>
        </span>
        <span>Metaverse</span>
      </label>
    </div>
  </div>

  <!-- genre -->
  <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
    <label for="game-genre">
      Genre
      <span class="text-[#FA5252]">*</span>
    </label>
    <input type="text" id="game-genre" required class="my-input mt-[6px]" placeholder="Enter game genre ">
  </div>

   <!-- project description -->
   <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
    <label for="project-desc">
      Project Description
    </label>
    <div class="text-[14px] text-[#888888] mt-1">Please provide a detailed description of your project</div>
    <textarea type="text" id="project-desc" class="my-input mt-3 min-h-[380px]" />
  </div>

   <!-- project link -->
   <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
    <label for="project-link">
      Link to Project
      <span class="text-[#FA5252]">*</span>
    </label>
    <input type="text" id="project-link" required class="my-input mt-[6px]" placeholder="Website, Telegram app link, etc.">
  </div>

   <!-- social media -->
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


   <!-- project status -->
   <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
    <label>
      Project Status
      <span class="text-[#FA5252]">*</span>
    </label>
    <div class="flex gap-3 mt-3">
      <div class="inline-flex gap-2 items-center select-none">
        <label class="relative flex items-center cursor-pointer" for="alpha">
          <input
            checked
            name="color"
            type="radio"
            class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
            id="alpha"
          />
          <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label class="cursor-pointer" for="alpha">
          Alpha/Beta
        </label>
      </div>
      <div class="inline-flex gap-2 items-center select-none">
        <label class="relative flex items-center cursor-pointer" for="launch">
          <input
            name="color"
            type="radio"
            class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
            id="launch"
          />
          <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label class="cursor-pointer" for="launch">
          Soft Launch
        </label>
      </div>
      <div class="inline-flex gap-2 items-center select-none">
        <label class="relative flex items-center cursor-pointer" for="live">
          <input
            name="color"
            type="radio"
            class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
            id="live"
          />
          <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label class="cursor-pointer" for="live">
          Live
        </label>
      </div>
      <div class="inline-flex gap-2 items-center select-none">
        <label class="relative flex items-center cursor-pointer" for="maintenance">
          <input
            name="color"
            type="radio"
            class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
            id="maintenance"
          />
          <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label class="cursor-pointer" for="maintenance">
          Maintenance
        </label>
      </div>
    </div>

  </div>
  <!-- project link -->
 <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
   <label>
     Project Launch Date
     <span class="text-[#FA5252]">*</span>
   </label>
   <DatePicker on:date-select={(e) => {
    console.log('hello', e.detail)
   }}/>
 </div>

</form>

<style>
  .my-input {
    @apply px-4 py-[14px] rounded-[12px] placeholder:text-[#888888] bg-[#141414] border border-[#323234] hover:outline-none
  }
</style>