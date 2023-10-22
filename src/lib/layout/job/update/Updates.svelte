<script lang="ts">
  import { Group, SimpleGrid } from "@svelteuidev/core";
  import UpdateCard from "$lib/layout/job/update/UpdateCard.svelte";
  import type { State } from "../../../../service/types";

  export let updates: State[];
</script>

<SimpleGrid spacing="sm" breakpoints={[
		{ minWidth: 'xs', cols: 2 },
		{ minWidth: 'sm', cols: 3 },
		{ minWidth: 'md', cols: 4 },
		{ minWidth: 1200, cols: 5 }
	]}>
  {#each updates as update}
    <UpdateCard update={update} />
  {/each}
</SimpleGrid>