<script>
  async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    if (res.ok) {
      return users;
    } else {
      throw new Error(users);
    }
  }
    
  let promise = fetchUsers();
</script>
  
{#await promise}
  <p>ロード中 … </p>
{:then users}
  {#each users as user}
    <p>{user.id}:{user.name}</p>
  {/each}
{:catch error}
  <p>エラー:{error.message}</p>
{/await}