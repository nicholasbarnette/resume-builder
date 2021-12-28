<script lang="ts">
  import Divider from "./Divider.svelte";
  import Item from "./Item.svelte";
  import type { Item as ItemType } from "./types/Item.types";
  export let title = "";
  export let items: ItemType[] = [];
</script>

<section style={$$props.style}>
  <h3 class="section-header">{title}</h3>
  <Divider style="margin-block-start: 0;" />
  <div class="section-items">
    {#each items as item, idx (idx)}
      <Item {...item} />
    {/each}
  </div>
</section>

<style>
  .section-header {
    color: var(--fg);
    font-size: 1rem;
    font-weight: 700;
  }

  .section-items {
    display: grid;
    grid-auto-rows: min-content;
    gap: 1rem;
  }
</style>
