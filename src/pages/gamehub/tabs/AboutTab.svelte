<script>
	import MemeBlastArena from './abouts/meme-blast-arena.svelte';
	import QuizAi from './abouts/quiz-ai.svelte';

  import EdjsParser from 'editorjs-parser'
  export let data
  const p = new EdjsParser()
</script>
{#if data.introduction}
<div class="mt-[36px]">
  <div class="text-[32px] font-medium leading-[120%] mb-4">
    INTRODUCTION
  </div>
  <div>
    {@html p.parse(typeof data.introduction === 'string' ? JSON.parse(data.introduction) : data.introduction)}
  </div>
</div>
{/if}
{#if data.play_mode}
<div class="mt-[36px]">
  <div class="text-[32px] font-medium leading-[120%] mb-4">
    PLAY MODE
  </div>
  <div>
    {@html p.parse(typeof data.play_mode === 'string' ? JSON.parse(data.play_mode) : data.play_mode)}
  </div>
</div>
{/if}
{#if data.roadmap_text}
<div class="mt-[36px]">
  <div class="text-[32px] font-medium leading-[120%] mb-4">
    ROADMAP
  </div>
  <div>
    {@html p.parse(typeof data.roadmap_text === 'string' ? JSON.parse(data.roadmap_text) : data.roadmap_text)}
  </div>
</div>
{/if}
{#if data.features_text}
<div class="mt-[36px]">
  <div class="text-[32px] font-medium leading-[120%] mb-4">
    HIGHLIGHT FEATURES
  </div>
  <div>
    {@html p.parse(typeof data.features_text === 'string' ? JSON.parse(data.features_text) : data.features_text)}
  </div>
</div>
{/if}
{#if data.white_paper}
<div class="mt-[36px]">
  <div class="text-[32px] font-medium leading-[120%] mb-4">
    WHITE PAPER
  </div>
  <div>
    {@html p.parse(typeof data.white_paper === 'string' ? JSON.parse(data.white_paper) : data.white_paper)}
  </div>
</div>
{/if}
{#if data.play_to_earn_model}
<div class="mt-[36px]">
  <div class="text-[32px] font-medium leading-[120%] mb-4">
    PLAY-TO-EARN MODEL
  </div>
  <div>
    {@html p.parse(typeof data.play_to_earn_model === 'string' ? JSON.parse(data.play_to_earn_model) : data.play_to_earn_model)}
  </div>
</div>
{/if}
{#if data.custom === 'quiz-ai'}
  <QuizAi />
  {/if}
  {#if data.custom === 'meme-blast-arena'}
  <MemeBlastArena />
{/if}

<style>
</style>