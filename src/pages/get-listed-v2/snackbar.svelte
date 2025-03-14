<script>
  import { onMount, onDestroy } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  export let message = '';
  export let type = 'default'; // default, success, error, warning, info
  export let duration = 3000;
  export let showClose = true;
  export let position = 'bottom-center'; // bottom-center, bottom-left, bottom-right, top-center, top-left, top-right
  
  let visible = false;
  let timeout;
  
  const positions = {
    'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'top-center': 'top-0 left-1/2 -translate-x-1/2',
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0'
  };
  
  const types = {
    default: 'bg-gray-800 text-white',
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-500 text-white'
  };
  
  function showSnackbar() {
    visible = true;
    
    if (timeout) clearTimeout(timeout);
    
    if (duration > 0) {
      timeout = setTimeout(() => {
        visible = false;
      }, duration);
    }
  }
  
  function hideSnackbar() {
    visible = false;
    if (timeout) clearTimeout(timeout);
  }
  
  // Public methods exposed through bind:this
  export function show(newMessage = null) {
    if (newMessage) message = newMessage;
    showSnackbar();
  }
  
  export function hide() {
    hideSnackbar();
  }
  
  onMount(() => {
    if (message) showSnackbar();
  });
  
  onDestroy(() => {
    if (timeout) clearTimeout(timeout);
  });
</script>

{#if visible}
  <div 
    class="fixed z-50 m-4 {positions[position]}" 
    in:fly="{{ y: position.startsWith('top') ? -20 : 20, duration: 300 }}" 
    out:fade="{{ duration: 200 }}"
  >
    <div class="flex items-center justify-between px-4 py-3 rounded shadow-lg {types[type]} min-w-64 max-w-md">
      <div class="mr-2">{message}</div>
      {#if showClose}
        <button 
          on:click={hideSnackbar} 
          class="ml-4 text-lg font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
      {/if}
    </div>
  </div>
{/if}