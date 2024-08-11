const mobox = {
  id: "mobox", // айди игры
  images: [
    "/game-project/media/game-slide-1.png",
    "/game-project/media/game-slide-2.png",
    "/game-project/media/game-slide-3.png",
    "/game-project/media/game-slide-4.png",
  ], // Картинки для слайдера
  top: 1, // место в рейтинге
  networks: ['solana', 'ton'], // блокчейн сети
  players_count: 2349, // данные о кол-ве игроков за последние 7 дней
  game_info: {
    name: 'MOBOX', // имя игры
    studio: 'MOBOX Team', // студия разработчик
    social_level: 95, 
    bizzon_rating: 'SS',
    release_date: new Date().toISOString(), // дата релиза
    devices: ['ios', 'android', 'web', 'desktop'], // поддерживаемые платформы
    backed_by: [
      {name: 'Bitkraft Ventures', logo: '/game-project/media/vc.svg'},
      {name: 'Bitkraft Ventures', logo: '/game-project/media/vc.svg'},
      {name: 'Bitkraft Ventures', logo: '/game-project/media/vc.svg'},
      {name: 'Bitkraft Ventures', logo: '/game-project/media/vc.svg'},
      {name: 'Bitkraft Ventures', logo: '/game-project/media/vc.svg'},
    ], // бейкеры игры
    tags: ['Metaverse', 'Casual', 'Platform'], // теги
    description: 'MOBOX is a community-driven GameFi platform empowering users by rewarding them for their engagement and enjoyment. By using innovative tokenomics ($MBOX allocation), utilizing finance and games. Whilst also combining the best of DeFi and NFTs to create a truly unique and everlasting FREE TO PLAY, PLAY TO EARN ECOSYSTEM' // описание игры
  },
  game_logo: "/game-project/media/game-card.png", // изображение игры, которая показывается в списке игр
}
export let items = [
  {
    ...mobox,
    id: 1
  },
  {
    ...mobox,
    id: 2
  },
  {
    ...mobox,
    id: 3
  },
  {
    ...mobox,
    id: 4
  },
  {
    ...mobox,
    id: 5
  },
  {
    ...mobox,
    id: 6
  },
  {
    ...mobox,
    id: 7
  },
  {
    ...mobox,
    id: 8
  },
  {
    ...mobox,
    id: 9
  },
  {
    ...mobox,
    id: 10
  },
  {
    ...mobox,
    id: 11
  },
  {
    ...mobox,
    id: 12
  },
  {
    ...mobox,
    id: 13
  },
  {
    ...mobox,
    id: 14
  },
  {
    ...mobox,
    id: 15
  },

];

export let ranking = items.map(game => {
  return {
    id: game.id,
    image: game.game_logo,
    name: game.game_info.name,
    retention: "12%",
    retentionChange: "-2.4%",
    session: "54.8 min.",
    sessionChange: "2.4%",
    arp_dau: "$1.25",
    arp_dau_change: "2.4%",
    churn: "12%",
    churnChange: "2.4%",
    token_volume: "$7,923,903.75",
    market_cap: "$88,049,070.79"
  }
})