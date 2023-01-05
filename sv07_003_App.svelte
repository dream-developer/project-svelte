<script>
  import { fade } from 'svelte/transition';
  let isShow = true;
  const fadeInParams = { duration: 1000 } // 1
  const fadeOutParams = { duration: 2000 } // 2
</script>
      
{#if isShow}
<p in:fade={fadeInParams}
   out:fade={fadeOutParams} >要素</p> <!-- 3 -->
{/if}
<hr>
<input type="checkbox" bind:checked={isShow}>
表示/非表示