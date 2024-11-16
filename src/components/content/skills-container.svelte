<div
  class="card card-body card-compact mt-8 h-min w-[600px] max-w-full flex-shrink flex-grow-0 bg-neutral p-4 shadow-xl"
>
  <div class="gap-2">
    <div class="form-control w-36">
      <label class="label cursor-pointer">
        <span class="label-text">Languages</span>
        <input
          type="checkbox"
          class="toggle toggle-secondary toggle-sm"
          bind:checked={show.lang}
        />
      </label>
    </div>

    <div class="form-control w-36">
      <label class="label cursor-pointer">
        <span class="label-text">Frameworks</span>
        <input
          type="checkbox"
          class="toggle toggle-accent toggle-sm"
          bind:checked={show.framework}
        />
      </label>
    </div>

    <div class="form-control w-36">
      <label class="label cursor-pointer">
        <span class="label-text">Libraries</span>
        <input
          type="checkbox"
          class="toggle toggle-primary toggle-sm"
          bind:checked={show.lib}
        />
      </label>
    </div>

    <div class="form-control w-36">
      <label class="label cursor-pointer">
        <span class="label-text">Other</span>
        <input
          type="checkbox"
          class="toggle toggle-info toggle-sm"
          bind:checked={show.other}
        />
      </label>
    </div>
  </div>
</div>

favorite technologies

<div class="mx-2 my-8 max-w-full">
  {#if skills.lang && show.lang}
    {#each skills.lang as data}<SkillItem {data} />{/each}
  {/if}

  {#if skills.framework && show.framework}
    {#each skills.framework as data}<SkillItem {data} />{/each}
  {/if}

  {#if skills.lib && show.lib}
    {#each skills.lib as data}<SkillItem {data} />{/each}
  {/if}

  {#if skills.other && show.other}
    {#each skills.other as data}<SkillItem {data} />{/each}
  {/if}
</div>

<div class="flex-grow"></div>

<script lang="ts">
  import SkillItem from './skill-item.svelte';
  import type { CollectionEntry } from 'astro:content';

  type Props = {
    skills: Partial<
      Record<
        'lang' | 'framework' | 'lib' | 'other',
        CollectionEntry<'skill'>['data'][]
      >
    >;
  };

  let { skills }: Props = $props();

  let show = $state({
    lang: true,
    framework: true,
    lib: true,
    other: true,
  });
</script>
