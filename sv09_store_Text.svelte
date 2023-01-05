<script>
    import { onDestroy } from 'svelte'; // 1
    import { info } from './stores.js'; // 2
    
    let infoValue; // 3
    const unsubscribe = info.subscribe(value => { // 4
      infoValue = value;
    });
    
    let inputValue = '' // 5
    function addInfo() { // 5
      info.update(v => v + ', ' + inputValue);
    }
    function resetInfo() { // 6
      info.set('Hello ');
    }
    
    onDestroy(unsubscribe); // 1
    </script>
    
    <p>info:{infoValue}</p> <!-- 3 -->
    <input type="text" bind:value={inputValue} /> <!-- 5 -->
    <button on:click={addInfo}>追加</button> <!-- 5 -->
    <button on:click={resetInfo}>リセット</button> <!-- 6 -->    