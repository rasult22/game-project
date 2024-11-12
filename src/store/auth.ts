import { writable } from "svelte/store";

type AuthScheme = {
  popupIsOpen: boolean,
  user: {
    address_full: string,
    address: string,
    name: string
  } | null,
  authType: 'ton' | 'metamask' | 'trustwallet' | 'google'| null,
  isAuthorized: boolean
}


// default state
let store: AuthScheme = {
  popupIsOpen: false,
  user:  null,
  authType: null,
  isAuthorized: false
}

// syncing state between pages via localStorage
const authStore = localStorage.getItem('authStore')
if (authStore) {
  store = JSON.parse(authStore) as AuthScheme
}

export const auth = writable<AuthScheme>(store)
export const logout = () => {
  auth.set({
    popupIsOpen: false,
    user:  null,
    authType: null,
    isAuthorized: false
  })
}

// sync store and localStorage
auth.subscribe(store => {
  localStorage.setItem('authStore', JSON.stringify(store))
})