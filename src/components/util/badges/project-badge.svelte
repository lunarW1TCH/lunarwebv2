<a
  class="badge link text-xs font-normal no-underline"
  class:badge-secondary={type === 'secondary'}
  class:badge-primary={type === 'primary'}
  class:badge-neutral={type === 'neutral'}
  class:badge-accent={type === 'accent'}
  href={PROJECT_LINKS[project]}
  target="_blank"
  rel="noreferrer"
>
  {PROJECT_NAMES[project]}
</a>

<script lang="ts">
  import { PROJECT_LINKS, PROJECT_NAMES, type Projects } from '@/lib/projects';

  let { project, type }: Props = $props();

  type Props = {
    project: Projects;
    type: 'neutral' | 'secondary' | 'accent' | 'primary';
  };
</script>
