<script>
  import { info, truncateInfo } from './stores.js'; // 1
  
  let inputValue = ''
  function addInfo() {
      $info = $info + ', ' + inputValue;
  }
  function resetInfo() {
      $info = 'Hello ';
  }
  </script>
  
  <p>info:{$info}</p>
  <p>truncateInfo:{$truncateInfo}</p> <!-- 1 -->
  <input type="text" bind:value={inputValue} /> 
  <button on:click={addInfo}>追加</button>
  <button on:click={resetInfo}>リセット</button>