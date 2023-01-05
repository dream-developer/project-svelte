<script>
  import { slide } from 'svelte/transition'; // 1
  let isShow = true;
  const slideParams = { delay: 500, duration: 1000 } // 2
</script>
      
{#if isShow}
  <p transition:slide="{slideParams}">要素</p> <!-- 3 -->
{/if}
<hr>
<input type="checkbox" bind:checked={isShow}>
表示/非表示