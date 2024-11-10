<span
  class="badge badge-accent text-xs font-normal {type === 'accent' &&
    'badge-accent'} {type === 'primary' && 'badge-primary'} {type ===
    'secondary' && 'badge-secondary'} {type === 'neutral' && 'badge-neutral'}"
>
  {NAMES[tech]}
</span>

<script lang="ts">
  import { NAMES, type NonLinkableTechnologies } from '@/lib/technologies';

  let { tech, type }: Props = $props();

  type Props = {
    tech: NonLinkableTechnologies;
    type: 'neutral' | 'secondary' | 'accent' | 'primary';
  };
</script>
