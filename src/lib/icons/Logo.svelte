<script lang="ts">
  import { Image } from "@svelteuidev/core";
  import logo from "$lib/icons/logo.png";

  export let size = 110;
</script>

<Image src={logo} width={size} height={size} />