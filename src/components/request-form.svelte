<script>
  import ButtonTab from './button-tab.svelte'
  import BaseInput from './base/base-input.svelte'
  let activeTab = 'investor'

</script>
<div class="mt-6 flex">
  <ButtonTab bind:active={activeTab} />
</div>
<form class="py-4 space-y-4" on:submit|preventDefault>
  <BaseInput id="name" placeholder={activeTab === 'investor' ? 'Name' : 'Project Name'} required />
  <div class="flex space-x-4">
    <BaseInput id="telegram" placeholder="Telegram" required />
    <BaseInput id="mail" placeholder="Mail" required />
  </div>
  <div>
    <textarea placeholder="About your project (Optional)" class="w-full block bg-transparent border focus:outline-none focus:border-white placeholder:text-[#888888] border-[#888] py-[14px] px-3 rounded-[12px] appearance-none peer" />
  </div>
  <button class="flex justify-center items-center space-x-2 w-full active:opacity-80 active:scale-95 transition-all py-4 px-9 bg-white text-black rounded-[12px]">
    <span>Send</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2071 2.29292C22.4813 2.56708 22.5722 2.975 22.4406 3.33967L15.9406 21.3397C15.9312 21.3657 15.9207 21.3914 15.9092 21.4166C15.7855 21.6864 15.587 21.9151 15.3372 22.0754C15.0874 22.2357 14.7969 22.3209 14.5001 22.3209C14.2033 22.3209 13.9127 22.2357 13.6629 22.0754C13.4191 21.9189 13.2242 21.6974 13.1 21.4359L9.75465 14.7454L3.0642 11.4001C2.80276 11.276 2.58118 11.081 2.42471 10.8372C2.26441 10.5874 2.1792 10.2968 2.1792 10C2.1792 9.70323 2.26441 9.41267 2.42471 9.16288C2.58501 8.9131 2.81366 8.71458 3.08347 8.59094C3.10868 8.57939 3.13435 8.56889 3.16042 8.55947L21.1604 2.05947C21.525 1.92779 21.9329 2.01876 22.2071 2.29292ZM11.7168 14.1975L14.4322 19.6283L19.0365 6.8777L11.7168 14.1975ZM17.6223 5.46352L4.87182 10.0679L10.3025 12.7833L17.6223 5.46352Z" fill="#141517"/>
    </svg>
  </button>
</form>