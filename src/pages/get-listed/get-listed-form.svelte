<script>
  import DatePicker from "./date-picker.svelte";
  import ApplicationType from "./form/application-type.svelte";
  import SocialMedia from "./form/social-media.svelte";
  import ProjectStatus from "./form/project-status.svelte";
  import TokenIssued from "./form/token-issued.svelte";
  import TradedCex from "./form/traded-cex.svelte";
  import IsProjectListed from "./form/is-project-listed.svelte";
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
  <ApplicationType />

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
   <SocialMedia />

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

</form>

<style>
  .my-input {
    @apply px-4 py-[14px] rounded-[12px] placeholder:text-[#888888] bg-[#141414] border border-[#323234] hover:outline-none
  }
</style>