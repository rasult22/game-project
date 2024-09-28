<script>
  export let name = ''
  export let role = ''
  export let social_media = ''
  export let email = ''

  export let members = [
    {
      name: '',
      role: '',
      social_media: ''
    }
  ]

  $: {
    console.log(members)
  }
</script>
<div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[20px]">
  <label for="your-name">
    Your Name
    <span class="text-[#FA5252]">*</span>
  </label>
  <input bind:value={name} type="text" id="your-name" required class="my-input mt-[6px]" placeholder="Enter your name">
</div>

<div class="flex w-[50%] sm:flex-wrap md:w-full sm:w-full gap-3">
  <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[20px]">
    <label for="specify-role">
      Specify your Role in Project
      <span class="text-[#FA5252]">*</span>
    </label>
    <input bind:value={role} type="text" id="specify-role" required class="my-input mt-[6px]" placeholder="Enter your role in project">
  </div>
  <div class="flex flex-col w-[50%] md:w-full sm:w-full sm:mt-0 mt-[20px]">
    <label for="team-social-media">
      Social Media
      <span class="text-[#FA5252]">*</span>
    </label>
    <input bind:value={social_media} type="text" id="team-social-media" required class="my-input mt-[6px]" placeholder="Telegram, LinkedIn, etc.">
  </div>
</div>

<div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[20px]">
  <label for="contact-email">
    Contact email
    <span class="text-[#FA5252]">*</span>
  </label>
  <input bind:value={email} type="text" id="contact-email" required class="my-input mt-[6px]" placeholder="Enter your name">
</div>

{#each members as member, index (index) }
  <div class="mt-[32px]">
    <div class="font-semibold">Team member {index + 1}</div>
    <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[20px]">
      <label for="team-member-1">
        Name
      </label>
      <input bind:value={member.name} type="text" id="team-member-1" class="my-input mt-[6px]" placeholder="Enter name">
    </div>
    <div class="flex w-[50%] sm:flex-wrap md:w-full sm:w-full gap-3">
      <div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[20px]">
        <label for="specify-role">
          Role in Project
        </label>
        <input bind:value={member.role} type="text" id="specify-role" class="my-input mt-[6px]" placeholder="Enter your role in project">
      </div>
      <div class="flex flex-col w-[50%] md:w-full sm:w-full sm:mt-0 mt-[20px]">
        <label for="team-social-media">
          Social Media
        </label>
        <input bind:value={member.social_media} type="text" id="team-social-media" class="my-input mt-[6px]" placeholder="Telegram, LinkedIn, etc.">
      </div>
    </div>
  </div>
{/each}

<div class="w-[50%] md:w-full sm:w-full mt-[32px]">
  <button on:click|preventDefault={() => {
    members.push( {
      name: '',
      role: '',
      social_media: ''
    })
    members = members
  }} class="text-[#A3A3A3] anim-btn mx-auto flex gap-3 border border-dashed py-3 px-9 rounded-[12px]">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4ZM4 7C4 4.23858 6.23858 2 9 2C11.7614 2 14 4.23858 14 7C14 9.76142 11.7614 12 9 12C6.23858 12 4 9.76142 4 7ZM19 7C19.5523 7 20 7.44772 20 8V10H22C22.5523 10 23 10.4477 23 11C23 11.5523 22.5523 12 22 12H20V14C20 14.5523 19.5523 15 19 15C18.4477 15 18 14.5523 18 14V12H16C15.4477 12 15 11.5523 15 11C15 10.4477 15.4477 10 16 10H18V8C18 7.44772 18.4477 7 19 7ZM7 16C6.20435 16 5.44129 16.3161 4.87868 16.8787C4.31607 17.4413 4 18.2043 4 19V21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21V19C2 17.6739 2.52678 16.4021 3.46447 15.4645C4.40215 14.5268 5.67392 14 7 14H11C12.3261 14 13.5979 14.5268 14.5355 15.4645C15.4732 16.4021 16 17.6739 16 19V21C16 21.5523 15.5523 22 15 22C14.4477 22 14 21.5523 14 21V19C14 18.2043 13.6839 17.4413 13.1213 16.8787C12.5587 16.3161 11.7956 16 11 16H7Z" fill="#A3A3A3"/>
    </svg>
    <span>Add member</span>
  </button>
</div>
<style>
  .my-input {
    @apply px-4 py-[14px] rounded-[12px] placeholder:text-[#888888] bg-[#141414] border border-[#323234] hover:outline-none
  }
</style>