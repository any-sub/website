<script lang="ts">
  import AppShell from "$lib/layout/AppShell.svelte";
  import { colorScheme, SvelteUIProvider } from "@svelteuidev/core";
  import { page } from "$app/stores";
</script>

<SvelteUIProvider withGlobalStyles withNormalizeCSS themeObserver={$colorScheme}>
  <AppShell>
    <!--{JSON.stringify($page.data.session)}-->
    <slot/>
  </AppShell>
</SvelteUIProvider>
