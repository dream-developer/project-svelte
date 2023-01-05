<script>
  import { info } from './stores.js'; // 1

  let inputValue = ''
  function addInfo() {
    info.add(inputValue); // 2
  }
</script>

<p>info:{$info}</p>
<input type="text" bind:value={inputValue} /> 
<button on:click={addInfo}>追加</button>
<button on:click={info.reset}>リセット</button> <!-- 3 -->
