<script>
  import CountSheet from './CountSheet.svelte'; // 1
  import { setContext } from 'svelte'; // 2
    
  setContext('step', 5); // 3
</script>
  
<div>
  <CountSheet /> 
</div>
  
<style>
  div { background-color:#88d; padding:10px }
</style>