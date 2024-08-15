import parsed from "parsed";

export const items = parsed 

export let ranking = items.map((game) => {
  return {
    id: game.id,
    image: game.banner,
    name: game.game_info.name,
    networks: game.networks,
    retention: "12%",
    retentionChange: "-2.4%",
    session: "54.8 min.",
    sessionChange: "2.4%",
    arp_dau: "$1.25",
    arp_dau_change: "2.4%",
    churn: "12%",
    churnChange: "2.4%",
    token_volume: "$7,923,903.75",
    market_cap: "$88,049,070.79",
  };
});
