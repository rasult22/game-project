<script>
  import pb from '~/pocketbase';
	import StarIcon from './star-icon.svelte';
  import { auth } from '~/store/auth';
  import { onMount } from 'svelte';
  export let game_id;

  let comment_list = []
  let loading = false

  $: comment_count = valid_ratings.length
  $: valid_ratings = comment_list.filter(c => c.rating !== 0).map(c => c.rating);
  $: middle_raing =  valid_ratings.length > 0 ? valid_ratings.reduce((sum, rating) => sum + rating, 0) / valid_ratings.length : 0

  let selected_stars = 0
  let selected_comment = ''

const fetchComments = async () => {
  comment_list = await pb.collection('games_comments').getFullList({
    filter: `game_id = "${game_id}"`
  })
}

const onSumbit = async (e) => {
  loading = true
  e.preventDefault()
  try {
    const data = {
      game_id,
      rating: selected_stars,
      comment: selected_comment,
      user_id: $auth.user && $auth.user.address_full,
      user_name: $auth.user && $auth.user.name + '__' + $auth.user.address
    }
    await pb.collection('games_comments').create(data)
    await fetchComments()
  } finally {
    loading = false
  }
}

onMount(async() => {
  await fetchComments()
})
</script> 

<!-- head -->
<div class="flex items-center gap-2 border-b border-[#888] pb-1">
  <div class="text-[20px] font-semibold">Reviews({comment_count})</div>
  <div class="flex gap-[2px]">
    {#each [1,2,3,4,5] as number}
      <StarIcon active={number <= middle_raing} />
    {/each}
  </div>
</div>

{#if loading}
<div class="fixed w-full h-full flex items-center justify-center top-[50%] translate-y-[-50%] backdrop-blur-sm z-[1000] left-[50%] translate-x-[-50%]">
  <div class="bg-[#1E1E1E] p-4 rounded-md">
      <svg class="animate-spin" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM4.8 24C4.8 34.6039 13.3961 43.2 24 43.2C34.6039 43.2 43.2 34.6039 43.2 24C43.2 13.3961 34.6039 4.8 24 4.8C13.3961 4.8 4.8 13.3961 4.8 24Z" fill="#464648"/>
        <path d="M39.5154 42.3104C37.1109 44.3479 34.3286 45.8919 31.3273 46.8541C28.3261 47.8163 25.1647 48.178 22.0237 47.9185C18.8826 47.659 15.8235 46.7833 13.0209 45.3415C10.2183 43.8997 7.72711 41.92 5.68959 39.5154L9.35168 36.4124C10.9817 38.336 12.9746 39.9198 15.2167 41.0732C17.4588 42.2266 19.9061 42.9272 22.4189 43.1348C24.9317 43.3424 27.4609 43.0531 29.8619 42.2833C32.2628 41.5135 34.4887 40.2783 36.4124 38.6483L39.5154 42.3104Z" fill="#F97C0E"/>
      </svg>
  </div>
</div>
{/if}
{#if $auth.isAuthorized && comment_list.find(comment => comment.user_id === $auth?.user?.address_full)}
  <div>
    <!-- Commented -->
  </div>
{:else if $auth.isAuthorized}

   <!-- Input -->
   <form on:submit={onSumbit} class="bg-[#2A2A2A] flex gap-8 p-5 rounded-[20px] mt-8">
    <div>
      <img width="130" height="130" src="/optimized/avatar.webp" alt="">
    </div>
    <div class="flex w-full flex-col">
      <div class="flex items-center">
        {#each [1,2,3,4,5] as number }
          <StarIcon on:click={() => selected_stars = number} hoverable active={selected_stars >= number}/>
        {/each}
      </div>
      <div class="font-semibold mt-4 mb-2">My review</div>
      <div>
        <textarea bind:value={selected_comment} class="py-2 px-4 rounded-[12px] w-full border border-[#888888] bg-[#2A2A2A] text-[#888]" placeholder="Tell your personal experience whith this game"></textarea>
      </div>
      <div class="mt-3 ml-auto">
        <button class="bg-[#FFF] rounded-[12px] py-[10px] px-9 text-[#1b1b1b] font-medium leading-[150%]">Submit review</button>
      </div>
    </div>
  </form>
{:else}
  <div class="pt-8 text-[#888]">
    Please login to leave your comment
  </div>
{/if}

 <!-- Comment list -->
<div class="space-y-4 mt-8">
  {#each comment_list as comment }
    <div class="bg-[#2A2A2A] p-[20px] rounded-[20px]">
      <div class="flex justify-between">
        <div class="flex gap-4">
          <div>
            <img width="72" height="72" src="/optimized/avatar.webp" alt="">
          </div>
          <div>
            <div class="font-semibold mb-1">{comment.user_name || 'none'}</div>
            <div class="text-[13px] text-[#888]">{new Date(comment.created).toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false // Set to true for 12-hour format, false for 24-hour
              })}</div>
          </div>
        </div>
        <div class="flex">
          {#each Array.from({length: comment.rating}) as number, index }
            <StarIcon active={comment.rating > index + 1}/>
          {/each}
        </div>
      </div>
      <div class="mt-4">
        {comment.comment}
      </div>
    </div>
  {/each}
</div>