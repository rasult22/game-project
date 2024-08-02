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
  ];
</script>

<div class="bg-gray-900 text-white p-4 rounded-lg">
  {#each data as item, index}
    <div class="grid grid-cols-8 items-center py-2 text-sm group d">
      <div class="col-span-2 flex items-center gap-3">
        <span class="w-14 text-left">
          <span class="group-hover:hidden">
            {index + 1}
          </span>
          <button class="bg-[#27B1EC] py-1 px-[6px] hidden group-hover:block rounded-[12px]">Add</button>
        </span>
        <img src="/game-logo.png" alt={item.name} class="w-10 h-10 rounded-md" />
        <div class="flex flex-col">
          <span class="font-semibold">{item.name}</span>
          <div class="flex items-center gap-1">
            <img width="20" height="20" src="/solana-icon.svg" alt="">
            <img width="20" height="20" src="/ton-icon.svg" alt="">
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
      <div class="text-right">{item.value1}</div>
      <div class="text-right">{item.value2}</div>
    </div>
  {/each}
</div>