<a
  class="badge link text-xs font-normal no-underline {type === 'accent' &&
    'badge-accent'} {type === 'primary' && 'badge-primary'} {type ===
    'secondary' && 'badge-secondary'} {type === 'neutral' && 'badge-neutral'}"
  href={LINKS[tech]}
  target="_blank"
  rel="noreferrer"
>
  {NAMES[tech]}
</a>

<script lang="ts">
  import { LINKS, type LinkableTechnologies, NAMES } from '@/lib/technologies';

  let { tech, type }: Props = $props();

  type Props = {
    tech: LinkableTechnologies;
    type: 'neutral' | 'secondary' | 'accent' | 'primary';
  };
</script>
