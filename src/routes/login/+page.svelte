<script lang="ts">
  import { Box, Button, Center, Container, Flex, Grid, Paper, Stack, Title } from "@svelteuidev/core";
  import { GithubLogo } from "radix-icons-svelte";
  import GoogleLogo from "$lib/icons/GoogleLogo.svelte";
  import { signIn } from "@auth/sveltekit/client";
</script>


<Container size="xl" override={{ py: 5, h: 100 }}>
  <Grid justify="center" align="center" override={{ h: 100 }}>
    <Grid.Col md={7} lg={5} xl={5} offsetMd={3} offsetXl={5}>
      <Paper shadow="md" withBorder override={{ p: 45 }}>
        <Stack spacing="xl">
          <Box>
            <Center>
              <Title order={1} center>Sign in</Title>
            </Center>
          </Box>
          <Flex justify="center" gap="lg" wrap="wrap">
            <Button color="blue" on:click={() => signIn("google")}>
              <GoogleLogo slot="leftIcon" />
              Continue with Google
            </Button>
            <Button color="violet" on:click={() => signIn("github")}>
              <GithubLogo slot="leftIcon" />
              Continue with GitHub
            </Button>
          </Flex>
        </Stack>
      </Paper>
    </Grid.Col>
  </Grid>
</Container>
