<script>
import { info } from './stores.js';

  let inputValue = ''
  function addInfo() {
    $info = $info + ', ' + inputValue;
  }
  function resetInfo() {
    $info = 'Hello ';
  }
</script>

<p>info:{$info}</p>
<input type="text" bind:value={inputValue} /> 
<button on:click={addInfo}>追加</button>
<button on:click={resetInfo}>リセット</button>