<script lang="ts">
  import type { Job } from "../../service/types";
  import { Anchor } from "@svelteuidev/core";

  export let data: { jobs: Job[] };
</script>

{#each data.jobs as job}
  <div>
    <Anchor href="/jobs/{job.id}">{job.id}</Anchor>
  </div>
{/each}
