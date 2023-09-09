<script lang="ts">
  export let data;
</script>

{#each data.jobs as job}
  <div>{job.id}</div>
{/each}
