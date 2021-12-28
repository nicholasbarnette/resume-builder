<script lang="ts">
  export let name = "";
  export let title = "";
</script>

<header class="header" style={$$props.style}>
  <h1 class="header-name">{name}</h1>
  <h2 class="header-job-title">{title}</h2>
</header>

<style>
  .header-name {
    font-size: 2rem;
    color: var(--fg);
    font-weight: 700;
  }

  .header-job-title {
    font-size: 1rem;
    color: var(--fg);
  }
</style>
