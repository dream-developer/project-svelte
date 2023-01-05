<script>
    import { beforeUpdate, onMount, onDestroy, afterUpdate } from 'svelte'; // 1
  
    beforeUpdate(() => { console.log('beforeUpdate'); }); // 2
    onMount(() => { console.log('onMount'); });
    afterUpdate(() => { console.log('afterUpdate'); });
    onDestroy(() => { console.log('onDestroy'); });
    console.log('トップレベル'); // 3
  
    let text = 'テキスト';
    function updateText() { // 4
      console.log('updateText関数実行');
      text = new Date().toLocaleString();
    }
  </script>
  
  <p>text:{text}</p>
  <button on:click={updateText}>更新</button>