<div class="overflow-x-auto">
  <table class="table table-zebra">{@render children?.()}</table>
</div>

<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: Props = $props();

  type Props = { children?: Snippet<[]> };
</script>
