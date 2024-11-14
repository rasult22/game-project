<script>
	import { syncStore } from '~/store/auth';
	import { onMount } from 'svelte';
  onMount(() => {
    syncStore()
  })
</script>