<div>
  <slot name="header"/>
  <slot/>
  {#if $$slots.footer}
    <slot name="footer"/>
  {:else}
    <p>フッターの代わり</p>
  {/if}
</div>