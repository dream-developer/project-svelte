<script>
  let text = '';
  
  function doSubmit(){ // 2
    console.log(text);
  };
</script>
  
<form on:submit|preventDefault={doSubmit} action=""> <!-- 1 -->
  <input type="text" bind:value={text} />
  <button type="submit">送信</button>
</form>