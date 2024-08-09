<script>
  import {TonConnectUI} from '@tonconnect/ui'
  export let authPopupIsOpen

$: tonConnectUI = new TonConnectUI({
  manifestUrl: 'http://localhost:4321/app_meta.json',
  buttonRootId: 'ton-connect'
})
</script>

<button on:click={async () => {
  if (tonConnectUI) {
    const wallet = await tonConnectUI.openModal();
    console.log(wallet)
  }
}} class="w-full bg-[#464648] active:scale-95 active:bg-[#58585B] transition-all rounded-[24px] px-4 py-[10px] flex items-center">
  <img src="/game-project/media/ton-icon.png" width="48" height="48" alt="">
  <div class="ml-4 font-medium">
    Ton wallet
  </div>
</button>

