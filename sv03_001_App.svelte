<script>
  import Life from './Life.svelte';
  let isShow = false;
</script>

{#if isShow}
  <Life />
{/if}
<hr>
<input type="checkbox" bind:checked={isShow}>
チェックで出る