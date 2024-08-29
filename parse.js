import axios from 'axios';
import fs from 'fs';

// Constants
const GAMES = [
  "THE SANDBOX", "AXIE INFINITY", "THETAN ARENA", "LEAGUE OF KINGDOMS", 
  "SIDUS HEROES", "MONSTERRA", "XANA", "ILLUVIUM", 
  "PLANET IX", "ASPO WORLD", "GUNSTAR METAVERSE", 
  "ELDARUNE", "BINARYX", "BLOCKCHAIN MONSTER HUNT",
];

const API_BASE_URL = 'https://v3.gamefi.org/api/v1';

async function getAboutData (name) {
  console.log(name)
  const url = `https://gamefi.org/_next/data/tXDdh8MBBD4dngKMHDr0s/games/${name}.json`;
  const data = await fetchData(url);

  return {
    introduction: data.pageProps.gameData.introduction,
    roadmap_text: data.pageProps.gameData.roadmap_text,
    features_text: data.pageProps.gameData.features_text,
    play_mode: data.pageProps.gameData.play_mode,
    play_to_earn_model: data.pageProps.gameData.play_to_earn_model,
    white_paper: data.pageProps.gameData.white_paper,
  }
}

// Utility to perform HTTP GET request with error handling
async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    return null; // or handle the error as needed
  }
}

// Fetch game data by name
async function getGameByName(name) {
  const url = `${API_BASE_URL}/games/filter?limit=60&sort=gamefi_rank&order=asc&q=${name}&page=1&&include_gamefi_rank=true`;
  return await fetchData(url);
}

async function getAnalyticData(name) {
  const url = `${API_BASE_URL}/games/${name}/on-chain-performance`
  return await fetchData(url)
}

// Fetch studio name for a game
async function getStudio(name) {
  const url = `${API_BASE_URL}/games/${name}/top-game-studios`;
  const data = await fetchData(url);
  return data?.data?.items?.[0]?.name || 'Unknown Studio';
}

// Fetch game galleries
async function getGalleries(slug) {
  const url = `${API_BASE_URL}/games/${slug}/game-galleries`;
  const data = await fetchData(url);
  const metadata = data?.data?.metadata || {};
  const galleries = data?.data?.item?.galleries || [];
  return galleries.map(g => `https://d1j2c9jkfhu70p.cloudfront.net/${metadata.media?.[g.directus_files_id]}`);
}

// Fetch social score for a game
async function getSocialScore(slug) {
  const url = `${API_BASE_URL}/games/${slug}/social-scores`;
  const data = await fetchData(url);
  return data?.data?.item?.social_score || 0;
}

async function getSocialData(slug) {
  const twitter_url_7d = `https://biz.companionai.tech/api/social/twitter/${slug}/stat?time=7d`
  const twitter_url_30d = `https://biz.companionai.tech/api/social/twitter/${slug}/stat?time=30d`
  const tg_group_url_7d = `https://biz.companionai.tech/api/social/tg/group/${slug}/stat?time=7d`
  const tg_group_url_30d = `https://biz.companionai.tech/api/social/tg/group/${slug}/stat?time=30d`
  const tg_channel_url_7d = `https://biz.companionai.tech/api/social/tg/channel/${slug}/stat?time=7d`
  const tg_channel_url_30d = `https://biz.companionai.tech/api/social/tg/channel/${slug}/stat?time=30d`
  try {

    const twitter_data_7d = await fetchData(twitter_url_7d)
    const twitter_data_30d = await fetchData(twitter_url_30d)
    const tg_group_data_7d = await fetchData(tg_group_url_7d)
    const tg_group_data_30d = await fetchData(tg_group_url_30d)
    const tg_channel_data_7d = await fetchData(tg_channel_url_7d)
    const tg_channel_data_30d = await fetchData(tg_channel_url_30d)
 
    return {
      twitter_data_7d,
      twitter_data_30d,
      tg_group_data_7d,
      tg_group_data_30d,
      tg_channel_data_7d,
      tg_channel_data_30d
    }
  } catch(e) {
    console.error('error with game: ', slug, ' | error:', e)
  }
}

// Fetch star rating for a game
async function getStarRating(slug) {
  const url = `${API_BASE_URL}/games/${slug}/counts-ratings`;
  const data = await fetchData(url);
  return data?.data || null;
}

async function getComments(slug) {
  const data = await getStarRating(slug)
  if (data) {
    let url = `https://v3.gamefi.org/api/v1/reviews?collection=games&collection_id=${data.collection_id}`
    const comments = await fetchData(url)

    return comments.data.items
  }
  return null
}

// Normalize text (e.g., capitalize)
function textNormalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
function sleep (ms) {
  return new Promise((r) => {
    setTimeout(r, ms)
  })
}

async function getTeamProfile(slug) {
  const url = `${API_BASE_URL}/games/${slug}/top-game-studios`;
  const data = await fetchData(url);
  if (data.data && data.data.items[0]) {
    let rank;
    if (data.data.metadata && data.data.metadata.others) {
      if (data.data.metadata.others.team_rank) {
        rank = data.data.metadata.others.team_rank
      }
    }
    return {staffs: data.data.items[0].staffs, rank }
  }
}
// TEAM PROFILE
// https://v3.gamefi.org/api/v1/games/the-sandbox/top-game-studios

// Parse game data and structure it
async function parseGameData(gameName) {
  const normalizedGameName = textNormalize(gameName);
  const game = await getGameByName(normalizedGameName);

  if (!game || !game.data || !game.data.items || game.data.items.length === 0) {
    console.warn(`No data found for game: ${gameName}`);
    return null;
  }

  const gameData = game.data.items[0];
  const metadata = game.data.metadata || {};
  const slug = gameData.slug;
  const name = gameData.name;
  const top = gameData.gamefi_rank?.gamefi_rank || 'N/A';
  const networks = gameData.networks.map(g => g.network);
  const releaseDate = gameData.published_at || 'Unknown';
  const tags = gameData.categories.map(g => g.name);
  const description = gameData.excerpt || 'No description available';
  const banner = `https://d1j2c9jkfhu70p.cloudfront.net/${metadata.media?.[gameData.vertical_thumbnail]}`;
  const gameLogo = `https://d1j2c9jkfhu70p.cloudfront.net/${metadata.media?.[gameData.logos?.[0]?.desktop]}`;

  const backers = (gameData.backers || []).map(g => ({
    name: g.name || 'Unknown',
    logo: `https://d1j2c9jkfhu70p.cloudfront.net/${metadata.media?.[g.logo]}`
  }));

  const studio = await getStudio(slug);
  const galleries = await getGalleries(slug);
  const socialLevel = await getSocialScore(slug);
  const starRating = await getStarRating(slug);
  const onChainPerformance = await getAnalyticData(slug)
  const teamProfile = await getTeamProfile(slug)
  const social_data = await getSocialData(slug)
  const about = await getAboutData(slug)
  const comments  = await getComments(slug)

  return {
    id: slug,
    banner: banner,
    images: galleries,
    top: top,
    networks: networks,
    players_count: Number((Math.random() * 10000).toFixed(0)),
    star_rating: starRating,
    on_chain_performance: onChainPerformance,
    team_profile: teamProfile,
    social_data,
    about,
    comments,
    game_info: {
      name: name,
      studio: studio,
      social_level: socialLevel,
      bizzon_rating: null,
      release_date: releaseDate,
      devices: [],
      backed_by: backers,
      tags: tags,
      description: description,
      game_logo: gameLogo,
    }
  };
}

// Main function to handle processing of all games
async function main() {
  let gameArray = []
  for (const GAME of GAMES) {
    try {
      const gameData = await parseGameData(GAME);
      if (gameData) {
        gameArray.push(gameData)
        console.log('parsed: '+ GAME);
      }
    } catch(error) {
      console.error(`Failed to fetch data for ${GAME}:`, error.message);
    }
    await sleep(10000)
  }



  // const tasks = GAMES.map(GAME => parseGameData(GAME));
  // const results = await Promise.allSettled(tasks);
  // const successfulResults = results
  //   .filter(result => result.status === 'fulfilled')
  //   .map(result => result.value);

  fs.writeFileSync('parsed.json', JSON.stringify(gameArray, null, 2));
}

main().catch(console.error);
