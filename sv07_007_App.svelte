<script>
  import { fade } from 'svelte/transition'; // 1
  let count = 0;
  
  function countup() {
    count = count + 1;
  }
</script>

{#key count}  <!-- 2 -->
  <p>count:<span in:fade>{count}</span></p>
{/key}
<button on:click={countup}>ボタン</button>