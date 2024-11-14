import { writable } from "svelte/store";

type AuthScheme = {
  popupIsOpen: boolean,
  user: {
    address_full: string,
    address: string,
    name: string
  } | null,
  authType: 'ton' | 'metamask' | 'trustwallet' | 'google'| null,
  isAuthorized: boolean,
  initial: boolean
}


// default state
let store: AuthScheme = {
  popupIsOpen: false,
  user:  null,
  authType: null,
  isAuthorized: false,
  initial: true
}

export const syncStore = () => {
   // sync store and localStorage
   console.log('syncStore')
   auth.subscribe(store => {
    // if it's initial state, check write only if localStorage is empty
    if (store.initial && localStorage.getItem('authStore')) {
      // skip initial store writing (cause we can have data from localStorage)
    } else {
      localStorage.setItem('authStore', JSON.stringify(store))
    }
  })
  // syncing state between pages via localStorage
  const authStore = localStorage.getItem('authStore')
  if (authStore) {
    auth.set(JSON.parse(authStore) as AuthScheme)
  }
}

export const auth = writable<AuthScheme>(store)
export const logout = () => {
  auth.set({
    popupIsOpen: false,
    user:  null,
    authType: null,
    initial: false,
    isAuthorized: false
  })
}
