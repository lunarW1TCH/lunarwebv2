<a
  class="badge link text-xs font-normal no-underline"
  class:badge-secondary={type === 'secondary'}
  class:badge-primary={type === 'primary'}
  class:badge-neutral={type === 'neutral'}
  class:badge-accent={type === 'accent'}
  href={TECH_LINKS[tech]}
  target="_blank"
  rel="noreferrer"
>
  {TECH_NAMES[tech]}
</a>

<script lang="ts">
  import {
    TECH_LINKS,
    type LinkableTechnologies,
    TECH_NAMES,
  } from '@/lib/technologies';

  let { tech, type }: Props = $props();

  type Props = {
    tech: LinkableTechnologies;
    type: 'neutral' | 'secondary' | 'accent' | 'primary';
  };
</script>
