<div class="flex flex-col w-[50%] md:w-full sm:w-full mt-[32px]">
  <label>
    Project Status
    <span class="text-[#FA5252]">*</span>
  </label>
  <div class="flex gap-3 mt-3">
    <div class="inline-flex gap-2 items-center select-none">
      <label class="relative flex items-center cursor-pointer" for="alpha">
        <input
          checked
          name="color"
          type="radio"
          class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
          id="alpha"
        />
        <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      </label>
      <label class="cursor-pointer" for="alpha">
        Alpha/Beta
      </label>
    </div>
    <div class="inline-flex gap-2 items-center select-none">
      <label class="relative flex items-center cursor-pointer" for="launch">
        <input
          name="color"
          type="radio"
          class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
          id="launch"
        />
        <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      </label>
      <label class="cursor-pointer" for="launch">
        Soft Launch
      </label>
    </div>
    <div class="inline-flex gap-2 items-center select-none">
      <label class="relative flex items-center cursor-pointer" for="live">
        <input
          name="color"
          type="radio"
          class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
          id="live"
        />
        <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      </label>
      <label class="cursor-pointer" for="live">
        Live
      </label>
    </div>
    <div class="inline-flex gap-2 items-center select-none">
      <label class="relative flex items-center cursor-pointer" for="maintenance">
        <input
          name="color"
          type="radio"
          class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-amber-400 transition-all"
          id="maintenance"
        />
        <span class="absolute bg-amber-600 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      </label>
      <label class="cursor-pointer" for="maintenance">
        Maintenance
      </label>
    </div>
  </div>
</div>