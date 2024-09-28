<script>
let logoRef
let additionalRef
let logoDragging = false;
let additionalDragging = false

export let logoFiles = []
export let additionalFiles = []
</script>

<!-- project description -->
<div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
  <label for="project-desc">
    Project logo
    <span class="text-[#FA5252]">*</span>
  </label>
  <div class="text-[14px] text-[#888888] mt-1">Attach your project’s logo</div>
</div>

<div
  on:dragover|preventDefault={() => {
    logoDragging = true
  }}
  on:dragleave={() => {
    logoDragging = false
  }}
  on:drop|preventDefault={(e) => {
    logoDragging = false

    const files = Array.from(e.dataTransfer.files)

    files.forEach(element => {
      console.log(element.type, element.size)
    });
    logoFiles = files.filter(file => {
      return ['image/jpeg', 'image/png', 'image/gif'].includes(file.type) && file.size <= 20 * 1024 * 1024
    })
  }}
  class:opacity-[0.5]={logoDragging}
  class="flex max-w-[380px] flex-col items-center justify-center">
  <div class="mt-3 w-full bg-[#141414] border rounded-[4px] border-dashed border-[#323234] py-12 px-9">
    {#if logoFiles.length}
      <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4142 12.5858C42.1953 13.3668 42.1953 14.6332 41.4142 15.4142L21.4142 35.4142C20.6332 36.1953 19.3668 36.1953 18.5858 35.4142L8.58579 25.4142C7.80474 24.6332 7.80474 23.3668 8.58579 22.5858C9.36683 21.8047 10.6332 21.8047 11.4142 22.5858L20 31.1716L38.5858 12.5858C39.3668 11.8047 40.6332 11.8047 41.4142 12.5858Z" fill="#F97C0E"/>
      </svg>
      <div class="text-center mt-3">
        Ready to upload
      </div>
      <div>
        {#each logoFiles as file}
          <div class="text-[#F97C0E]">{file.name}</div>
        {/each}
      </div>
    {:else}
      <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 10C11.7909 10 10 11.7909 10 14V25.1716L14.5858 20.5858L14.6132 20.5589C15.818 19.3996 17.3284 18.6603 19 18.6603C20.6716 18.6603 22.182 19.3996 23.3867 20.5589L23.4142 20.5858L28 25.1716L28.5858 24.5858L28.6132 24.5589C29.818 23.3996 31.3284 22.6603 33 22.6603C34.6716 22.6603 36.182 23.3996 37.3868 24.5589L37.4142 24.5858L38 25.1716V14C38 11.7909 36.2091 10 34 10H14ZM42 29.9981V14C42 9.58172 38.4183 6 34 6H14C9.58172 6 6 9.58172 6 14V29.9997C6 29.9994 6 29.9999 6 29.9997V34C6 38.4183 9.58172 42 14 42H34C38.4183 42 42 38.4183 42 34V30.002C42 30.0007 42 29.9994 42 29.9981ZM38 30.8285L34.6007 27.4291C33.9862 26.8426 33.4319 26.6603 33 26.6603C32.5681 26.6603 32.0138 26.8426 31.3993 27.4291L30.8284 28L33.4142 30.5858C34.1953 31.3669 34.1953 32.6332 33.4142 33.4142C32.6332 34.1953 31.3668 34.1953 30.5858 33.4142L20.6007 23.4291C19.9862 22.8426 19.4319 22.6603 19 22.6603C18.5681 22.6603 18.0138 22.8426 17.3993 23.4291L10 30.8285V34C10 36.2091 11.7909 38 14 38H34C36.2091 38 38 36.2091 38 34V30.8285ZM28 16C28 14.8954 28.8954 14 30 14H30.02C31.1246 14 32.02 14.8954 32.02 16C32.02 17.1046 31.1246 18 30.02 18H30C28.8954 18 28 17.1046 28 16Z" fill="white"/>
      </svg>
      <div class="text-center mt-3">
        Drag file here or click to select files
      </div>
    {/if}
  </div>
  {#if !logoFiles.length}
    <input on:change={(e) => {
      logoFiles = Array.from(e.target.files)
    }}
    accept="image/jpeg, image/png, image/gif"
    bind:this={logoRef} class="hidden" type="file" />
    <button on:click|preventDefault|stopPropagation={() => {
      if (logoRef) {
        logoRef.click()
      }
    }} class="bg-[#F97C0E] anim-btn text-[#2A2A2A] mt-[10px] px-6 py-2 rounded-[12px]">
      Select file
    </button>
  {/if}
</div>

<!-- additional attachments -->
<div 
on:dragover|preventDefault={() => {
  additionalDragging = true
}}
on:dragleave={() => {
  additionalDragging = false
}}
on:drop|preventDefault={(e) => {
  additionalDragging = false

  const files = Array.from(e.dataTransfer.files)
  files.forEach(element => {
      console.log(element.type, element.size)
    });
  additionalFiles = files.filter(file => {
    return ['application/pdf', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/msword', 'image/png', 'image/jpeg', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(file.type) && file.size <= 100 * 1024 * 1024
  })
}}
class:opacity-[0.5]={additionalDragging}
class="flex max-w-[380px] flex-col items-center w-[50%] md:w-full sm:w-full mt-[32px]">
  <label class="self-start">
    Additional Attachments
  </label>
  <div class="text-[14px] text-[#888888] mt-1">Attach any other files you consider important for evaluating your project, max 100 MB</div>
  <div class="mt-3 w-full bg-[#141414] border rounded-[4px] border-dashed border-[#323234] py-12 px-9">
    {#if additionalFiles.length}
      <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4142 12.5858C42.1953 13.3668 42.1953 14.6332 41.4142 15.4142L21.4142 35.4142C20.6332 36.1953 19.3668 36.1953 18.5858 35.4142L8.58579 25.4142C7.80474 24.6332 7.80474 23.3668 8.58579 22.5858C9.36683 21.8047 10.6332 21.8047 11.4142 22.5858L20 31.1716L38.5858 12.5858C39.3668 11.8047 40.6332 11.8047 41.4142 12.5858Z" fill="#F97C0E"/>
      </svg>
      <div class="text-center mt-3">
        Ready to upload
      </div>
      <div>
        {#each additionalFiles as file}
          <div class="text-[#F97C0E]">{file.name}</div>
        {/each}
      </div>
    {:else}
      <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C13.4696 8 12.9609 8.21071 12.5858 8.58579C12.2107 8.96086 12 9.46957 12 10V38C12 38.5304 12.2107 39.0391 12.5858 39.4142C12.9609 39.7893 13.4696 40 14 40H34C34.5304 40 35.0391 39.7893 35.4142 39.4142C35.7893 39.0391 36 38.5304 36 38V18H30C28.9391 18 27.9217 17.5786 27.1716 16.8284C26.4214 16.0783 26 15.0609 26 14V8H14ZM30 10.8284L33.1716 14H30V10.8284ZM9.75736 5.75736C10.8826 4.63214 12.4087 4 14 4H28C28.5304 4 29.0391 4.21071 29.4142 4.58579L39.4142 14.5858C39.7893 14.9609 40 15.4696 40 16V38C40 39.5913 39.3679 41.1174 38.2426 42.2426C37.1174 43.3679 35.5913 44 34 44H14C12.4087 44 10.8826 43.3679 9.75736 42.2426C8.63214 41.1174 8 39.5913 8 38V10C8 8.4087 8.63214 6.88258 9.75736 5.75736Z" fill="white"/>
      </svg>
      <div class="text-center mt-3">
        Drag file here or click to select files
      </div>
    {/if}
  </div>
  {#if !additionalFiles.length}
    <input
    accept=".pdf, .doc, .docx, .xls, .xlsx, .txt"
    on:change={(e) => {
      additionalFiles = Array.from(e.target.files)
    }}
    bind:this={additionalRef} class="hidden" type="file">
    <button on:click|preventDefault|stopPropagation={() => {
      if (additionalRef) {
        additionalRef.click()
      }
    }} class="bg-[#F97C0E] anim-btn text-[#2A2A2A] mt-[10px] px-6 py-2 rounded-[12px]">
      Select file
    </button>
  {/if}
</div>