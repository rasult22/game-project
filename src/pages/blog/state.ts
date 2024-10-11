import { writable } from "svelte/store";
import pb from "~/pocketbase";

export const likes = writable<any>(null)
export const likes_count = writable<any>(null)

export const fetchLikesCount = async () => {
  return await pb.collection('games_posts_likes_count').getFullList()
}
export const fetchLikes = async () => {
  return await pb.collection('games_posts_likes').getFullList()
}