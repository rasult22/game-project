<script>
  export let analytics_data
  function formatDuration(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ${seconds} second${seconds !== 1 ? 's' : ''}`;
}
</script>

<div class="bg-[#2A2A2A] p-6 text-[#D9D9D9] gap-6 grid grid-cols-3 rounded-[20px]">
  <div>
    <div>MAU</div>
    <div class="text-[24px] text-white mt-3">{analytics_data.mau.value}</div>
  </div>
  <div>
    <div>Average DAU</div>
    <div class="text-[24px] text-white mt-3">{analytics_data.avg_dau}</div>
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