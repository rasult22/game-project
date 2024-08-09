import {TonConnectUI} from '@tonconnect/ui'

let tonConnectUI;
function init() { 
  tonConnectUI = new TonConnectUI({
    manifestUrl: 'https://rasult22.github.io/game-project/app_meta.json',
    buttonRootId: 'ton-connect'
  })
}

export {
  tonConnectUI,
  init
}