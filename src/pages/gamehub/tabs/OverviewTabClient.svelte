<script>
	import GameMetrics from './GameMetrics.svelte';
	import Comments from './Comments.svelte';
  import BizzonRating from "~/components/bizzon-rating.svelte";
  import Chart from "./chart.svelte";
  import { fade } from "svelte/transition";
  import { moneyFormatter } from "~/utils/utils";
  import { onMount } from "svelte";
  export let backedBy;
  export let team_profile;
  export let sale_exchanges
  export let token_name
  export let white_paper_link
  export let erase_venture;
  export let game_id
  export let analytics_id

  let data;
  let history_data;
  
  let analytics_data;
  $: price = token_info ? token_info.quote.USD.price : null
  $: price_history = token_info_historical ? token_info_historical.quotes.map(obj => obj.quote.USD.price) : []
  $: volume_24h =  token_info ? token_info.quote.USD.volume_24h : null
  $: volume_24h_changed =  token_info ? token_info.quote.USD.volume_change_24h : null
  $: volume_24h_history = token_info_historical ? token_info_historical.quotes.map(obj => obj.quote.USD.volume_24h) : []
  $: market_cap =  token_info ? token_info.quote.USD.market_cap : null
  $: market_cap_history = token_info_historical ? token_info_historical.quotes.map(obj => obj.quote.USD.market_cap) : []
  $: fdv = token_info ? token_info.quote.USD.fully_diluted_market_cap : null
  $: token_info = data && data.data ? data.data[token_name.toUpperCase()][0] : null
  $: token_info_historical = history_data && history_data.data ? history_data.data[token_name.toUpperCase()][0] : null
  $: circulating_supply = token_info ?  (token_info.circulating_supply / token_info.total_supply) * 100 : null

  onMount(async () => {
    if (analytics_id) {
      analytics_data = await fetch(`https://api.bizzon.io/api/analytics/tma/${analytics_id}/stats`).then(r => r.json())
    }
    if (token_name) {
      data = await fetch(`https://api.bizzon.io/api/market/currency/quotes/latest?symbol=${token_name}`).then(r => r.json())
      history_data = await fetch(`https://api.bizzon.io/api/market/currency/quotes/historical?symbol=${token_name}`).then(r => r.json())
    }
  })
</script>

<div transition:fade>
  <!-- 1 -->
  <div
    class="bg-gradient-to-r from-[#FDFC47] to-[#24FE41] text-black rounded-[20px] py-[20px] px-[72px] sm:gap-2 sm:px-[16px] flex sm:space-x-0 sm:flex-col sm:justify-start justify-center items-center space-x-9"
  >
    <div>
      <div class="flex items-center space-x-2">
        <span class="text-[20px] font-semibold">Bizzon ranking</span>
        <svg
        
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 8C11 7.44772 11.4477 7 12 7H12.01C12.5623 7 13.01 7.44772 13.01 8C13.01 8.55228 12.5623 9 12.01 9H12C11.4477 9 11 8.55228 11 8ZM10 12C10 11.4477 10.4477 11 11 11H12C12.5523 11 13 11.4477 13 12V15C13.5523 15 14 15.4477 14 16C14 16.5523 13.5523 17 13 17H12C11.4477 17 11 16.5523 11 16V13C10.4477 13 10 12.5523 10 12Z"
            fill="#2A2A2A"
          />
        </svg>
      </div>
      <div class="mt-[10px] ">
        Based on UAW, Social, Transactions, and Market cap
      </div>
    </div>
    <div>
      <div class="text-[32px] font-bold w-[106px] h-[106px] flex items-center justify-center rounded-full border-[10px] border-[#0000004D]">N/A</div>
    </div>
  </div>

  <!-- 2 -->
  <div class="grid grid-cols-2 sm:grid-cols-1  md:flex-wrap sm:space-x-0 md:space-x-0 md:gap-4 sm:gap-4 sm:flex-wrap space-x-4 mt-4">
    <!-- team profile -->
    <div class="p-[20px] min-w-[292px] md:max-w-none sm:max-w-none md:w-full sm:w-full border border-[#888] rounded-[20px]">
      <!-- head -->
      <div class="flex">
        <div class="w-[100%] mr-auto">
          <div class="text-[20px] font-semibold">Team profile</div>
          <div class="text-[#B0B0B2]">Highly experienced and skilled</div>
        </div>
        <!-- <BizzonRating rating="AA" /> -->
      </div>
      <!-- list -->
      <div class="mt-6 space-y-4 max-h-[180px] -mr-4 pr-4 overflow-auto">
        {#each (team_profile.staffs || []) as member}
          <div class="flex items-center border-b border-[#3F3F3F] pb-2">
            <img width={45} height={45} class="w-[45px] h-[45px] object-cover rounded-full" src={member.avatar && member.avatar.includes('https') ? 'https://d1j2c9jkfhu70p.cloudfront.net/' + member.avatar : member.avatar || '/media/avatar.png'} alt="" />
            <div class="ml-2">
              <div class="text-[14px] leading-[100%] font-medium">
                {member.name}
              </div>
              <div class="text-[12px] leading-[100%] text-[#888888] mt-[6px]">
                {member.position}
              </div>
            </div>
            <div class="flex space-x-1 ml-auto">
              <a
              target="_blank"
              class="active:scale-95 active:opacity-80 transition-all"
              href={member.link}
            > 
              {#if member.link_type === 'telegram'}
                <img
                  width="24"
                  src="/media/telegram-icon.svg"
                  alt=""
                />
              {:else}
                <img
                  width="24"
                  src="/media/linkedin-icon.svg"
                  alt=""
                />
              {/if}
            </a>
              <!-- {#each member.links as link}
                {#if link.type === "telegram"}
                  <a
                    class="active:scale-95 active:opacity-80 transition-all"
                    href={link.link}
                    ><img
                      width="24"
                      src="/media/telegram-icon.svg"
                      alt=""
                    /></a
                  >
                {/if}
                {#if link.type === "instagram"}
                  <a
                    class="active:scale-95 active:opacity-80 transition-all"
                    href={link.link}
                    ><img
                      width="24"
                      src="/media/instagram-icon.svg"
                      alt=""
                    /></a
                  >
                {/if}
                {#if link.type === "linkedin"}
                 
                {/if}
                {#if link.type === "facebook"}
                  <a
                    class="active:scale-95 active:opacity-80 transition-all"
                    href={link.link}
                    ><img
                      width="24"
                      src="/media/facebook-icon.svg"
                      alt=""
                    /></a
                  >
                {/if}
              {/each} -->
            </div>
          </div>
        {/each}
      </div>
    </div>
    <!-- top bakers -->
    <div class="p-[20px] md:max-w-none sm:max-w-none md:w-full sm:w-full border border-[#888] rounded-[20px]">
      <!-- head -->
      <div class="flex space-x-[32px]">
        <div class="w-[100%]">
          <div class="flex items-center space-x-[10px]">
            <span class="text-[20px] font-semibold">TOP Funds</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 8C18 6.89543 18.8954 6 20 6C21.1046 6 22 6.89543 22 8C22 9.10457 21.1046 10 20 10C19.8838 10 19.7699 9.99009 19.6591 9.97107L16.8775 13.3091C16.9567 13.5244 17 13.7572 17 14C17 15.1046 16.1046 16 15 16C13.8954 16 13 15.1046 13 14C13 13.8208 13.0236 13.6472 13.0677 13.482L10.518 10.9323C10.3528 10.9764 10.1792 11 10 11C9.87421 11 9.75113 10.9884 9.63178 10.9662L5.88687 15.3352C5.96014 15.5432 6 15.767 6 16C6 17.1046 5.10457 18 4 18C2.89543 18 2 17.1046 2 16C2 14.8954 2.89543 14 4 14C4.12579 14 4.24887 14.0116 4.36822 14.0338L8.11313 9.66476C8.03986 9.45678 8 9.23304 8 9C8 7.89543 8.89543 7 10 7C11.1046 7 12 7.89543 12 9C12 9.17916 11.9764 9.35282 11.9323 9.51804L14.482 12.0677C14.6472 12.0236 14.8208 12 15 12C15.1162 12 15.2301 12.0099 15.3409 12.0289L18.1225 8.6909C18.0433 8.47557 18 8.24284 18 8Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="text-[#B0B0B2] leading-[150%]">
            Funds and investors invested in the project
          </div>
        </div>
        <!-- <BizzonRating rating="AAA" /> -->
      </div>
      <!-- bakers -->
      <div class="flex flex-wrap items-center justify-center gap-3 pt-10 mt-1">
        {#each backedBy as backer, index (index)}
          {#if index < 5}
            <img width="132" height="72" src={backer.logo} alt="">
          {/if}
        {/each}
      </div>
    </div>
  </div>

  <!-- 3: On chain performance -->
  <div class="p-[20px] border border-[#888] rounded-[20px] mt-4">
    <!-- head -->
    <div class="flex items-center space-x-8">
      <div>
        <div class="text-[20px] leading-[120%] font-semibold">
          On-Chain perfomance
        </div>
      </div>
    </div>

    <!-- cards -->
    <div class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-6">
      <div class="p-[14px] w-full md:w-full flex flex-col sm:w-full bg-[#2A2A2A] rounded-[16px] overflow-hidden">
        <!-- head -->
        <div class="flex justify-between">
          <div class="font-semibold">Price</div>
        </div>
        <!-- chart -->
        <div class="ml-[-5px] mt-6">
          <!-- <Chart direction="positive" data={[120, 24,32,22,101,120,90,150, 24,32,22,101,120,90, 200]} /> -->
          {#if price}
            <Chart
              direction={price < 0 ? 'negative' : 'positive'}
              string={moneyFormatter(5).format(price)}
              data={price_history}
            />
          {:else}
          <div class="text-[20px] font-semibold pl-1">
            N/A
          </div>  
          {/if}
        </div>
      </div>
      <div class="p-[14px] md:w-full flex flex-col sm:w-full bg-[#2A2A2A] rounded-[16px] overflow-hidden">
        <!-- head -->
        <div class="flex justify-between">
          <div class="font-semibold">Volume 24h</div>
        </div>
        <!-- chart -->
        <div class="ml-[-5px] mt-6">
          <Chart
            direction={volume_24h_changed > 0 ? 'positive' : 'negative'}
            string={moneyFormatter(2).format(volume_24h)}
            data={volume_24h_history}
          />
          <!-- <Chart direction="negative" data={[-24,-32,-22,101,-120,-90,150, 24,32,22,-101,-120,-90, -200, 0]} /> -->
        </div>
      </div>
      <div class="p-[14px] md:w-full sm:w-full bg-[#2A2A2A] rounded-[16px] overflow-hidden">
        <!-- head -->
        <div class="flex justify-between">
          <div class="font-semibold">Market Cap 1M month</div>
        </div>
        <!-- chart -->
        <div class="ml-[-5px] mt-6">
          {#if market_cap}
            <Chart
              direction={market_cap > -1 ? 'positive' : 'negative'}
              string={moneyFormatter(0).format(market_cap)}
              data={market_cap_history}
            />
          {:else}
            <div class="text-[20px] font-semibold pl-1">
              N/A
            </div>  
          {/if}
          <!-- <Chart direction="negative" data={[-24,-32,-22,101,-120,-90,150, 24,32,22,-101,-120,-90, -200, 0]} /> -->
        </div>
      </div>
      
    </div>

    <!-- token price -->
    <div class="mt-6">
      <div class="flex sm:flex-wrap gap-4 mt-3">
        <!-- Volume 24h -->
        <div
          class="p-[14px] sm:w-full w-[50%] bg-[#2A2A2A] rounded-[16px] overflow-hidden"
        >
          <!-- head -->
          <div class="flex justify-between">
            <div class="font-semibold">FDV</div>
            <div class="flex space-x-2">
            </div>
          </div>
          <!-- chart -->
          <div class="flex items-center mt-6">
            <div class="text-[32px] w-[91%]">{fdv ? moneyFormatter(3).format(fdv) : 'N/A'}</div>
            <Chart
              direction={'positive'}
              hasText={false}
              data={[20, 18, 15, 18, 20, 19, 18, 12, 13, 14,15,16,17,18,19,20,21,22,23,24,25,26,27,26,25,24,23,22,23,24,25,26,27,28,29,30,31,32,31,30,29,30,31,32,33,34,35,36,37,38]}
            />
          </div>
        </div>
        <!-- Circulating supply -->
        <div
          class="p-[14px] sm:w-full w-[50%] bg-[#2A2A2A] rounded-[16px] overflow-hidden"
        >
          <!-- head -->
          <div class="flex justify-between">
            <div class="font-semibold">Circulating supply</div>
          </div>
          <!-- chart -->
          <div class="text-[32px] w-[91%] mt-4">{circulating_supply ? circulating_supply.toFixed(1) : 'N/A'}%</div>
          <div class="relative mt-4">
            <div class="bg-[#888888] w-full h-[5px] rounded-[2px]">
              <div style={`width: ${circulating_supply ? circulating_supply.toFixed(1) : 0}%`} class="rounded-[2pxs] h-[5px] bg-[#0FFF18]"></div>
            </div>
            <div class="text-[14px] text-[#888888] flex justify-between mt-3">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <div class="text-[20px] font-semibold">Top sale exchanges</div>
      <div class="flex gap-4 mt-4 h-[64px]">
        {#if sale_exchanges}
          {#each sale_exchanges as item }
            <img width="64" height="64" src={item.icon} alt="" />          
          {/each}
        {:else}
          <img width="64" src="/optimized/sale-1.webp" alt="" />
          <img width="64" src="/optimized/sale-2.webp" alt="" />
          <img width="64" src="/optimized/sale-3.webp" alt="" />
          <img width="64" src="/optimized/sale-4.webp" alt="" />
          <img width="64" src="/optimized/sale-5.webp" alt="" />
        {/if}
      </div>
    </div>
  </div>

  <!-- 4: White board -->
  <div class="mt-6 p-[20px] bg-white rounded-[20px] text-[#1B1B1B]">
    <!-- head -->
    <div class="flex sm:grid items-center">
      <div class="w-[55%] sm:w-full mr-8">
        <div class="text-[20px] font-semibold">Venture document analysis</div>
        <div class="mt-[10px]">
          Ensure transparency in our project documentation with our data
        </div>
      </div>
      <BizzonRating white rating={erase_venture ? '' :'AA'} />
      {#if white_paper_link}
        <a href={white_paper_link} target="_blank" class="inline-flex rounded-[16px] shadow-md items-center py-2 px-4 self-start ml-auto gap-1 hover:opacity-65 bg-orange-500 text-white text-[20px]">Whitepaper
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L15.7071 16.7071C15.3166 17.0976 14.6834 17.0976 14.2929 16.7071C13.9024 16.3166 13.9024 15.6834 14.2929 15.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L14.2929 8.70711C13.9024 8.31658 13.9024 7.68342 14.2929 7.29289Z" fill="currentColor"/>
          </svg>          
        </a>
      {/if}
    </div>
    <!-- cards -->
    <div class="flex md:grid md:grid-cols-2 md:gap-4 sm:grid sm:grid-cols-2 sm:gap-4 justify-between mt-4">
      <div
        class="border rounded-[16px] flex flex-col items-center justify-center border-[#888] p-4"
      >
        <div class="font-semibold min-w-[138px] text-center">Whitepaper</div>
        <BizzonRating white rating={erase_venture ? '' : 'A'} />
      </div>
      <div
        class="border rounded-[16px] flex flex-col items-center justify-center border-[#888] p-4"
      >
        <div class="font-semibold min-w-[138px] text-center">Website</div>
        <BizzonRating white rating={erase_venture ? '' : 'AA'} />
      </div>
      <div
        class="border rounded-[16px] flex flex-col items-center justify-center border-[#888] p-4"
      >
        <div class="font-semibold min-w-[138px] text-center">Tokenomic</div>
        <BizzonRating white rating={erase_venture ? '' : 'A'} />
      </div>
      <div
        class="border rounded-[16px] flex flex-col items-center justify-center border-[#888] p-4"
      >
        <div class="font-semibold min-w-[138px] text-center">Fundraising</div>
        <BizzonRating white rating={erase_venture ? '' : 'AAA'} />
      </div>
    </div>
  </div>

  <!-- 5: metrics -->
  <div
    class="mt-6 p-[20px] sm:p-3 bg-gradient-to-r border border-[#888] from-[#1B1B1B] via-[#1B1B1B] to-[#1B1B1B] rounded-[20px] text-[#B0B0B2]"
  >
    <!-- head  -->
    <div class="flex items-center">
      <div class="w-[55%] mr-auto">
        <div class="text-[20px] font-semibold text-white">Game users metrics ≈</div>
        <div class="mt-[10px]">
          Explore the game through a numerical lens with the aid of our compiled
          statistics
        </div>
      </div>
      <BizzonRating rating="" />
    </div>
    <div class="mt-6">
      {#if analytics_data}
        <GameMetrics {analytics_data} />
      {/if}
    </div>
  </div>

  <div class="mt-12">
    <Comments game_id={game_id} />
  </div>
</div>
