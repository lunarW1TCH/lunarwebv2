<div
  class="card card-compact mx-2 mx-4 mx-4 my-8 my-8 w-[700px] max-w-full bg-neutral p-4 shadow-xl"
>
  <div class="card-body">
    <h1 class="card-title text-2xl text-accent">{project.data.id}</h1>

    <div
      class="mb-2 flex w-full justify-between max-[550px]:flex-col max-[550px]:justify-end"
    >
      <div class="flex w-1/2 flex-col gap-2 max-[550px]:w-full">
        <span class="text-neutral-content"
          >Created: {formatDate(createdOn)}</span
        >
        {#if updatedOn}
          <span class="text-neutral-content"
            >Updated: {formatDate(updatedOn)}</span
          >
        {/if}
      </div>
      {#if project.data.links && project.data.links.length > 0}
        <div
          class="mb-2 flex w-1/2 w-full flex-col items-end gap-2 max-[550px]:mt-2 max-[550px]:w-full"
        >
          {#each project.data.links as { link, type, name }}
            <a
              class="link-hover link decoration-accent"
              href={link}
              target="_blank"
            >
              <span>{name}</span>{@render icon(type)}
            </a>
          {/each}
        </div>
      {/if}
    </div>

    {@render children()}
  </div>
</div>

{#snippet icon(
  type: NonNullable<(typeof project)['data']['links']>[number]['type']
)}
  {@const Icon = match(type)
    .with('github', () => Github)
    .with('website', () => AppWindow)
    .with('other', () => ExternalLink)
    .exhaustive()}

  <Icon class="mb-1 ml-1 inline" size={16} />
{/snippet}

<script lang="ts">
  import { AppWindow, ExternalLink, Github } from 'lucide-svelte';
  import { type CollectionEntry } from 'astro:content';
  import type { Snippet } from 'svelte';
  import { match } from 'ts-pattern';

  let { project, children }: Props = $props();

  let createdOn = new Date(project.data.createdOn);
  let updatedOn =
    project.data.updatedOn ? new Date(project.data.updatedOn) : undefined;

  let formatDate = Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
  }).format;

  type Props = {
    project: CollectionEntry<'project'>;
    children: Snippet<[]>;
  };
</script>
