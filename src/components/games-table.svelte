<script>
  import ChevronDown from './icons/ChevronDown.svelte'
  import ChevronUp from './icons/ChevronUp.svelte'

  export let data = [
    {
      id: 1,
      name: "The SandBox",
      percentage: "12%",
      percentageChange: "-2.4%",
      time: "54.8 min.",
      timeChange: "2.4%",
      price: "$1.25",
      priceChange: "2.4%",
      volume: "12%",
      volumeChange: "2.4%",
      value1: "$7,923,903.75",
      value2: "$88,049,070.79"
    },
    {
      id: 1,
      name: "The SandBox",
      percentage: "12%",
      percentageChange: "-2.4%",
      time: "54.8 min.",
      timeChange: "2.4%",
      price: "$1.25",
      priceChange: "2.4%",
      volume: "12%",
      volumeChange: "2.4%",
      value1: "$7,923,903.75",
      value2: "$88,049,070.79"
    },
    {
      id: 1,
      name: "The SandBox",
      percentage: "12%",
      percentageChange: "-2.4%",
      time: "54.8 min.",
      timeChange: "2.4%",
      price: "$1.25",
      priceChange: "2.4%",
      volume: "12%",
      volumeChange: "2.4%",
      value1: "$7,923,903.75",
      value2: "$88,049,070.79"
    },
    {
      id: 1,
      name: "The SandBox",
      percentage: "12%",
      percentageChange: "-2.4%",
      time: "54.8 min.",
      timeChange: "2.4%",
      price: "$1.25",
      priceChange: "2.4%",
      volume: "12%",
      volumeChange: "2.4%",
      value1: "$7,923,903.75",
      value2: "$88,049,070.79"
    },
    {
      id: 1,
      name: "The SandBox",
      percentage: "12%",
      percentageChange: "-2.4%",
      time: "54.8 min.",
      timeChange: "2.4%",
      price: "$1.25",
      priceChange: "2.4%",
      volume: "12%",
      volumeChange: "2.4%",
      value1: "$7,923,903.75",
      value2: "$88,049,070.79"
    },
    {
      id: 1,
      name: "The SandBox",
      percentage: "12%",
      percentageChange: "-2.4%",
      time: "54.8 min.",
      timeChange: "2.4%",
      price: "$1.25",
      priceChange: "2.4%",
      volume: "12%",
      volumeChange: "2.4%",
      value1: "$7,923,903.75",
      value2: "$88,049,070.79"
    },
    {
      id: 1,
      name: "The SandBox",
      percentage: "12%",
      percentageChange: "-2.4%",
      time: "54.8 min.",
      timeChange: "2.4%",
      price: "$1.25",
      priceChange: "2.4%",
      volume: "12%",
      volumeChange: "2.4%",
      value1: "$7,923,903.75",
      value2: "$88,049,070.79"
    },
    {
      id: 1,
      name: "The SandBox",
      percentage: "12%",
      percentageChange: "-2.4%",
      time: "54.8 min.",
      timeChange: "2.4%",
      price: "$1.25",
      priceChange: "2.4%",
      volume: "12%",
      volumeChange: "2.4%",
      value1: "$7,923,903.75",
      value2: "$88,049,070.79"
    },
    {
      id: 1,
      name: "The SandBox",
      percentage: "12%",
      percentageChange: "-2.4%",
      time: "54.8 min.",
      timeChange: "2.4%",
      price: "$1.25",
      priceChange: "2.4%",
      volume: "12%",
      volumeChange: "2.4%",
      value1: "$7,923,903.75",
      value2: "$88,049,070.79"
    },
    {
      id: 1,
      name: "The SandBox",
      percentage: "12%",
      percentageChange: "-2.4%",
      time: "54.8 min.",
      timeChange: "2.4%",
      price: "$1.25",
      priceChange: "2.4%",
      volume: "12%",
      volumeChange: "2.4%",
      value1: "$7,923,903.75",
      value2: "$88,049,070.79"
    },
    {
      id: 1,
      name: "The SandBox",
      percentage: "12%",
      percentageChange: "-2.4%",
      time: "54.8 min.",
      timeChange: "2.4%",
      price: "$1.25",
      priceChange: "2.4%",
      volume: "12%",
      volumeChange: "2.4%",
      value1: "$7,923,903.75",
      value2: "$88,049,070.79"
    },
  ];
</script>

<div class="bg-transparent space-y-3 w-full text-white p-4 rounded-lg">
  <div class="grid border-b border-[#787575] mb-4 text-center grid-cols-8 items-center py-2 text-sm group d">
    <div class="col-span-2 flex space-x-[24px]">
      <div class="text-left text-[#787575]">Rank</div>
      <div class="text-left">Name</div>
    </div>
    <div>Retention</div>
    <div>Session Lenght</div>
    <div>ARPDAU</div>
    <div>Churn Rate</div>
    <div class="text-center">Token Volume</div>
    <div class="text-center">Market cap</div>
  </div>  
  {#each data as item, index}
    <div class="grid grid-cols-8 items-center py-2 text-sm group d">
      <div class="col-span-2 flex items-center gap-3">
        <span class="w-14 text-left">
          <span class="group-hover:hidden">
            {index + 1}
          </span>
          <button class="bg-[#27B1EC] active:scale-95 transition-all py-1 px-[6px] hidden group-hover:block rounded-[12px]">Add</button>
        </span>
        <img src="/game-project/media/game-logo.png" alt={item.name} class="w-[52px] h-[52px] rounded-md" />
        <div class="flex flex-col">
          <span class="font-semibold">{item.name}</span>
          <div class="flex items-center gap-1">
            <img width="20" height="20" src="/game-project/media/solana-icon.svg" alt="">
            <img width="20" height="20" src="/game-project/media/ton-icon.svg" alt="">
          </div>
        </div>
      </div>
      <div class="text-center">
        <span>{item.percentage}</span>
        <div class="flex items-center justify-center text-red-500">
          <ChevronDown class="w-4 h-4" />
          <span>{item.percentageChange}</span>
        </div>
      </div>
      <div class="text-center">
        <span>{item.time}</span>
        <div class="flex items-center justify-center text-green-500">
          <ChevronUp class="w-4 h-4" />
          <span>{item.timeChange}</span>
        </div>
      </div>
      <div class="text-center">
        <span>{item.price}</span>
        <div class="flex items-center justify-center text-green-500">
          <ChevronUp class="w-4 h-4" />
          <span>{item.priceChange}</span>
        </div>
      </div>
      <div class="text-center">
        <span>{item.volume}</span>
        <div class="flex items-center justify-center text-green-500">
          <ChevronUp class="w-4 h-4" />
          <span>{item.volumeChange}</span>
        </div>
      </div>
      <div class="text-center">{item.value1}</div>
      <div class="text-center">{item.value2}</div>
    </div>
  {/each}
</div>