<script lang="ts">
  import type { State } from "../service/types";
  import Updates from "$lib/layout/job/update/Updates.svelte";

  export let data: { updates: State[] };
</script>

<Updates updates={data.updates} />