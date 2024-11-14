<script>
	import { auth } from '~/store/auth.ts';
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  let accounts = [];
  let isMMInstalled = false;
  let isMMLoading = false;
  let isMMConnected = false;
  export let authPopupIsOpen = true
  
  $: provider = window.ethereum ? new ethers.BrowserProvider(window.ethereum, "any") : null;
  
  onMount(async () => {
    if (!window.ethereum) return;
    isMMLoading = true;
    isMMInstalled = true;
    accounts = await provider?.listAccounts?.();
    isMMConnected = accounts.length > 0;
    isMMLoading = false;
    window.ethereum.on('accountsChanged', (acc) => {
      if (!acc.length) {
        $auth = {
          ...$auth,
          isAuthorized: false,
          initial: false,
          address: null
        }
      }
    })
  });

  function makeId(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        isMMConnected = true;
       
        if (accounts.length) {
          let address =accounts[0]
          $auth = {
            user: {
              name: 'Metamask User',
              address_full: address,
              address: address.slice(0, address.length/5)+ '...' + address.slice(address.length - 5, address.length)
            },
            initial: false,
            isAuthorized: true,
            authType: 'metamask'
          }
          authPopupIsOpen = false
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Metamask not detected");
    }
  }

  const authorize = async () => {
    if (!isMMConnected) return connectToMetamask();

    const selectedAddress = window.ethereum.selectedAddress;

    const nonce = makeId(12);
    try {
      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [nonce, selectedAddress],
      });
    } catch (e) {
      console.log(e)
    }
  };
  $: isAvailable = window.ethereum &&  window.ethereum.isMetaMask
  $: isConflict = window.ethereum && window.ethereum.isTrustWallet && window.ethereum.isMetaMask

</script>


<button disabled={!isAvailable || isConflict} on:click={authorize} class="w-full disabled:opacity-35 disabled:cursor-not-allowed bg-[#464648] active:scale-95 active:bg-[#58585B] transition-all rounded-[24px] px-4 py-[10px] flex items-center">
  <img src="/optimized/metamask-icon.webp" width="48" height="48" alt="">
  <div class="ml-4 font-medium">
    Metamask
    {#if !isAvailable}
      <span class="text-[14px]">(not installed in your browser)</span>
    {/if}
    {#if isConflict}
      <span class="text-[14px]">(confict with other wallets)</span>
    {/if}
  </div>
</button>

