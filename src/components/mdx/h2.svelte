<h2 class="text-bold my-2 text-2xl text-primary">{@render children?.()}</h2>

<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: Props = $props();

  type Props = { children?: Snippet<[]> };
</script>
