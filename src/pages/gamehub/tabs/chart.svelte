<script>
  export let direction = "positive";
  export let string = "$1.6M";
  export let hasText = true
  export let data = [];
  // Helper function to create SVG path for charts
  function createPath(data, height) {
    const width = 100;
    const max = Math.max(...data.map(Math.abs));
    const points = data
      .map(
        (d, i) =>
          `${(i / (data.length - 1)) * width},${height - ((d + max) / (2 * max)) * height}`
      )
      .join(" ");
    return `M0,${height} ${points} L100,${height} Z`;
  }
  function createPathTest(data, height) {
    const width = 100;
    const max = Math.max(...data.map(Math.abs));
    const points = data
      .map(
        (d, i) =>
          `${(i / (data.length - 1)) * width},${height - ((d + max) / (2 * max)) * height}`
      )
      .join(" ");
    return points
  }
</script>

{#if direction === 'negative' && hasText}
  <div class="text-[#EB122C] flex space-x-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L12 13.5858L6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L11.2929 15.7071Z" fill="#EB122C"/>
    </svg>
    <span>
      {string}
    </span>
  </div>
{/if}
{#if direction === 'positive' && hasText}
  <div class="text-[#0FFF18] flex space-x-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289Z" fill="#0FFF18"/>
    </svg>
    <span>
      {string}
    </span>
  </div>
{/if}
<div class="relative w-full">
  <svg class="w-full relative h-[80px]" preserveAspectRatio="none" viewBox="0 0 100 80">
    <path
      d={createPath(data, 80)}
      fill={direction === "positive" ? "url(#paint0_linear_205_2534)" : "rgba(255,0,0,0.2)"}
      />
    <path
      d={createPath(data, 80)}
      fill="transparent"
      stroke={direction === "positive" ? "#0FFF18" : "#EB122C"}
      stroke-width="1"
      />
    <defs>
      <linearGradient id="paint0_linear_205_2534" x1="101" y1="1" x2="101" y2="76.6977" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0FFF18"/>
      <stop offset="1" stop-color="#262626" stop-opacity="0"/>
      </linearGradient>
    </defs>
  </svg>
</div>
