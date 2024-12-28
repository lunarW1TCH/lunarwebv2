<h3 class="text-bold my-1 text-lg text-primary">{@render children?.()}</h3>

<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: Props = $props();

  type Props = { children?: Snippet<[]> };
</script>
