<span
  class="badge text-xs font-normal"
  class:badge-secondary={type === 'secondary'}
  class:badge-primary={type === 'primary'}
  class:badge-info={type === 'info'}
  class:badge-accent={type === 'accent'}
>
  {TECH_NAMES[tech]}
</span>

<script lang="ts">
  import {
    TECH_NAMES,
    type NonLinkableTechnologies,
  } from '../../../lib/technologies';

  let { tech, type }: Props = $props();

  type Props = {
    tech: NonLinkableTechnologies;
    type: 'info' | 'secondary' | 'accent' | 'primary';
  };
</script>
