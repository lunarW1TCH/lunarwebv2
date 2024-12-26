<div
  class="card card-compact my-2 w-[600px] max-w-full bg-neutral text-neutral-content shadow-xl"
>
  <div class="card-body">
    {#if isLinkable}
      <div class="flex justify-between">
        <a
          href={TECH_LINKS[id as LinkableTechnologies]}
          class="link-hover link underline-offset-4"
          class:decoration-secondary={type === 'secondary'}
          class:decoration-primary={type === 'primary'}
          class:decoration-info={type === 'info'}
          class:decoration-accent={type === 'accent'}
        >
          <h2 class="card-title">{TECH_NAMES[id]}</h2>
        </a>
      </div>
    {:else}
      <div class="flex justify-between">
        <h2 class="card-title">{TECH_NAMES[id]}</h2>
      </div>
    {/if}

    {#if jobs}
      <div class="flex flex-wrap gap-2">
        {#each jobs as job}
          <JobBadge {job} {type} />
        {/each}
      </div>
    {/if}

    {#if projects}
      <div class="card-side flex flex-wrap gap-2">
        {#each projects as project}
          <ProjectBadge {project} {type} />
        {/each}
      </div>
    {/if}
  </div>
</div>

<script lang="ts">
  import JobBadge from './../util/badges/job-badge.svelte';
  import ProjectBadge from './../util/badges/project-badge.svelte';
  import {
    LinkableTechnologies,
    TECH_LINKS,
    TECH_NAMES,
  } from '../../lib/technologies';
  import type { CollectionEntry } from 'astro:content';
  import { match } from 'ts-pattern';

  type Props = {
    data: CollectionEntry<'skill'>['data'];
  };

  let { data }: Props = $props();
  let { id, type: skillType, jobs, projects } = data;

  let type = match(skillType)
    .returnType<'secondary' | 'info' | 'accent' | 'primary'>()
    .with('framework', () => 'accent')
    .with('lang', () => 'secondary')
    .with('lib', () => 'primary')
    .with('other', () => 'info')
    .exhaustive();

  let isLinkable = LinkableTechnologies.safeParse(id).success;
</script>
