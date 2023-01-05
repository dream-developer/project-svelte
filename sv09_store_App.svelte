<script>
  import { onDestroy } from 'svelte'; // 1
  import { info } from './stores.js'; // 2
  import CountArea from './CountArea.svelte';
  import TextArea from './TextArea.svelte';

  let infoValue; // 3
  const unsubscribe = info.subscribe(value => { // 4
    infoValue = value;
    console.log(infoValue);
  });
  onDestroy(unsubscribe); // 5
</script>

<p>info:{infoValue}</p><!-- 3 -->
<CountArea /> 
<TextArea />