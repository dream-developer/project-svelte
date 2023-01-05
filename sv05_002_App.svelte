<script>
  let color = ''; // 1
  let foods = []; // 2
</script>

<p>color:{color}</p> <!-- 1 -->
<select bind:value={color}>
  <option disabled value="">選択してください</option>
  <option value="red">赤</option>
  <option value="blue">青</option>
  <option value="green">緑</option>
</select>
<hr>
<p>food:{foods}</p> <!-- 2 -->
<select multiple bind:value={foods}>
  <option disabled value="">選択して下さい(複数可)</option>
  <option value="breakfast">朝食</option>
  <option value="lunch">昼食</option>
  <option value="dinner">夕食</option>
</select>