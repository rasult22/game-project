import { writable } from "svelte/store";

type AuthScheme = {
  user: any,
  isAuthorized: boolean
}

// default state
let store = {
  user: null,
  isAuthorized: false
}

// syncing state between pages via localStorage
const authStore = localStorage.getItem('authStore')
if (authStore) {
  store = JSON.parse(authStore) as AuthScheme
}

export const auth = writable<AuthScheme>(store)

// sync store and localStorage
auth.subscribe(store => {
  localStorage.setItem('authStore', JSON.stringify(store))
})