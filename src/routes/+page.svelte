<script lang="ts">
  import type { Job } from "../service/types";

  export let data: { jobs: Job[] };
</script>

{#each data.jobs as job}
  <div>{job.id}</div>
{/each}
