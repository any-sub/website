<script lang="ts">
  import AppShell from "../layout/AppShell.svelte";
  import { SvelteUIProvider } from "@svelteuidev/core";
</script>

<SvelteUIProvider withGlobalStyles withNormalizeCSS>
  <AppShell>
    <slot/>
  </AppShell>
</SvelteUIProvider>
