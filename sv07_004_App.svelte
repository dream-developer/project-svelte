<script>
  import { fade, blur } from 'svelte/transition'; // 1
  let isShow = true;
  const fadeInParams = { duration: 1000 } // 2
  const blurOutParams = { duration: 2000 } // 3
</script>
      
{#if isShow}
<p in:fade={fadeInParams}
   out:blur={blurOutParams} >要素</p> <!-- 4 -->
{/if}
<hr>
<input type="checkbox" bind:checked={isShow}>
表示/非表示