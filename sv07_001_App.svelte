<script>
  import { fade } from 'svelte/transition';
  let isShow = true;
  const fadeParams = { delay: 500, duration: 3000 } // 1
</script>
    
{#if isShow}
  <p transition:fade={fadeParams}>要素</p> <!-- 2 -->
{/if}
<hr>
<input type="checkbox" bind:checked={isShow}>
表示/非表示