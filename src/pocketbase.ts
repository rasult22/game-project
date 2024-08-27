import pocketbase from 'pocketbase'
type Post = {
  id: string,
  updated: string,
  pic: string,
  content: string,
  excerpt: string,
  title: string,
  recommended_posts: Post[]
}
const pb = new pocketbase('https://rasult22.pockethost.io/')
pb.autoCancellation(false)
export const items = await pb.collection('games_posts').getFullList<Post>({
  expand: 'games_posts'
})

export default pb