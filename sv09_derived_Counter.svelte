<script>
  import { getContext } from 'svelte';
  import { truncateInfo } from './stores.js'; // 1
  
  const step = getContext('step');
  let count = 0;
  function countup() {
    count = count + step;
  }
</script>
<p>truncateInfo:{$truncateInfo}</p> <!-- 1 -->
<p>count(step {step}):{count}</p>
<button on:click={countup}>ボタン</button>