<script>
  import { comments_state } from '~/pages/gamehub/tabs/comments_state';
	import StarIcon from './../pages/gamehub/tabs/star-icon.svelte';
  export let game_id

  $: comment_count = valid_ratings.length
  $: valid_ratings = $comments_state.data.filter(x => x.game_id === game_id).filter(c => c.rating !== 0).map(c => c.rating);
  $: middle_raing =  valid_ratings.length > 0 ? valid_ratings.reduce((sum, rating) => sum + rating, 0) / valid_ratings.length : 0

</script>

<div class="flex items-center space-x-2 mt-2">
  {#if $comments_state.loading}
    Loading reviews..
  {:else}
  <div class="flex gap-[2px]">
    {#each [1,2,3,4,5] as number}
      <StarIcon active={number <= middle_raing} />
    {/each}
  </div>
  <span class="text-[#888888]">Reviews ({comment_count})</span>  
  {/if}
</div>
