<script>
  import { onMount } from 'svelte';
  import { auth } from '~/store/auth';
  import {tonConnectUI} from '~/utils/ton'
  export let authPopupIsOpen
  let selected = false
onMount(() => {
  tonConnectUI.onModalStateChange(function (state) {
    if (!selected && state.status === 'closed') {
      if (tonConnectUI.wallet) {
        let address = tonConnectUI.wallet.account.address
        $auth = {
          isAuthorized: true,
          user: {
            address_full: address,
            name: 'Ton User',
            address: address.slice(0, address.length/5)+ '...' + address.slice(address.length - 5, address.length)
          },
          authType: 'ton'
        }
        selected = true
        authPopupIsOpen = false
      }
    }
  })
})
</script>

<button on:click={async () => {
  if (tonConnectUI) {
    await tonConnectUI.openModal();
  }
}} class="w-full bg-[#464648] active:scale-95 active:bg-[#58585B] transition-all rounded-[24px] px-4 py-[10px] flex items-center">
  <img src="/optimized/ton-icon.webp" width="48" height="48" alt="">
  <div class="ml-4 font-medium">
    Ton wallet
  </div>
</button>

