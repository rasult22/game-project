<script>
	import { fade } from 'svelte/transition';
  import { gapi } from "gapi-script";
  import { auth, logout as logout_s } from '~/store/auth';
  import { TonConnectUI } from '@tonconnect/ui';
  export let address = '_'
  export let name = '_'
  export let profile_pic

  let isOpen = false

  const logout = () => {
    if ($auth.authType === 'ton') {
      new TonConnectUI().disconnect()
      logout_s()
    }
    if ($auth.authType === 'metamask') {
      logout_s()
    }
    if ($auth.authType === 'google') {
      gapi.load('client:auth2', async () => {
        await gapi.client
          .init({
            clientId:
              "216133606325-vqdj4mcc0jh5p3j659j8glllfmf5r3dq.apps.googleusercontent.com",
            scope: "profile email",
          })
        const authInstance = gapi.auth2.getAuthInstance();
        authInstance.signOut().then(() => {
          logout_s()
        });
      })
    }
  }
  function clickOutside(node) {
    const handleClick = (event) => {
      if (!node.contains(event.target)) {
        node.dispatchEvent(new CustomEvent("clickOutside"));
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      }
    };
  }
</script>
<a use:clickOutside on:clickOutside={() => isOpen = false} class="flex group items-center relative -space-x-2 cursor-pointer">
  <div on:click={() => isOpen = true} class="bg-[#2A2A2A] group-hover:bg-[#444] border border-[#F78E7B] cursor-pointer space-x-2 flex items-center px-3 py-1 rounded-[12px]">
    <div>
      <div class="text-[14px]">{name}</div>
      <div class="text-[12px] font-medium">{address}</div>
    </div>
    <div>
      {#if profile_pic}
        {profile_pic}
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9321 15.7071C12.3226 16.0976 12.9557 16.0976 13.3463 15.7071L19.3463 9.70711C19.7368 9.31658 19.7368 8.68342 19.3463 8.29289C18.9557 7.90237 18.3226 7.90237 17.9321 8.29289L12.6392 13.5858L7.34627 8.29289C6.95574 7.90237 6.32258 7.90237 5.93205 8.29289C5.54153 8.68342 5.54153 9.31658 5.93205 9.70711L11.9321 15.7071Z" fill="white"/>
        </svg>
      {/if}
    </div>
  </div>
  <img width="45" height="45" src="/optimized/avatar.webp" alt="">
  <!-- dropdown -->
   {#if isOpen}
    <div transition:fade={{delay: 0, duration: 100}} class="absolute min-w-[136px] rounded-[8px] top-[110%] left-0 bg-[#272727]">
      <button on:click={() => window.location.href = '/profile'} class="flex hover:opacity-80 active:scale-[.98] border-b border-[#464648] gap-2 items-center py-2 px-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9974 3.83366C8.61668 3.83366 7.4974 4.95295 7.4974 6.33366C7.4974 7.71437 8.61668 8.83366 9.9974 8.83366C11.3781 8.83366 12.4974 7.71437 12.4974 6.33366C12.4974 4.95295 11.3781 3.83366 9.9974 3.83366ZM5.83073 6.33366C5.83073 4.03247 7.69621 2.16699 9.9974 2.16699C12.2986 2.16699 14.1641 4.03247 14.1641 6.33366C14.1641 8.63485 12.2986 10.5003 9.9974 10.5003C7.69621 10.5003 5.83073 8.63485 5.83073 6.33366ZM8.33073 13.8337C7.66769 13.8337 7.0318 14.0971 6.56296 14.5659C6.09412 15.0347 5.83073 15.6706 5.83073 16.3337V18.0003C5.83073 18.4606 5.45763 18.8337 4.9974 18.8337C4.53716 18.8337 4.16406 18.4606 4.16406 18.0003V16.3337C4.16406 15.2286 4.60305 14.1688 5.38445 13.3874C6.16585 12.606 7.22566 12.167 8.33073 12.167H11.6641C12.7691 12.167 13.8289 12.606 14.6103 13.3874C15.3917 14.1688 15.8307 15.2286 15.8307 16.3337V18.0003C15.8307 18.4606 15.4576 18.8337 14.9974 18.8337C14.5372 18.8337 14.1641 18.4606 14.1641 18.0003V16.3337C14.1641 15.6706 13.9007 15.0347 13.4318 14.5659C12.963 14.0971 12.3271 13.8337 11.6641 13.8337H8.33073Z" fill="white"/>
        </svg>
        <span class="text-[14px]">
          My account
        </span>
      </button>
      <button on:click={logout} class="flex hover:opacity-80 active:scale-[.98] gap-2 items-center py-2 px-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3963 3.73223C2.86514 3.26339 3.50102 3 4.16406 3H9.9974C10.6604 3 11.2963 3.26339 11.7652 3.73223C12.234 4.20107 12.4974 4.83696 12.4974 5.5V7.16667C12.4974 7.6269 12.1243 8 11.6641 8C11.2038 8 10.8307 7.6269 10.8307 7.16667V5.5C10.8307 5.27899 10.7429 5.06702 10.5867 4.91074C10.4304 4.75446 10.2184 4.66667 9.9974 4.66667H4.16406C3.94305 4.66667 3.73109 4.75446 3.57481 4.91074C3.41853 5.06702 3.33073 5.27899 3.33073 5.5V15.5C3.33073 15.721 3.41853 15.933 3.57481 16.0893C3.73109 16.2455 3.94305 16.3333 4.16406 16.3333H9.9974C10.2184 16.3333 10.4304 16.2455 10.5867 16.0893C10.7429 15.933 10.8307 15.721 10.8307 15.5V13.8333C10.8307 13.3731 11.2038 13 11.6641 13C12.1243 13 12.4974 13.3731 12.4974 13.8333V15.5C12.4974 16.163 12.234 16.7989 11.7652 17.2678C11.2963 17.7366 10.6604 18 9.9974 18H4.16406C3.50102 18 2.86514 17.7366 2.3963 17.2678C1.92745 16.7989 1.66406 16.163 1.66406 15.5V5.5C1.66406 4.83696 1.92745 4.20107 2.3963 3.73223ZM14.4081 7.41074C14.7336 7.08531 15.2612 7.08531 15.5867 7.41074L18.0867 9.91074C18.4121 10.2362 18.4121 10.7638 18.0867 11.0893L15.5867 13.5893C15.2612 13.9147 14.7336 13.9147 14.4081 13.5893C14.0827 13.2638 14.0827 12.7362 14.4081 12.4107L15.4856 11.3333H5.83073C5.37049 11.3333 4.9974 10.9602 4.9974 10.5C4.9974 10.0398 5.37049 9.66667 5.83073 9.66667H15.4856L14.4081 8.58926C14.0827 8.26382 14.0827 7.73618 14.4081 7.41074Z" fill="#FA5252"/>
        </svg>
        <span class="text-[14px] text-[#FA5252]">
          Log Out
        </span>
      </button>
    </div>
   {/if}
</a>