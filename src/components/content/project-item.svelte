<div
  class="card card-compact my-2 w-[600px] max-w-full bg-neutral text-neutral-content shadow-xl"
>
  <div class="prose card-body">
    <div class="prose flex">
      <a
        href={PROJECT_LINKS[project.data.id]}
        class="group link-hover link flex decoration-accent"
      >
        <Icon
          size={64}
          class="mr-2 min-w-[64px] stroke-1 group-hover:stroke-accent"
        />
        <h1 class="mb-0 max-sm:text-lg">{PROJECT_NAMES[project.data.id]}</h1>
        <ArrowUpRight class="max-sm:w-[16px]" />
      </a>
    </div>
    <p class="-mt-8 ml-[72px]">{project.data.description}</p>
    <div class="-mt-4 ml-[72px] flex flex-wrap gap-1">
      {#each project.data.technologies as tech}
        {@render badge(tech)}
      {/each}
    </div>
  </div>
</div>

{#snippet badge(tech: (typeof project)['data']['technologies'][number])}
  {@const isLinkable = LinkableTechnologies.safeParse(tech)}
  {@const skill = skills.find((s) => s.data.id === tech)}
  {@const type = match(skill?.data.type)
    .returnType<'secondary' | 'info' | 'accent' | 'primary'>()
    .with('framework', () => 'accent')
    .with('lang', () => 'secondary')
    .with('lib', () => 'primary')
    .with('other', undefined, () => 'info')
    .exhaustive()}

  {#if isLinkable.success}
    <LinkTechBadge tech={isLinkable.data} {type} />
  {:else}
    <NameTechBadge tech={tech as NonLinkableTechnologies} {type} />
  {/if}
{/snippet}

<script lang="ts">
  import { match } from 'ts-pattern';
  import type { CollectionEntry } from 'astro:content';
  import {
    ArrowUpRight,
    AudioLines,
    Bitcoin,
    CircuitBoard,
    Component,
    Dices,
    DraftingCompass,
    Gauge,
    Moon,
    Telescope,
  } from 'lucide-svelte';
  import { PROJECT_LINKS, PROJECT_NAMES } from '../../lib/projects';
  import LinkTechBadge from '../util/badges/link-tech-badge.svelte';
  import {
    LinkableTechnologies,
    NonLinkableTechnologies,
  } from '../../lib/technologies';
  import NameTechBadge from '../util/badges/name-tech-badge.svelte';

  let { project, skills }: Props = $props();

  let Icon = match(project.data.icon)
    .with('Moon', () => Moon)
    .with('Gauge', () => Gauge)
    .with('Compass', () => DraftingCompass)
    .with('Component', () => Component)
    .with('Bitcoin', () => Bitcoin)
    .with('Dices', () => Dices)
    .with('Telescope', () => Telescope)
    .with('CircuitBoard', () => CircuitBoard)
    .with('AudioLines', () => AudioLines)
    .exhaustive();

  type Props = {
    project: CollectionEntry<'project'>;
    skills: CollectionEntry<'skill'>[];
  };
</script>
