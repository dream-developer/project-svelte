<script>
  import Notice from './Notice.svelte';
  const scores = [80, 50, 90]; // 1
</script>

<Notice scores={scores} let:ten> <!-- 2 -->
  {#if ten >= 80}
    <span>合格</span>
  {:else}
    <span>不合格</span>
  {/if}
</Notice>