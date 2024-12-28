<ul class="ml-4 list-inside list-disc [&_ul]:ml-5">
  {@render children?.()}
</ul>

<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: Props = $props();

  type Props = { children?: Snippet<[]> };
</script>
