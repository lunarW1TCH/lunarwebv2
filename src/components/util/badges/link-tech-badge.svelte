<a
  class="badge link badge-accent text-xs font-normal no-underline"
  href={LINKS[tech]}
  target="_blank"
  rel="noreferrer"
>
  {NAMES[tech]}
</a>

<script lang="ts">
  import { LINKS, type LinkableTechnologies, NAMES } from '@/lib/technologies';

  let { tech }: Props = $props();

  type Props = { tech: LinkableTechnologies };
</script>
