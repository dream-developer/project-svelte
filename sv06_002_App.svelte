<script>
  let size = 'medium'; // 1
</script>

<p style:font-size={size}>テキスト</p> <!-- 1 -->
<!-- 1 -->
<input type="radio" bind:group={size} value="large">large
<input type="radio" bind:group={size} value="medium">medium
<input type="radio" bind:group={size} value="small">small