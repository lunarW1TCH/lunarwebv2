<span class="badge badge-accent text-xs font-normal">
  {NAMES[tech]}
</span>

<script lang="ts">
  import { NAMES, type NonLinkableTechnologies } from '@/lib/technologies';

  let { tech }: Props = $props();

  type Props = { tech: NonLinkableTechnologies };
</script>
