<script>
  import { fly } from 'svelte/transition'; // 1
  let isShow = true;
  const flyParams = { y: -100, duration: 1000 } // 2
</script>
      
{#if isShow}
  <p transition:fly="{flyParams}">要素</p> <!-- 3 -->
{/if}
<hr>
<input type="checkbox" bind:checked={isShow}>
表示/非表示