<script>
  import { getContext } from 'svelte'; // 1
  
  const step = getContext('step'); // 2
  let count = 0;
  function countup() { // 3
    count = count + step;
  }
</script>
  
<p>count(step {step}):{count}</p>
<button on:click={countup}>ボタン</button>