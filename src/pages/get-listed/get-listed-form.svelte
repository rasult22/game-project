<script>
  import DatePicker from "./date-picker.svelte";
  import ApplicationType from "./form/application-type.svelte";
  import SocialMedia from "./form/social-media.svelte";
  import ProjectStatus from "./form/project-status.svelte";
  import TokenIssued from "./form/token-issued.svelte";
  import TradedCex from "./form/traded-cex.svelte";
  import IsProjectListed from "./form/is-project-listed.svelte";
  import ProjectFiles from "./form/project-files.svelte";
  import Team from "./form/team.svelte";

  let agreed = false

  let project_name = ''
  let studio_name = ''
  let genre = ''
  let project_description = ''
  let link_to_project = ''

  let application_type = {
    game: false,
    application: false,
    metaverse: false
  }

  let social_media = {
    discord: '',
    facebook: '',
    twitter: '',
    instagram: '',
    telegram: '',
    other: ''
  }
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
    <input bind:value={project_name} type="text" id="project-name" required class="my-input mt-[6px]" placeholder="Enter the project name">
  </div>
  <!-- studio -->
  <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
    <label for="studio-name">
      Studio Name
    </label>
    <input bind:value={studio_name} type="text" id="studio-name" class="my-input mt-[6px]" placeholder="Enter the studio name">
  </div>


  <!-- Application type -->
  <ApplicationType bind:game_checked={application_type.game} bind:application_checked={application_type.application} bind:metaverse_checked={application_type.metaverse} />

  <!-- genre -->
  <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
    <label for="game-genre">
      Genre
      <span class="text-[#FA5252]">*</span>
    </label>
    <input bind:value={genre} type="text" id="game-genre" required class="my-input mt-[6px]" placeholder="Enter game genre ">
  </div>

   <!-- project description -->
   <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
    <label for="project-desc">
      Project Description
    </label>
    <div class="text-[14px] text-[#888888] mt-1">Please provide a detailed description of your project</div>
    <textarea bind:value={project_description} type="text" id="project-desc" class="my-input mt-3 min-h-[380px]" />
  </div>

   <!-- project link -->
  <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
    <label for="project-link">
      Link to Project
      <span class="text-[#FA5252]">*</span>
    </label>
    <input bind:value={link_to_project} type="text" id="project-link" required class="my-input mt-[6px]" placeholder="Website, Telegram app link, etc.">
  </div>

   <!-- social media -->
   <SocialMedia bind:discord={social_media.discord} bind:twitter={social_media.twitter} bind:facebook={social_media.facebook} bind:instagram={social_media.instagram} bind:telegram={social_media.telegram} bind:other={social_media.other} />

   <!-- project status -->
   <ProjectStatus />

  <!-- launch date -->
 <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
   <label>
     Project Launch Date
     <span class="text-[#FA5252]">*</span>
   </label>
   <div class="mt-2">
    <DatePicker on:date-select={(e) => {
      console.log('hello', e.detail)
    }}/>
   </div>
 </div>

 <div class="my-8"/>

 <div class="text-[24px] font-medium">
  Token information
 </div>

 <!-- token issed -->
  <TokenIssued />

  <TradedCex />

  <!-- project-listed -->
  <IsProjectListed />

  <!-- project files -->
  <ProjectFiles />

  <div class="text-[24px] pt-16 font-medium">
    Team
  </div>
  <Team />
  
  <div class="my-8">
    <label class="flex items-center space-x-2 cursor-pointer">
      <!-- The wrapper span will contain the custom checkbox -->
      <span class="relative w-[20px] h-[20px] ">
        <input bind:checked={agreed} type="checkbox" class="opacity-0 absolute w-full h-full peer">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px] hidden absolute left-[50%] translate-x-[-50%] z-[2] top-[50%] translate-y-[-50%] peer-checked:block" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8021 4.19526C14.0625 4.45561 14.0625 4.87772 13.8021 5.13807L7.13547 11.8047C6.87512 12.0651 6.45301 12.0651 6.19266 11.8047L2.85932 8.4714C2.59898 8.21106 2.59898 7.78894 2.85932 7.5286C3.11967 7.26825 3.54178 7.26825 3.80213 7.5286L6.66406 10.3905L12.8593 4.19526C13.1197 3.93491 13.5418 3.93491 13.8021 4.19526Z" fill="white"/>
        </svg>
        <div class="w-[20px] h-[20px] peer-checked:bg-[#F97C0E] border-2 border-[#DEE2E6] peer-checked:border-transparent rounded-full absolute top-0 left-0 z-[1]">
        </div>
      </span>
      <span>I agree to the Terms and Conditions</span>
    </label>
  </div>
  <button disabled={!agreed} class="w-[50%] disabled:opacity-[0.5] disabled:cursor-not-allowed anim-btn rounded-[12px] py-[14px] px-9 bg-[#F97C0E]">
    Submit
  </button>
</form>

<style>
  .my-input {
    @apply px-4 py-[14px] rounded-[12px] placeholder:text-[#888888] bg-[#141414] border border-[#323234] hover:outline-none
  }
</style>