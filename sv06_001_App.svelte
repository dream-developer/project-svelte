<script>
  const words = ['AAA', 'BBB', 'CCC',
                 'DDD', 'EEE', 'FFF', ]; // 1
</script>
  
{#each words as word, i} <!-- 4 -->
  <p class:odd={i % 2}>{word}</p> <!-- 5 -->
{/each}
  
<style>
  p { color:#00f; }  /* 2 */
  .odd { color:#f00; }  /* 3 */
</style>