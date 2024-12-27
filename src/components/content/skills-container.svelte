<div
  class="mt-8 flex w-[600px] max-w-full flex-row flex-col gap-2 min-[500px]:flex-row"
>
  <div
    class="card card-body card-compact min-w-fit flex-row bg-neutral p-4 shadow-xl"
  >
    <div
      class="gap-2 max-[500px]:grid max-[500px]:w-full max-[500px]:grid-cols-2 max-[500px]:gap-4"
    >
      <div class="form-control w-36 max-[500px]:w-full">
        <label class="label cursor-pointer max-[500px]:w-full">
          <span class="label-text">Languages</span>
          <input
            type="checkbox"
            class="toggle toggle-secondary toggle-sm"
            bind:checked={show.lang}
          />
        </label>
      </div>

      <div class="form-control w-36 max-[500px]:w-full">
        <label class="label cursor-pointer max-[500px]:w-full">
          <span class="label-text">Frameworks</span>
          <input
            type="checkbox"
            class="toggle toggle-accent toggle-sm"
            bind:checked={show.framework}
          />
        </label>
      </div>

      <div class="form-control w-36 max-[500px]:w-full">
        <label class="label cursor-pointer max-[500px]:w-full">
          <span class="label-text">Libraries</span>
          <input
            type="checkbox"
            class="toggle toggle-primary toggle-sm"
            bind:checked={show.lib}
          />
        </label>
      </div>

      <div class="form-control w-36 max-[500px]:w-full">
        <label class="label cursor-pointer max-[500px]:w-full">
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
  <div
    class="prose card card-body card-compact flex max-w-fit flex-grow bg-neutral p-4 text-sm shadow-xl prose-p:my-0 sm:text-base"
  >
    <p>
      Below is a list of technologies I have worked with, either professionally
      or during my free time.
    </p>
    <p>
      Each one is accompanied by a badge with a link that provides information
      about the <b>companies</b> I have worked for or my
      <b>personal projects</b>.
    </p>
  </div>
</div>

<div class="mx-2 my-8 max-w-full flex-grow">
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
