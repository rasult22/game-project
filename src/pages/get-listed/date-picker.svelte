<script>
import flatpickr from "flatpickr";
import { createEventDispatcher, onDestroy, onMount } from "svelte";
import 'flatpickr/dist/flatpickr.min.css';
const dispatch = createEventDispatcher()
let fp;
onMount(() => {
  fp = flatpickr('#date-picker', {
    onChange: (dates, currentDateString, self, data) => {
      dispatch('date-select', currentDateString)
    }
  })
})
onDestroy(() => {
  fp && fp.destroy()
})
</script>
<div class="relative">
  <svg class="absolute cursor-pointer left-3 top-[50%] translate-y-[-50%]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66667 1.66699C7.1269 1.66699 7.5 2.04009 7.5 2.50033V3.33366H12.5V2.50033C12.5 2.04009 12.8731 1.66699 13.3333 1.66699C13.7936 1.66699 14.1667 2.04009 14.1667 2.50033V3.33366H15C16.3807 3.33366 17.5 4.45295 17.5 5.83366V15.8337C17.5 17.2144 16.3807 18.3337 15 18.3337H5C3.61929 18.3337 2.5 17.2144 2.5 15.8337V5.83366C2.5 4.45295 3.61929 3.33366 5 3.33366H5.83333V2.50033C5.83333 2.04009 6.20643 1.66699 6.66667 1.66699ZM5.83333 5.00033H5C4.53976 5.00033 4.16667 5.37342 4.16667 5.83366V8.33366H15.8333V5.83366C15.8333 5.37342 15.4602 5.00033 15 5.00033H14.1667V5.83366C14.1667 6.2939 13.7936 6.66699 13.3333 6.66699C12.8731 6.66699 12.5 6.2939 12.5 5.83366V5.00033H7.5V5.83366C7.5 6.2939 7.1269 6.66699 6.66667 6.66699C6.20643 6.66699 5.83333 6.2939 5.83333 5.83366V5.00033ZM15.8333 10.0003H4.16667V15.8337C4.16667 16.2939 4.53976 16.667 5 16.667H15C15.4602 16.667 15.8333 16.2939 15.8333 15.8337V10.0003ZM8.33333 12.5003C8.33333 12.0401 8.70643 11.667 9.16667 11.667H10C10.4602 11.667 10.8333 12.0401 10.8333 12.5003V15.0003C10.8333 15.4606 10.4602 15.8337 10 15.8337C9.53976 15.8337 9.16667 15.4606 9.16667 15.0003V13.3337C8.70643 13.3337 8.33333 12.9606 8.33333 12.5003Z" fill="#464648"/>
  </svg>
  <input id="date-picker" type="text" required class="my-input" placeholder="--/--/----">
  <svg on:click={() => {
    fp && fp.clear()
  }} class="absolute cursor-pointer right-3 top-[50%] translate-y-[-50%]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5312 12.4717C3.79155 12.7321 4.21366 12.7321 4.47401 12.4717L8.0026 8.94313L11.5312 12.4717C11.7915 12.7321 12.2137 12.7321 12.474 12.4717C12.7344 12.2114 12.7344 11.7893 12.474 11.5289L8.94541 8.00033L12.474 4.47173C12.7344 4.21138 12.7344 3.78927 12.474 3.52892C12.2137 3.26857 11.7915 3.26857 11.5312 3.52892L8.0026 7.05752L4.47401 3.52892C4.21366 3.26857 3.79155 3.26857 3.5312 3.52892C3.27085 3.78927 3.27085 4.21138 3.5312 4.47173L7.0598 8.00033L3.5312 11.5289C3.27085 11.7893 3.27085 12.2114 3.5312 12.4717Z" fill="#868E96"/>
  </svg>    
</div>


<style>
  .my-input {
    @apply px-10 py-[14px] rounded-[12px] block w-full placeholder:text-[#888888] bg-[#141414] border border-[#323234] hover:outline-none
  }
</style>