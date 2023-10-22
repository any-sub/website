<script lang="ts">
  import Logo from "$lib/icons/Logo.svelte";
  import { ActionIcon, Anchor, Group, Text, Tooltip } from "@svelteuidev/core";
  import { Exit, Moon, Sun } from "radix-icons-svelte";
  import { hotkey, useOs } from "@svelteuidev/composables";
  import { page } from "$app/stores";
  import { signOut } from "@auth/sveltekit/client";

  const os = useOs();
  const mod = os === "macos" ? "⌘" : "ctrl";

  export let isDark: boolean;
  export let toggle: () => void;
</script>

<Group override={{ height: '100%', px: 20 }} position="apart">
  <Group>
    <Anchor
      underline={false}
      href="/"
      override={{ '&:hover': { textDecoration: 'none !important' } }}
    >
      <Group>
        <Logo size={35} />
        <Text size="xl" override={{ d: 'none', '@sm': { d: 'block' } }}>
          AnySub
        </Text>
      </Group>
    </Anchor>
    <Anchor underline={false} href="/jobs">Jobs</Anchor>
  </Group>
  <Group>
    <Tooltip label={`${mod} + J`}>
      <ActionIcon size="lg" radius="md" variant="outline" on:click={toggle} use={[[hotkey, [['mod+J', toggle]]]]}
      >
        {#if isDark}
          <Sun />
        {:else}
          <Moon />
        {/if}
      </ActionIcon>
    </Tooltip>
    {#if $page.data.session}
      <ActionIcon size="lg" radius="md" variant="outline" on:click={signOut}>
        <Exit />
      </ActionIcon>
    {/if}
  </Group>
</Group>