<script lang="ts">
  import { Badge, Card, Group, Image, Text } from "@svelteuidev/core";
  import type { State } from "../../../../service/types";
  import PotentialAnchor from "$lib/layout/PotentialAnchor.svelte";

  export let update: State;
</script>

<PotentialAnchor url={update.url} target="_blank">
  <Card shadow="sm" padding="lg" override={{maxWidth: 300}}>
    <Card.Section first padding="lg">
      <Image height="400" override={{ maxHeight: '400px' }}
             src="{update.image ?? 'https://picsum.photos/id/420/280/400'}"
      />
      {#if !update.read}
        <Badge color="red" variant="filled" override={{ position: 'absolute', right: '10px', top: '10px' }}>
          NEW
        </Badge>
      {/if}
    </Card.Section>

    <Group position="apart" noWrap override={{ paddingBlock: '5px' }}>
      <Text size="xl" weight={"500"} override={{ wordBreak: 'break-all' }}>{update.title}</Text>
    </Group>

    {#if update.description}
      <Text size="sm" override={{ paddingBlock: '5px' }}>
        {update.description}
      </Text>
    {/if}
  </Card>
</PotentialAnchor>