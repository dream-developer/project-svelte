<script>
  let codename = '';
  let message = '';
  function doFocus() {
    message = "コードネームの入力欄です";
  }
  function doBlur() {
    if (codename.length < 5 || codename.length > 20) {
      message = "5文字以上、20文字以内でお願いします";
    }else{
      message = "入力完了";
    }
  }
</script>

<p>コードネーム:{codename}</p>
<input type="text" bind:value={codename}
    on:focus={doFocus} on:blur={doBlur} />
<p>{message}</p>

