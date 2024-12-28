<em class="italic text-secondary">{@render children?.()}</em>

<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: Props = $props();

  type Props = { children?: Snippet<[]> };
</script>
