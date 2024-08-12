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

// Fetch star rating for a game
async function getStarRating(slug) {
  const url = `${API_BASE_URL}/games/${slug}/counts-ratings`;
  const data = await fetchData(url);
  return data?.data?.star_rating || null;
}

// Normalize text (e.g., capitalize)
function textNormalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

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

  return {
    id: slug,
    banner: banner,
    images: galleries,
    top: top,
    networks: networks,
    players_count: null,
    star_rating: starRating,
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
  const tasks = GAMES.map(GAME => parseGameData(GAME));
  const results = await Promise.allSettled(tasks);
  const successfulResults = results
    .filter(result => result.status === 'fulfilled')
    .map(result => result.value);

  fs.writeFileSync('parsed.json', JSON.stringify(successfulResults, null, 2));
}

main().catch(console.error);
