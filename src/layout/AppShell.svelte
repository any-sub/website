<script>
  import { AppShell, fns, Header } from "@svelteuidev/core";
  import HeadContent from "../layout/HeadContent.svelte";

  let isDark = true;

  function toggleTheme() {
    isDark = !isDark;
  }
</script>

<AppShell
  override={{
		main: {
			bc: isDark ? fns.themeColor('dark', 8) : fns.themeColor('gray', 0),
			color: isDark ? fns.themeColor('dark', 0) : 'black',
			ml: '0px !important',
			minHeight: 'calc(100vh - 65px) !important'
		}
	}}
>
  <Header
    slot="header"
    height={65}
    override={{ p: '$mdPX', bc: isDark ? fns.themeColor('dark', 7) : 'white', borderBottomColor: isDark ? fns.themeColor('dark', 5) : fns.themeColor('gray', 2) }}
  >
    <HeadContent {isDark} toggle={toggleTheme} />
  </Header>
  <slot>This is the main content</slot>
</AppShell>
