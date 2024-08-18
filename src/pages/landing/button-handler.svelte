<script>
	import { popupIsOpen } from './state.ts';
  export let classes = ''
</script>
<div class={classes} on:click={() => {
  $popupIsOpen = true
}}>
  <slot></slot>
</div>