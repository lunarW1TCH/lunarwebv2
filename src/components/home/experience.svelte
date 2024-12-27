<div
  class="card card-compact mx-1 min-h-[565px] w-[22rem] flex-shrink bg-neutral p-0 text-neutral-content shadow-xl"
>
  <div class="card-body">
    <div class="carousel carousel-center h-full gap-2 overflow-hidden">
      {@render expItem(1, Uni)}
      {@render expItem(2, Work4CF)}
      {@render expItem(3, WorkANV)}
      {@render expItem(4, WorkUV)}
      {@render expItem(5, WorkNYX)}
    </div>
    <div class="flex w-full justify-center gap-2 pt-2">
      {@render pageBtn(1)}
      {@render pageBtn(2)}
      {@render pageBtn(3)}
      {@render pageBtn(4)}
      {@render pageBtn(5)}
    </div>
  </div>
</div>

{#snippet pageBtn(index: number)}
  <a
    onclick={() => onclick(index)}
    href="#exp{index}"
    class="btn btn-accent btn-xs {exp === index ? 'btn-accent' : 'btn-ghost'}"
  >
    {index}
  </a>
{/snippet}

{#snippet expItem(index: number, Item: Component)}
  <div class="carousel-item flex h-full w-full justify-center" id="exp{index}">
    <Item />
  </div>
{/snippet}

<script lang="ts">
  import type { Component } from 'svelte';
  import Uni from './experience/uni.svelte';
  import Work4CF from './experience/work-4cf.svelte';
  import WorkANV from './experience/work-anv.svelte';
  import WorkNYX from './experience/work-nyx.svelte';
  import WorkUV from './experience/work-uv.svelte';
  import { HomeHash } from '../../lib/jobs';
  import { match } from 'ts-pattern';

  let exp = $state(1);

  let onclick = (i: number): void => {
    exp = i;
  };

  $effect(() => {
    if (typeof window === 'undefined') return;

    const { data, success } = HomeHash.safeParse(window.location.hash);
    if (!success) return;

    match(data)
      .with('#exp1', () => onclick(1))
      .with('#exp2', () => onclick(2))
      .with('#exp3', () => onclick(3))
      .with('#exp4', () => onclick(4))
      .with('#exp5', () => onclick(5));
  });
</script>
