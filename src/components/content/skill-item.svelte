<li
  class="card card-compact mx-1 my-2 w-[600px] bg-neutral text-neutral-content shadow-xl"
>
  <div class="card-body">
    {#if isLinkable}
      <a
        href={TECH_LINKS[id as LinkableTechnologies]}
        class="link-hover link underline-offset-4"
        class:decoration-secondary={type === 'secondary'}
        class:decoration-primary={type === 'primary'}
        class:decoration-neutral={type === 'neutral'}
        class:decoration-accent={type === 'accent'}
      >
        <h2 class="card-title">{TECH_NAMES[id]}</h2>
      </a>
    {:else}
      <h2 class="card-title">{TECH_NAMES[id]}</h2>
    {/if}

    {#if projects}
      <div class="card-side flex flex-wrap gap-2">
        {#each projects as project}
          <ProjectBadge {project} {type} />
        {/each}
      </div>
    {/if}
  </div>
</li>

<script lang="ts">
  import ProjectBadge from './../util/badges/project-badge.svelte';
  import {
    LinkableTechnologies,
    TECH_LINKS,
    TECH_NAMES,
  } from '@/lib/technologies';
  import type { CollectionEntry } from 'astro:content';
  import { match } from 'ts-pattern';

  type Props = {
    data: CollectionEntry<'skill'>['data'];
  };

  let { data }: Props = $props();
  let { id, type: skillType, jobs, projects } = data;

  let type = match(skillType)
    .returnType<'secondary' | 'neutral' | 'accent' | 'primary'>()
    .with('framework', () => 'accent')
    .with('lang', () => 'secondary')
    .with('lib', () => 'primary')
    .with('other', () => 'neutral')
    .exhaustive();

  let isLinkable = LinkableTechnologies.safeParse(id).success;
</script>
