<script>
  export let lang
  let items = [
    {
      id: -1,
      title: `Utilizing Platform Tools`,
      isOpen: false,
      content: `Ambassadors must actively use and demonstrate the platform’s features in both demo and live modes, recommending tools and games based on personal experience`,
    },
    {
      id: 1,
      title: `Content Creation`,
      isOpen: false,
      content: `Ambassadors should regularly publish articles, videos, and posts, sharing insights and experiences with the BizzonGames platform`,
    },
    {
      id: 2,
      title: `News and Event Coverage`,
      isOpen: false,
      content: `Ambassadors are responsible for keeping their audience informed about key news and events related to the project, actively promoting significant developments`,
    },
    {
      id: 3,
      title: `Brand Representation`,
      isOpen: false,
      content: `Ambassadors act as official representatives of BizzonGames on third-party platforms, in discussions, and at regional events, fostering a positive brand image`,
    },
    {
      id: 4,
      title: `Audience Engagement`,
      isOpen: false,
      content: `Ambassadors are tasked with attracting new users to BizzonGames communities on platforms like Telegram, X (formerly Twitter), Instagram, and other social media channels by creating engaging content, leading discussions, and answering questions`,
    },
    {
      id: 5,
      title: `Content Localization`,
      isOpen: false,
      content: `Ambassadors are also responsible for translating platform content into their audience’s native language, ensuring content is accessible and comprehensible`,
    },
  ]
  let items_RU = [
    {
      id: -1,
      title: `Использование инструментов платформы`,
      isOpen: false,
      content: `Амбассадоры должны активно использовать и демонстрировать возможности платформы как в демо, так и в реальном режиме, рекомендовать инструменты и игры на основе собственного опыта`,
    },
    {
      id: 1,
      title: `Создание контента`,
      isOpen: false,
      content: `Амбассадоры должны активно публиковать статьи, видео, посты и иную информацию, делясь своими мыслями и опытом использования платформы BizzonGames`,
    },
    {
      id: 2,
      title: `Освещение новостей и событий`,
      isOpen: false,
      content: `Амбассадоры должны информировать свою аудиторию о ключевых новостях и событиях, связанных с проектом, и активно распространять информацию о значимых мероприятиях`,
    },
    {
      id: 3,
      title: `Представительство бренда`,
      isOpen: false,
      content: `Амбассадоры выступают в качестве официальных представителей BizzonGames на сторонних платформах, в дискуссиях и на мероприятиях в своем регионе, создавая положительное восприятие бренда`,
    },
    {
      id: 4,
      title: `Привлечение аудитории`,
      isOpen: false,
      content: `Амбассадоры должны привлекать новых пользователей в сообщества BizzonGames на таких платформах, как Telegram, Х,  Instagram и другие социальные сети, создавая интересный и содержательный контент, проводя дискуссии и отвечая на вопросы`,
    },
    {
      id: 5,
      title: `Локализация контента`,
      isOpen: false,
      content: `Амбассадоры также несут ответственность за перевод материалов платформы на родной язык своей аудитории, адаптируя контент для лучшего понимания и восприятия`,
    },
  ]
  let prevId = 1
  
  const open_ru = (id) => {
    if (id === prevId) {
      const item = items_RU.find(x => x.id === prevId)
      if (item.isOpen) {
        item.isOpen = false
      } else {
        item.isOpen = true
      }
      items_RU = [...items_RU]
      return
    }
    
    const item = items_RU.find(x => x.id === prevId)
    item.isOpen = false
  
    const obj = items_RU.find(x => x.id === id)
    if (obj) {
      prevId = obj.id
      obj.isOpen = true
    }
    items_RU = [...items_RU]
  }
  const open = (id) => {
    if (id === prevId) {
      const item = items.find(x => x.id === prevId)
      if (item.isOpen) {
        item.isOpen = false
      } else {
        item.isOpen = true
      }
      items = [...items]
      return
    }
    
    const item = items.find(x => x.id === prevId)
    item.isOpen = false
  
    const obj = items.find(x => x.id === id)
    if (obj) {
      prevId = obj.id
      obj.isOpen = true
    }
    items = [...items]
  }
  
  
  </script>
  
  {#if lang === 'ru'}
  {#each items_RU as item (item.id) }
    <div class="relative mb-3 rounded-[8px] font-railway">
      <h6 class="mb-0">
        <button
          on:click={() => open_ru(item.id)}
          class:border-transparent={item.isOpen}
          class="relative sm:text-[16px] font-semibold border-b border-solid border-[#464648] flex items-center justify-between w-full py-4 text-left ease-in  cursor-pointer  rounded-t-1 group text-dark-500"
          data-collapse-target="collapse-1"
        >
          <span>{item.title}</span>
          <svg class={item.isOpen ? 'rotate-180 transition-all' : 'transition-all'} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8147 9.60089L14.2947 16.1209C13.5247 16.8909 12.2647 16.8909 11.4947 16.1209L4.9747 9.60089" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </h6>
      <div
        data-collapse="collapse-1"
        class={`${item.isOpen ? 'overflow-visible opacity-1 border-[#464648]' : 'h-0 border-b border-transparent opacity-0 overflow-hidden'}  transition-all border-b border-solid  duration-300 ease-in-ou`}
      >
        <div class:opacity-0={!item.isOpen} class="pb-4 transition-all leading-normal text-[#B0B0B2]">
         {item.content}
        </div>
      </div>
    </div>
  {/each}
  {:else}
  {#each items as item (item.id) }
  <div class="relative mb-3 rounded-[8px] font-railway">
    <h6 class="mb-0">
      <button
        on:click={() => open(item.id)}
        class:border-transparent={item.isOpen}
        class="relative sm:text-[16px] font-semibold border-b border-solid border-[#464648] flex items-center justify-between w-full py-4 text-left ease-in  cursor-pointer  rounded-t-1 group text-dark-500"
        data-collapse-target="collapse-1"
      >
        <span>{item.title}</span>
        <svg class={item.isOpen ? 'rotate-180 transition-all' : 'transition-all'} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.8147 9.60089L14.2947 16.1209C13.5247 16.8909 12.2647 16.8909 11.4947 16.1209L4.9747 9.60089" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </h6>
    <div
      data-collapse="collapse-1"
      class={`${item.isOpen ? 'overflow-visible opacity-1 border-[#464648]' : 'h-0 border-b border-transparent opacity-0 overflow-hidden'}  transition-all border-b border-solid  duration-300 ease-in-ou`}
    >
      <div class:opacity-0={!item.isOpen} class="pb-4 transition-all leading-normal text-[#B0B0B2]">
       {item.content}
      </div>
    </div>
  </div>
{/each}
  {/if}
  
  