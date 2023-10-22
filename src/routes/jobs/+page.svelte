<script lang="ts">
  import type { Job } from "../../service/types";
  import { Anchor } from "@svelteuidev/core";

  export let data: { jobs: Job[] };
</script>

<ul>
  {#each data.jobs as job}
    <li>
      <Anchor href="/jobs/{job.id}">{job.name} ({job.id})</Anchor>
    </li>
  {/each}
</ul>