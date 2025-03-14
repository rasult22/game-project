<script>
import Snackbar from './snackbar.svelte';
import SucceedModal from './success-modal.svelte';

let organization_name = '';
let link_to_project = '';
let first_name = '';
let last_name = '';
let email = '';
let requestState = 'initial'
let snackbar

const onSubmit = async (e) => {

  if (organization_name && email && link_to_project && first_name && last_name) {
    try {
      requestState = 'loading';
      const response = await fetch('https://api.bizzon.io/api/organization/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          organization_name,
          email,
          link_to_project,
          first_name,
          last_name
        })
      })
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Failed to send request')
      }
      requestState = 'done';
    } catch (error) {
      requestState = 'error';
      snackbar.show(`Error: ${error.message || 'Failed to send request'}`)
    }
  }
}
</script>

{#if requestState === 'done'}
  <SucceedModal email={email} on:close={() => {
    requestState = 'initial';
    organization_name = '';
    link_to_project = '';
    first_name = '';
    last_name = '';
    email = '';
  }} />
{/if}

<Snackbar bind:this={snackbar} type="error" />

<div class="text-[36px] font-Oxanium font-medium uppercase">
  Send request
</div>
<div class="text-[#888888]">Fill out the form below and our manager will contact you as soon as possible</div>

<form on:submit|preventDefault={onSubmit}>
  <!-- org -->
  <div class="flex flex-col mt-[32px]">
    <label for="org-name">
      Organization Name
      <span class="text-[#FA5252]">*</span>
    </label>
    <input bind:value={organization_name} type="text" id="org-name" required class="my-input mt-[6px]" placeholder="Enter your organization name">
  </div>
  <div class="grid sm:grid-cols-1 sm:gap-[32px] grid-cols-2 gap-4 mt-[32px]">
    <div class="flex flex-col ">
      <label for="first-name">
        First Name
        <span class="text-[#FA5252]">*</span>
      </label>
      <input bind:value={first_name} type="text" id="first-name" required class="my-input mt-[6px]" placeholder="First name">
    </div>
     <!-- last name -->
     <div class="flex flex-col">
      <label for="last-name">
        Last Name
        <span class="text-[#FA5252]">*</span>
      </label>
      <input bind:value={last_name} type="text" id="last-name" required class="my-input mt-[6px]" placeholder="Last name">
    </div>
  </div>
    <!-- first name -->

  <!-- email -->
  <div class="flex flex-col mt-[32px]">
    <label for="email">
      Email
      <span class="text-[#FA5252]">*</span>
    </label>
    <input bind:value={email} type="email" id="email" required class="my-input mt-[6px]" placeholder="example@gmail.com">
  </div>

   <!-- project link -->
   <div class="flex flex-col mt-[32px]">
    <label for="project-link">
      Link to Project
      <span class="text-[#FA5252]">*</span>
    </label>
    <input bind:value={link_to_project} type="text" id="project-link" required class="my-input mt-[6px]" placeholder="Website, Telegram app link, etc.">
  </div>
 
  <div class="flex justify-end w-full mt-9">
    <button disabled={requestState === 'loading'} class="flex justify-center gap-2 md:w-full sm:w-full disabled:opacity-[0.5] disabled:cursor-not-allowed anim-btn rounded-[12px] py-[14px] px-9 bg-[#F97C0E]">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2076 2.29292C22.4818 2.56708 22.5727 2.975 22.441 3.33967L15.9411 21.3397C15.9317 21.3657 15.9212 21.3914 15.9096 21.4166C15.786 21.6864 15.5875 21.9151 15.3377 22.0754C15.0879 22.2357 14.7974 22.3209 14.5006 22.3209C14.2038 22.3209 13.9132 22.2357 13.6634 22.0754C13.4196 21.9189 13.2246 21.6974 13.1005 21.4359L9.75514 14.7454L3.06468 11.4001C2.80325 11.276 2.58167 11.081 2.4252 10.8372C2.2649 10.5874 2.17969 10.2968 2.17969 10C2.17969 9.70323 2.2649 9.41267 2.4252 9.16288C2.5855 8.9131 2.81414 8.71458 3.08396 8.59094C3.10916 8.57939 3.13484 8.56889 3.16091 8.55947L21.1608 2.05947C21.5255 1.92779 21.9334 2.01876 22.2076 2.29292ZM11.7173 14.1975L14.4327 19.6283L19.037 6.8777L11.7173 14.1975ZM17.6228 5.46352L4.87231 10.0679L10.303 12.7833L17.6228 5.46352Z" fill="white"/>
        </svg>
      </div>
      <span>Send</span>
    </button>
  </div>
</form>

<style>
  .my-input {
    @apply px-4 py-[14px] rounded-[12px] placeholder:text-[#888888] bg-[#141414] border border-[#323234] hover:outline-none
  }
</style>