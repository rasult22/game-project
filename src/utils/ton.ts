import {TonConnectUI} from '@tonconnect/ui'

let tonConnectUI;
function init() { 
  try {
    // check if web-component is already registered to fix bug with view transition api
    const isRegistered = customElements.get('tc-root')
    if (!isRegistered) {
      tonConnectUI = new TonConnectUI({
        manifestUrl: 'https://rasult22.github.io/game-project/app_meta.json',
        buttonRootId: 'ton-connect'
      })
    }
  } catch(e) {
    console.log(e)
  }
}

export {
  tonConnectUI,
  init
}