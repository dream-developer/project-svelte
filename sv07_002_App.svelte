<script>
  import { blur } from 'svelte/transition'; // 1
  let isShow = true;
  const blurParams = { amount: 20 } // 2
</script>
      
{#if isShow}
  <p transition:blur="{blurParams}">要素</p> <!-- 3 -->
{/if}
<hr>
<input type="checkbox" bind:checked={isShow}>
表示/非表示