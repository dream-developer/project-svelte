<script>
  export let scores = []; // 1
</script>
  
<div><!-- 2 -->
  {#each scores as score}
    <p class="notice">
      {score}点 <slot ten={score}/>
    </p>
  {/each}
</div>
  
<style>
 .notice { background-color:#ddd; margin:5px }
</style>