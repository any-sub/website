<script lang="ts">
  import type { AnchorProps } from "@svelteuidev/core";
  import { Anchor } from "@svelteuidev/core";

  export let url: string | undefined | null;
  export let target: AnchorProps["target"] = "_self";
</script>

{#if url}
  <Anchor underline={false} href="{url}" target={target} rel="noopener noreferrer">
    <slot></slot>
  </Anchor>
{:else}
  <slot></slot>
{/if}

