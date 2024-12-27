<div
  class="card card-compact my-2 w-[600px] max-w-full bg-neutral text-neutral-content shadow-xl"
>
  <div class="prose card-body">
    <div class="prose flex">
      <a
        href="/projects/{project.data.id}"
        class="group link-hover link flex decoration-accent"
      >
        <Icon
          size={64}
          class="mr-2 min-w-[64px] stroke-1 group-hover:stroke-accent"
        />
        <h1 class="mb-0">{PROJECT_NAMES[project.data.id]}</h1>
        <ArrowUpRight />
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

  {#if isLinkable.success && skill}
    {@const type = match(skill.data.type)
      .returnType<'secondary' | 'info' | 'accent' | 'primary'>()
      .with('framework', () => 'accent')
      .with('lang', () => 'secondary')
      .with('lib', () => 'primary')
      .with('other', () => 'info')
      .exhaustive()}

    <LinkTechBadge tech={isLinkable.data} {type} />
  {/if}
{/snippet}

<script lang="ts">
  import { match } from 'ts-pattern';
  import type { CollectionEntry } from 'astro:content';
  import { ArrowUpRight, Moon } from 'lucide-svelte';
  import { PROJECT_NAMES } from '../../lib/projects';
  import LinkTechBadge from '../util/badges/link-tech-badge.svelte';
  import { LinkableTechnologies } from '../../lib/technologies';

  let { project, skills }: Props = $props();

  let Icon = match(project.data.icon)
    .with('Moon', () => Moon)
    .exhaustive();

  type Props = {
    project: CollectionEntry<'project'>;
    skills: CollectionEntry<'skill'>[];
  };
</script>
