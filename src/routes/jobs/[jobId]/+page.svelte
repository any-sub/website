<script lang="ts">
  import type { Job, State } from "../../../service/types";
  import Updates from "$lib/layout/job/update/Updates.svelte";

  export let data: { job: Job, updates: State[] };
</script>

<Updates updates={data.updates} />