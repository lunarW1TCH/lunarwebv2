<li
  class="card card-compact mx-1 my-2 w-[600px] bg-neutral text-neutral-content shadow-xl"
>
  <div class="card-body">
    <h2 class="card-title">{data.id}</h2>
    <div class="card-side">
      <LinkTechBadge type="secondary" tech="arduino" />
    </div>
  </div>
</li>

<script lang="ts">
  import LinkTechBadge from '@/components/util/badges/link-tech-badge.svelte';
  import type { CollectionEntry } from 'astro:content';

  type Props = {
    data: CollectionEntry<'skill'>['data'];
  };

  let { data }: Props = $props();
</script>
