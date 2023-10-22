<script>
  import { AppShell, colorScheme, Container, fns, Header, ShellSection } from "@svelteuidev/core";
  import HeadContent from "$lib/layout/HeadContent.svelte";
  import bgImage from "$lib/assets/christian-lue-GzSJTU3vlD0-unsplash.jpg";

  $colorScheme = "dark";

  $: isDark = $colorScheme === "dark";

  function toggleTheme() {
    colorScheme.update((v) => (v === "light" ? "dark" : "light"));
  }
</script>

<AppShell
  override={{
		main: {
			bc: isDark ? fns.themeColor('dark', 8) : fns.themeColor('gray', 0),
			color: isDark ? fns.themeColor('dark', 0) : 'black',
			ml: '0px !important',
			minHeight: 'calc(100vh - 65px) !important',
			backgroundImage: `url("${bgImage}")`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			paddingTop: '20px !important'
		}
	}}
>
  <Header
    slot="header"
    height={65}
  >
    <HeadContent {isDark} toggle={toggleTheme} />
  </Header>

  <Container size="xl">
    <slot></slot>
  </Container>
</AppShell>
