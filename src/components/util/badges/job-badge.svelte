<a
  class="badge link text-xs font-normal no-underline"
  class:badge-secondary={type === 'secondary'}
  class:badge-primary={type === 'primary'}
  class:badge-info={type === 'info'}
  class:badge-accent={type === 'accent'}
  href={JOB_LINKS[job]}
>
  <BriefcaseBusiness class="mr-1 h-3 w-3" />
  {JOB_NAMES[job]}
</a>

<script lang="ts">
  import { JOB_LINKS, JOB_NAMES, type Jobs } from '../../../lib/jobs';
  import { BriefcaseBusiness } from 'lucide-svelte';
  let { job, type }: Props = $props();

  type Props = {
    job: Jobs;
    type: 'info' | 'secondary' | 'accent' | 'primary';
  };
</script>
