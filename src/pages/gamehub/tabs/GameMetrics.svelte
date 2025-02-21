<script>
  export let analytics_data
  function formatDuration(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ${seconds} second${seconds !== 1 ? 's' : ''}`;
}
</script>

<div class="bg-[#2A2A2A] p-6 text-[#D9D9D9] gap-6 grid sm:grid-cols-1 grid-cols-3 rounded-[20px]">
  <div>
    <div>MAU</div>
    <div class="flex items-center gap-2 mt-3">
      <div class="text-[24px] text-white">{analytics_data.mau.value}</div>
      <div class="flex items-center " 
        class:text-[#EB122C]={analytics_data.mau.trend === 'down'}
        class:text-[#0FFF18]={analytics_data.mau.trend !== 'down'}
      >
        <svg class:rotate-180={analytics_data.mau.trend === 'down'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289Z" fill="currentColor"/>
        </svg>
        <div class="">{analytics_data.mau.difference}</div>
      </div>
    </div>
  </div>
  <div>
    <div>Average DAU</div>
    <div class="text-[24px] text-white mt-3">{analytics_data.avg_dau.toFixed(0)}</div>
  </div>
  <div>
    <div>Registrations</div>
    <div class="text-[24px] text-white mt-3">{analytics_data.session.unique_users}</div>
  </div>
  <div>
    <div>All Users</div>
    <div class="text-[24px] text-white mt-3">{analytics_data.session.unique_users}</div>
  </div>
  <div>
    <div>Session Length <span class="text-[#888888]">/minutes</span></div>
    <div class="text-white mt-3 text-[20px]">{formatDuration(analytics_data.session.avg_duration)}</div>
  </div>
  <!-- <div>
    <div>Retention Rate</div>
    <div class="text-[24px] text-white mt-3">2,4K</div>
  </div>
  <div>
    <div>Retention Rate <span class="text-[#888888]">/1 day</span></div>
    <div class="text-[24px] text-white mt-3">2,4K</div>
  </div>
  <div>
    <div>Retention Rate <span class="text-[#888888]">/7 days</span></div>
    <div class="text-[24px] text-white mt-3">2,4K</div>
  </div>
  <div>
    <div>Retention Rate <span class="text-[#888888]">/30 days</span></div>
    <div class="text-[24px] text-white mt-3">2,4K</div>
  </div> -->
</div>