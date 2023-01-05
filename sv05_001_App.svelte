<script>
  let isAgree = false; // 1
  let vegetables = []; // 2
  let size = 'medium'; // 3 
</script>
<!-- 1 -->
<input type="checkbox" bind:checked={isAgree}>利用規約に同意する
<input type="button" disabled="{! isAgree}" value="次へ">
<hr>
<p>vegetables:{vegetables}</p> <!-- 2 -->
<input type="checkbox" bind:group={vegetables} value="tomato">tomato
<input type="checkbox" bind:group={vegetables} value="carrot">carrot
<input type="checkbox" bind:group={vegetables} value="onion">onion
<hr>
<p>size:{size}</p> <!-- 3 -->
<input type="radio" bind:group={size} value="large">large
<input type="radio" bind:group={size} value="medium">medium
<input type="radio" bind:group={size} value="small">small