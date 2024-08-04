<script>
	import { auth } from './../store/auth.ts';
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  let accounts = [];
  let isMMInstalled = false;
  let isMMLoading = false;
  let isMMConnected = false;
  export let authPopupIsOpen = true
  
  $: provider = new ethers.BrowserProvider(window.ethereum, "any");
  
  onMount(async () => {
    if (!window.ethereum) return;
    isMMLoading = true;
    isMMInstalled = true;
    accounts = await provider.listAccounts();
    isMMConnected = accounts.length > 0;
    isMMLoading = false;
    window.ethereum.on('accountsChanged', (acc) => {
      console.log('worked')
      if (!acc.length) {
        $auth = {
          ...$auth,
          isAuthorized: false,
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
       
        if (window.ethereum.selectedAddress) {
          let address =window.ethereum.selectedAddress
          $auth = {
            user: {
              name: address.slice(0, address.length/5)+ '...' + address.slice(address.length/1.3, address.length)
            },
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
    const signature = await window.ethereum.request({
      method: "personal_sign",
      params: [nonce, selectedAddress],
    });
  };
</script>


<button on:click={authorize} class="w-full bg-[#464648] active:scale-95 active:bg-[#58585B] transition-all rounded-[24px] px-4 py-[10px] flex items-center">
  <img src="/metamask-icon.png" width="48" height="48" alt="">
  <div class="ml-4 font-medium">
    Metamask
  </div>
</button>

