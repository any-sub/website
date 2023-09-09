<script lang="ts">
  import Logo from "../components/Logo.svelte";
  import { Group, ActionIcon, Text, Anchor, Burger, Tooltip, fns } from "@svelteuidev/core";
  import { Moon, Sun } from "radix-icons-svelte";
  import { hotkey, useOs } from "@svelteuidev/composables";

  const os = useOs();
  const mod = os === "macos" ? "⌘" : "ctrl";

  export let isDark: boolean;
  export let toggle: () => void;
</script>

<Group override={{ height: '100%', px: 20 }} position="apart">
  <Anchor
    underline={false}
    href="/"
    override={{ '&:hover': { textDecoration: 'none !important' } }}
  >
    <Group>
      <Logo size={35} />
      <Text color="blue" size="xl" override={{ d: 'none', '@sm': { d: 'block' } }}>
        SvelteUI Core
      </Text>
    </Group>
  </Anchor>
  <Tooltip label={`${mod} + J`}>
    <ActionIcon size="lg" radius="md" variant="outline" on:click={toggle} use={[[hotkey, [['mod+J', toggle]]]]}
                override={{...(isDark ? { backgroundColor: fns.themeColor('dark', 5), color: "white" } : {})}}>
      {#if isDark}
        <Sun />
      {:else}
        <Moon />
      {/if}
    </ActionIcon>
  </Tooltip>
</Group>