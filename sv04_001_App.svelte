<script>
  let items = 
      [ // idは一意なものにする
      { id:0, name:'要素１' },
      { id:1, name:'要素２' },
      { id:2, name:'要素３' } ] 
  
  function deleteItem(){
    const newItems = [...items];
    newItems.splice(0,1)
   items = newItems
  }
</script>
<!-- 用意しておいた、一意の識別ID を、key属性に割り当て -->
{#each items as item (item.id)}
  <p><input type="checkbox">{item.name}</p>
{/each}
<button on:click={deleteItem}>削除</button>