<script>
  import { onMount } from "svelte";
  import { gapi } from "gapi-script";
  import { auth } from "~/store/auth";
  export let authPopupIsOpen

  onMount(() => {
    function start() {
      gapi.client
        .init({
          clientId:
            "216133606325-vqdj4mcc0jh5p3j659j8glllfmf5r3dq.apps.googleusercontent.com",
          scope: "profile email",
        })
        .then(() => {
          const authInstance = gapi.auth2.getAuthInstance();
          let user = authInstance.currentUser.get();
          if (user && $auth.isAuthorized) {
            let profile = user.getBasicProfile()
            if (!profile) return
            $auth = {
              authType: 'google',
              isAuthorized: true,
              initial: false,
              user: {
                name: profile.Ad,
                address: profile.cu,
                address_full: profile.cu,
                image: profile.hK
              }
            }
            authPopupIsOpen = false
          }
        });
    }
    gapi.load('client:auth2', start)
  });

  function signIn() {
    gapi.auth2.getAuthInstance().signIn().then(user => {
      let profile = user.getBasicProfile()

      $auth = {
        authType: 'google',
        isAuthorized: true,
        initial: false,
        user: {
          name: profile.Ad,
          address: profile.cu,
          image: profile.hK
        }
      }
      authPopupIsOpen = false
    });
  }
</script>

<button
  on:click={signIn}
  class="w-full justify-center font-medium bg-[#fff] flex items-center space-x-2 text-black border py-3 active:border-[#fff] active:scale-95 active:bg-[#D9D9D9] transition-all px-[36px] rounded-[12px]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
  >
    <path
      d="M33.7516 18.3498C33.7516 17.0548 33.6443 16.1098 33.4123 15.1298H18.323V20.9748H27.1801C27.0016 22.4273 26.0373 24.6148 23.8944 26.0847L23.8643 26.2804L28.6353 29.9025L28.9658 29.9348C32.0015 27.1873 33.7516 23.1448 33.7516 18.3498Z"
      fill="#4285F4"
    />
    <path
      d="M18.322 33.7499C22.6612 33.7499 26.304 32.3498 28.9648 29.9349L23.8933 26.0848C22.5362 27.0123 20.7148 27.6598 18.322 27.6598C14.072 27.6598 10.4649 24.9123 9.17908 21.1148L8.99061 21.1305L4.02972 24.893L3.96484 25.0698C6.60766 30.2148 12.0362 33.7499 18.322 33.7499Z"
      fill="#34A853"
    />
    <path
      d="M9.17996 21.1151C8.84068 20.1351 8.64433 19.085 8.64433 18.0001C8.64433 16.915 8.84068 15.865 9.16211 14.8851L9.15312 14.6763L4.13005 10.8534L3.96571 10.93C2.87647 13.065 2.25146 15.4626 2.25146 18.0001C2.25146 20.5376 2.87647 22.935 3.96571 25.07L9.17996 21.1151Z"
      fill="#FBBC05"
    />
    <path
      d="M18.3221 8.33996C21.3399 8.33996 23.3755 9.61745 24.5363 10.685L29.072 6.345C26.2864 3.80751 22.6613 2.25 18.3221 2.25C12.0363 2.25 6.60768 5.78497 3.96484 10.9299L9.16126 14.885C10.465 11.0875 14.0721 8.33996 18.3221 8.33996Z"
      fill="#EB4335"
    />
  </svg>
  <span> Sign Up with Google </span>
</button>
