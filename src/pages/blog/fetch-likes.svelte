<script>
	import { likes, likes_count, fetchLikesCount, fetchLikes } from './state.ts';
	import { onMount } from 'svelte';
  
  onMount(async () => {
    if (!$likes) {
      $likes = await fetchLikes()
    }
    if (!$likes_count) {
      $likes_count = await fetchLikesCount()
    }
  })
</script>