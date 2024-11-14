import { writable } from "svelte/store";


export let comments_state = writable({
  loading: false,
  data: []
})