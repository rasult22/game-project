<script>
  import BizzonRating from "~/components/bizzon-rating.svelte";
  import Chart from "./chart.svelte";
  import { fade } from "svelte/transition";
  import { moneyFormatter } from "~/utils/utils";
  import Comments from "./Comments.svelte";
  export let backedBy;
  export let on_chain_performance;
  export let team_profile;
  export let sale_exchanges
  export let game_id

  $: volume_rank = on_chain_performance.volume_rank || 'N/A'
  $: volume_24h_changed = on_chain_performance.volume_24h_changed || null
  $: market_cap_7d_changed = on_chain_performance.market_cap_7d_changed || null
  $: current_roi = on_chain_performance.current_roi
  $: current_roi_7d_changed = on_chain_performance.current_roi_7d_changed
  $: circulating_supply = on_chain_performance.circulating_supply

</script>

<div transition:fade>
  <!-- 1 -->
  <div
    class="bg-gradient-to-r from-[#FDFC47] to-[#24FE41] text-black rounded-[20px] py-[20px] px-[72px] flex justify-center items-center space-x-9"
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
      <div class="mt-[10px]">
        Based on UAW, Social, Transactions, and Market cap
      </div>
    </div>
    <div>
      <div class="text-[32px] font-bold w-[106px] h-[106px] flex items-center justify-center rounded-full border-[10px] border-[#0000004D]">N\A</div>

      <!-- <svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="53" cy="53" r="48" stroke="black" stroke-opacity="0.3" stroke-width="10"/>
        <path d="M52 101C64.7304 101 76.9394 95.9429 85.9411 86.9411C94.9429 77.9394 100 65.7304 100 53C100 40.2696 94.9429 28.0606 85.9411 19.0589C76.9394 10.0571 64.7304 5 52 5" stroke="white" stroke-width="10" stroke-linecap="round"/>
        <path d="M29.8798 68H24.2548L34.4963 38.9091H41.002L51.2576 68H45.6326L37.8628 44.875H37.6355L29.8798 68ZM30.0645 56.5938H45.4054V60.8267H30.0645V56.5938ZM58.3851 68H52.7601L63.0016 38.9091H69.5073L79.763 68H74.138L66.3681 44.875H66.1408L58.3851 68ZM58.5698 56.5938H73.9107V60.8267H58.5698V56.5938Z" fill="#1B1B1B"/>
      </svg> -->
    </div>
  </div>

  <!-- 2 -->
  <div class="flex md:flex-wrap sm:space-x-0 md:space-x-0 md:gap-4 sm:gap-4 sm:flex-wrap space-x-4 mt-4">
    <!-- team profile -->
    <div class="p-[20px] min-w-[292px] md:max-w-none sm:max-w-none md:w-full sm:w-full border border-[#888] rounded-[20px]">
      <!-- head -->
      <div class="flex">
        <div class="w-[50%] mr-auto">
          <div class="text-[20px] font-semibold">Team profile</div>
          <div class="text-[#B0B0B2]">Highly experienced and skilled</div>
        </div>
        <BizzonRating rating="" />
      </div>
      <!-- list -->
      <div class="mt-6 space-y-4 max-h-[180px] -mr-4 pr-4 overflow-auto">
        {#each (team_profile.staffs || []) as member}
          <div class="flex items-center border-b border-[#3F3F3F] pb-2">
            <img class="rounded-full" src={member.avatar ? 'https://d1j2c9jkfhu70p.cloudfront.net/' + member.avatar : '/media/avatar.png'} width="45" alt="" />
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
              <img
                width="24"
                src="/media/linkedin-icon.svg"
                alt=""
              />
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
        <div class="w-[50%]">
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
        <BizzonRating rating="" />
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
        <div class="text-[#B0B0B2] mt-[10px] leading-[150%]">
          Better than N% of the market
        </div>
      </div>
      <BizzonRating rating="" />
    </div>

    <!-- cards -->
    <div class="flex md:flex-wrap sm:flex-wrap gap-4 mt-6">
      <div class="p-[14px] md:w-full sm:w-full bg-[#2A2A2A] rounded-[16px] overflow-hidden">
        <!-- head -->
        <div class="flex justify-between">
          <div class="font-semibold">Volume 24h</div>
          <BizzonRating rating="" />
        </div>
        <!-- chart -->
        <div class="ml-[-5px]">
          <!-- <Chart direction="positive" data={[120, 24,32,22,101,120,90,150, 24,32,22,101,120,90, 200]} /> -->
          {#if volume_24h_changed}
            <Chart
              direction={volume_24h_changed < 0 ? 'negative' : 'positive'}
              string={moneyFormatter(1).format(volume_24h_changed)}
              data={on_chain_performance.token_price_30d_timeseries.map(el => el.token_price)}
            />
          {/if}
        </div>
      </div>
      <div class="p-[14px] md:w-full sm:w-full bg-[#2A2A2A] rounded-[16px] overflow-hidden">
        <!-- head -->
        <div class="flex justify-between">
          <div class="font-semibold">Market Cap</div>
          <BizzonRating rating="" />
        </div>
        <!-- chart -->
        <div class="ml-[-5px]">
          {#if market_cap_7d_changed}
            <Chart
              direction={market_cap_7d_changed > -1 ? 'positive' : 'negative'}
              string={moneyFormatter(0).format(market_cap_7d_changed)}
              data={[
                20, 24, 32, 22, 101, 120, 90, 250, 24, 32, 22, 101, 120, 90, 400,
              ]}
            />
          {/if}
          <!-- <Chart direction="negative" data={[-24,-32,-22,101,-120,-90,150, 24,32,22,-101,-120,-90, -200, 0]} /> -->
        </div>
      </div>
      <div class="p-[14px] md:w-full sm:w-full bg-[#2A2A2A] rounded-[16px] overflow-hidden">
        <!-- head -->
        <div class="flex justify-between">
          <div class="font-semibold">Quarterly close</div>
          <BizzonRating rating="" />
        </div>
        <!-- chart -->
        <div class="ml-[-5px]">
          <Chart
            direction="negative"
            string="$4.9M"
            data={[
              20, 24, 32, 22, 101, 120, 90, -250, -24, -32, -22, -101, -120,
              -90, -400,
            ]}
          />
          <!-- <Chart direction="negative" data={[-24,-32,-22,101,-120,-90,150, 24,32,22,-101,-120,-90, -200, 0]} /> -->
        </div>
      </div>
    </div>

    <!-- token price -->
    <div class="mt-6">
      <div class="text-[20px] font-semibold">Token price</div>
      <div class="flex sm:flex-wrap gap-4 mt-3">
        <!-- Volume 24h -->
        <div
          class="p-[14px] sm:w-full w-[50%] bg-[#2A2A2A] rounded-[16px] overflow-hidden"
        >
          <!-- head -->
          <div class="flex justify-between">
            <div class="font-semibold">Volume 24h</div>
            <div class="flex space-x-2">
              <span> Current ROI </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.00104 3.24408C6.33299 3.56951 6.33299 4.09715 6.00104 4.42259L4.90208 5.5H18.15C18.6194 5.5 19 5.8731 19 6.33333C19 6.79357 18.6194 7.16667 18.15 7.16667H4.90208L6.00104 8.24408C6.33299 8.56951 6.33299 9.09715 6.00104 9.42259C5.6691 9.74803 5.1309 9.74803 4.79896 9.42259L2.24896 6.92259C1.91701 6.59715 1.91701 6.06951 2.24896 5.74408L4.79896 3.24408C5.1309 2.91864 5.6691 2.91864 6.00104 3.24408ZM14.999 11.5774C15.3309 11.252 15.8691 11.252 16.201 11.5774L18.751 14.0774C19.083 14.4028 19.083 14.9305 18.751 15.2559L16.201 17.7559C15.8691 18.0814 15.3309 18.0814 14.999 17.7559C14.667 17.4305 14.667 16.9028 14.999 16.5774L16.0979 15.5H2.85C2.38056 15.5 2 15.1269 2 14.6667C2 14.2064 2.38056 13.8333 2.85 13.8333H16.0979L14.999 12.7559C14.667 12.4305 14.667 11.9028 14.999 11.5774Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <!-- chart -->
          <div class="flex items-center mt-6">
            <div class="text-[32px] w-[91%]">{current_roi ? moneyFormatter(3).format(current_roi) : 'N/A'}</div>
            {#if current_roi_7d_changed}
              <Chart
                direction={current_roi_7d_changed < 0 ? 'negative' : 'positive'}
                hasText={false}
                data={on_chain_performance.token_price_30d_timeseries.map(el => el.token_price)}
              />
            {/if}
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
    <div class="flex items-center">
      <div class="w-[55%] mr-8">
        <div class="text-[20px] font-semibold">Venture document analysis</div>
        <div class="mt-[10px]">
          Ensure transparency in our project documentation with our data
        </div>
      </div>
      <BizzonRating rating="" />
    </div>
    <!-- cards -->
    <div class="flex md:grid md:grid-cols-2 md:gap-4 sm:grid sm:grid-cols-2 sm:gap-4 justify-between mt-4">
      <div
        class="border rounded-[16px] flex flex-col items-center justify-center border-[#888] p-4"
      >
        <div class="font-semibold min-w-[138px] text-center">White Paper</div>
        <BizzonRating rating="" />
      </div>
      <div
        class="border rounded-[16px] flex flex-col items-center justify-center border-[#888] p-4"
      >
        <div class="font-semibold min-w-[138px] text-center">Website</div>
        <BizzonRating rating="" />
      </div>
      <div
        class="border rounded-[16px] flex flex-col items-center justify-center border-[#888] p-4"
      >
        <div class="font-semibold min-w-[138px] text-center">Tokenomic</div>
        <BizzonRating rating="" />
      </div>
      <div
        class="border rounded-[16px] flex flex-col items-center justify-center border-[#888] p-4"
      >
        <div class="font-semibold min-w-[138px] text-center">Fundraising</div>
        <BizzonRating rating="" />
      </div>
    </div>
  </div>

  <!-- 5: metrics -->
  <div
    class="mt-6 p-[20px] sm:p-3 bg-gradient-to-r from-[#78EBFF] via-[#12D8FA] to-[#1FA2FF] rounded-[20px] text-[#1B1B1B]"
  >
    <!-- head  -->
    <div class="flex items-center">
      <div class="w-[55%] mr-8">
        <div class="text-[20px] font-semibold">Game users metrics</div>
        <div class="mt-[10px]">
          Explore the game through a numerical lens with the aid of our compiled
          statistics
        </div>
      </div>
      <BizzonRating rating="" />
    </div>
    <!-- cards -->
    <div class="flex sm:grid sm:grid-cols-2 gap-4 mt-6">
      <div
        class="bg-[#2A2A2A] min-w-[170px] sm:min-w-[126px] text-white opacity-90 rounded-[16px] p-[14px]"
      >
        <div class="font-semibold">Retention</div>
        <div class="ml-[-5px]">
          <Chart
            direction="positive"
            string="N\A"
            data={[
              120, 24, 32, 22, 101, 120, 90, 150, 24, 32, 22, 101, 120, 90, 200,
            ]}
          />
        </div>
      </div>
      <div
        class="bg-[#2A2A2A] min-w-[170px] sm:min-w-[126px] text-white opacity-90 rounded-[16px] p-[14px]"
      >
        <div class="font-semibold">Session Lenght</div>
        <div class="ml-[-5px]">
          <Chart
            direction="positive"
            string="N\A"
            data={[
              120, 24, 32, 22, 101, 120, 90, 150, 24, 32, 22, 101, 120, 90, 200,
            ]}
          />
        </div>
      </div>
      <div
        class="bg-[#2A2A2A] min-w-[170px] sm:min-w-[126px] text-white opacity-90 rounded-[16px] p-[14px]"
      >
        <div class="font-semibold">ARPDAU</div>
        <div class="ml-[-5px]">
          <Chart
            direction="positive"
            string="N\A"
            data={[
              120, 24, 32, 22, 101, 120, 90, 150, 24, 32, 22, 101, 120, 90, 200,
            ]}
          />
        </div>
      </div>
      <div
        class="bg-[#2A2A2A] min-w-[170px] sm:min-w-[126px] text-white opacity-90 rounded-[16px] p-[14px]"
      >
        <div class="font-semibold">Churn Rate</div>
        <div class="ml-[-5px]">
          <Chart
            direction="positive"
            string="N\A"
            data={[
              120, 24, 32, 22, 101, 120, 90, 150, 24, 32, 22, 101, 120, 90, 200,
            ]}
          />
        </div>
      </div>
    </div>
  </div>

  <div class="mt-12">
    <Comments game_id={game_id} />
  </div>
</div>
