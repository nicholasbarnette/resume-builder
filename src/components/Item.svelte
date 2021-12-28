<script lang="ts">
  import { Item } from "./types/Item.types";
  export let header: Item["header"] = "";
  export let date: Item["date"] = { start: "" };
  export let title: Item["title"] = "";
  export let description: Item["description"] = [];
</script>

<div class="item">
  <div class="header">
    <h4 class="heading">{header}</h4>
    {#if date}<span class="date"
        >{date.start}{date.end ? ` - ${date.end}` : ""}</span
      >{/if}
  </div>
  <div class="content">
    <h5 class="job-title">{title}</h5>
    <ul class="job-description">
      {#each description as d, idx (idx)}
        <li class="job-description-item">{d}</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .item {
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .heading {
    font-size: 1rem;
    font-weight: 600;
  }

  .date {
    font-size: 0.75rem;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .job-title {
    font-size: 0.875rem;
  }

  .job-description {
    font-size: 0.875rem;
  }

  .job-description-item {
    margin-inline-start: 1rem;
  }
</style>
