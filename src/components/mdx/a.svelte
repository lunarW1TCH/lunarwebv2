<a
  class="{className} link link-info"
  target="_blank"
  rel="noreferrer"
  href={typeof href === 'object' ? href?.toString() : href}
  >{@render children?.()}</a
>

<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children, class: className, href }: Props = $props();

  // eslint-disable-next-line no-undef
  type Props = astroHTML.JSX.IntrinsicElements['a'] & {
    children?: Snippet<[]>;
  };
</script>
