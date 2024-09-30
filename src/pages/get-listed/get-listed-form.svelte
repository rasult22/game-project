<script>
	import SucceedModal from './succeed-modal.svelte';
	import pb from '~/pocketbase';
  import DatePicker from "./date-picker.svelte";
  import ApplicationType from "./form/application-type.svelte";
  import SocialMedia from "./form/social-media.svelte";
  import ProjectStatus from "./form/project-status.svelte";
  import TokenIssued from "./form/token-issued.svelte";
  import TradedCex from "./form/traded-cex.svelte";
  import IsProjectListed from "./form/is-project-listed.svelte";
  import ProjectFiles from "./form/project-files.svelte";
  import Team from "./form/team.svelte";

  let logoBlockRef
  let loading = false
  let done = false
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

  let logoFiles = []
  let additionalFiles = []

  let social_media = {
    discord: '',
    facebook: '',
    twitter: '',
    instagram: '',
    telegram: '',
    other: ''
  }

  let project_launch_date = ''
  
  let project_status = {
    value: 'alpha-beta',
    name: 'Alpha/Beta'
  }

  let token_issued_val = 'token-no'
  let token_issued = {
    network_of_issuance: '',
    token_ticker: '',
    contract_address: ''
  }

  let traded_cex_val = 'traded-no'
  let exchange_name = ''

  let project_listed_val = 'project-listed-no'
  let aggregator_name = ''

  let team = {
    name: '',
    role: '',
    social_media: '',
    email: '',
    members: [{
      name: '',
      role: '',
      social_media: ''
    }]
  }

  const onSubmit = async () => {
    if (!logoFiles.length) {
      // handle focusing and show required message

      logoBlockRef && logoBlockRef.scrollIntoView()
      return
    }
    loading = true

    let formData = new FormData()
    formData.append('project_name', project_name)
    formData.append('studio_name', studio_name)
    formData.append('genre', genre)
    formData.append('project_description', project_description)
    formData.append('link_to_project', link_to_project)

    const application_type_str = Object.keys(application_type).filter(key => {
      return application_type[key]
    }).join(', ')
    formData.append('application_type', application_type_str)
    formData.append('social_media', JSON.stringify(social_media))
    formData.append('project_launch_date', project_launch_date)
    formData.append('project_status', project_status.name)
    formData.append('token_issued', JSON.stringify({...token_issued, token_issued_val}))
    formData.append('traded_cex', JSON.stringify({
      traded_cex_val,
      exchange_name
    }))
    formData.append('project_listed', JSON.stringify({
      project_listed_val,
      aggregator_name
    }))
    formData.append('team', JSON.stringify(team))

    logoFiles.forEach((logo, index) => {
      if (index === 0) {
        formData.append('project_logo', logo)
      }
    })
    additionalFiles.forEach(file => {
      formData.append('additional_files', file)
    })
    try {
      await pb.collection('games_get_listed').create(formData)
      done = true
    } catch(e) {
      // something went wrong
    } finally {
      loading = false
    }
  }
</script>
{#if loading}
  <div class="fixed w-full h-full flex items-center justify-center top-[50%] translate-y-[-50%] backdrop-blur-sm z-[1000] left-[50%] translate-x-[-50%]">
    <div class="bg-[#1E1E1E] p-4 rounded-md">
        <svg class="animate-spin" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM4.8 24C4.8 34.6039 13.3961 43.2 24 43.2C34.6039 43.2 43.2 34.6039 43.2 24C43.2 13.3961 34.6039 4.8 24 4.8C13.3961 4.8 4.8 13.3961 4.8 24Z" fill="#464648"/>
          <path d="M39.5154 42.3104C37.1109 44.3479 34.3286 45.8919 31.3273 46.8541C28.3261 47.8163 25.1647 48.178 22.0237 47.9185C18.8826 47.659 15.8235 46.7833 13.0209 45.3415C10.2183 43.8997 7.72711 41.92 5.68959 39.5154L9.35168 36.4124C10.9817 38.336 12.9746 39.9198 15.2167 41.0732C17.4588 42.2266 19.9061 42.9272 22.4189 43.1348C24.9317 43.3424 27.4609 43.0531 29.8619 42.2833C32.2628 41.5135 34.4887 40.2783 36.4124 38.6483L39.5154 42.3104Z" fill="#F97C0E"/>
        </svg>
    </div>
  </div>
{/if}
{#if done}
  <SucceedModal />
{/if}


<div class="text-[36px] font-Oxanium font-medium uppercase">
  Send request
</div>
<div class="text-[#888888]">Fill out the form below and our manager will contact you as soon as possible</div>
<form on:submit|preventDefault={onSubmit} class="mt-6">
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
   <ProjectStatus bind:active_status={project_status}/>

  <!-- launch date -->
 <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
   <label>
     Project Launch Date
     <span class="text-[#FA5252]">*</span>
   </label>
   <div class="mt-2">
    <DatePicker on:date-select={(e) => {
      project_launch_date = e.detail
    }}/>
   </div>
 </div>

 <div class="my-8"/>

 <div class="text-[24px] font-medium">
  Token information
 </div>

 <!-- token issed -->
  <TokenIssued bind:radio={token_issued_val} bind:network_of_issuance={token_issued.network_of_issuance} bind:token_ticker={token_issued.token_ticker} bind:contract_address={token_issued.contract_address} />

  <TradedCex bind:radio={traded_cex_val} bind:exchange_name={exchange_name} />

  <!-- project-listed -->
  <IsProjectListed bind:radio={project_listed_val} bind:aggregator_name={aggregator_name} />

  <!-- project files -->
  <div bind:this={logoBlockRef} />
  <ProjectFiles bind:logoFiles={logoFiles} bind:additionalFiles={additionalFiles} />

  <div class="text-[24px] pt-16 font-medium">
    Team
  </div>
  <Team bind:name={team.name} bind:role={team.role} bind:social_media={team.social_media} bind:email={team.email} bind:members={team.members} />
  
  <div class="my-8">
    <label class="flex items-center space-x-2 cursor-pointer select-none">
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
  <button disabled={!agreed} class="w-[50%] flex justify-center gap-2 md:w-full sm:w-full disabled:opacity-[0.5] disabled:cursor-not-allowed anim-btn rounded-[12px] py-[14px] px-9 bg-[#F97C0E]">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2076 2.29292C22.4818 2.56708 22.5727 2.975 22.441 3.33967L15.9411 21.3397C15.9317 21.3657 15.9212 21.3914 15.9096 21.4166C15.786 21.6864 15.5875 21.9151 15.3377 22.0754C15.0879 22.2357 14.7974 22.3209 14.5006 22.3209C14.2038 22.3209 13.9132 22.2357 13.6634 22.0754C13.4196 21.9189 13.2246 21.6974 13.1005 21.4359L9.75514 14.7454L3.06468 11.4001C2.80325 11.276 2.58167 11.081 2.4252 10.8372C2.2649 10.5874 2.17969 10.2968 2.17969 10C2.17969 9.70323 2.2649 9.41267 2.4252 9.16288C2.5855 8.9131 2.81414 8.71458 3.08396 8.59094C3.10916 8.57939 3.13484 8.56889 3.16091 8.55947L21.1608 2.05947C21.5255 1.92779 21.9334 2.01876 22.2076 2.29292ZM11.7173 14.1975L14.4327 19.6283L19.037 6.8777L11.7173 14.1975ZM17.6228 5.46352L4.87231 10.0679L10.303 12.7833L17.6228 5.46352Z" fill="white"/>
      </svg>
    </div>
    <span>Send</span>
  </button>
</form>

<style>
  .my-input {
    @apply px-4 py-[14px] rounded-[12px] placeholder:text-[#888888] bg-[#141414] border border-[#323234] hover:outline-none
  }
</style>