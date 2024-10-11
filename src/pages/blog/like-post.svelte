<script lang="ts">
	import { auth } from '~/store/auth';
	import { likes, likes_count, fetchLikes, fetchLikesCount } from './state.ts';
  import {auth_modal_is_open} from '~/components/auth/state.ts'
	import pb from '~/pocketbase';
  export let id;
  
  let liked = false

  $: current = $likes_count ? $likes_count.find(p => p.post_id === id) : null

  $: likesCount = current ? current.likes : ''

  // TODO: add reative statement checking if current user liked this post

  $: {
    if ($likes) {
      const did_like = $likes.find(like => {
        return like.user_id === $auth.user?.address_full && like.post_id === id
      })
      if (did_like) {
        liked = true
      }
    }
  }

  const onClick = async () => {
    if (liked) return
    if (!$auth.isAuthorized) {
      $auth_modal_is_open = true
      return
    }
    
    if ($likes) {
      const found = $likes_count.find(x => x.post_id === id)
      if (found) {
        found.likes++
        $likes_count = $likes_count
      }
    }
    liked = true
    await pb.collection('games_posts_likes').create({
      user_id: $auth.user?.address_full,
      post_id: id
    })
    fetchLikes()
    fetchLikesCount()
  }
</script>
<div class="flex items-center gap-2">
  <button on:click|stopPropagation|preventDefault={onClick}>
    {#if liked}
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20C12 20 2 14.9091 2 8.90909C2 7.60712 2.54705 6.35847 3.52079 5.43784C4.49454 4.51721 5.81522 4 7.19231 4C9.36442 4 11.225 5.11909 12 6.90909C12.775 5.11909 14.6356 4 16.8077 4C18.1848 4 19.5055 4.51721 20.4792 5.43784C21.453 6.35847 22 7.60712 22 8.90909C22 14.9091 12 20 12 20Z" fill="#F10D43"/>
    </svg>
    {:else}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 20C12 20 2 14.9091 2 8.90909C2 7.60712 2.54705 6.35847 3.52079 5.43784C4.49454 4.51721 5.81522 4 7.19231 4C9.36442 4 11.225 5.11909 12 6.90909C12.775 5.11909 14.6356 4 16.8077 4C18.1848 4 19.5055 4.51721 20.4792 5.43784C21.453 6.35847 22 7.60712 22 8.90909C22 14.9091 12 20 12 20Z" stroke="#FF2600" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    {/if}
  </button>
  <span>
    {likesCount || ''}
  </span>
</div>