<div
  class="card card-compact mx-1 min-h-[565px] w-[22rem] bg-neutral p-0 text-neutral-content shadow-xl"
>
  <div class="card-body">
    <div class="carousel carousel-center h-full gap-2 overflow-hidden">
      {@render expItem(1, Uni)}
      {@render expItem(2, Work4CF)}
      {@render expItem(3, Uni)}
      {@render expItem(4, Uni)}
    </div>
    <div class="flex w-full justify-center gap-2 pt-2">
      {@render pageBtn(1)}
      {@render pageBtn(2)}
      {@render pageBtn(3)}
      {@render pageBtn(4)}
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

  let exp = $state(1);

  let onclick = (i: number): void => {
    exp = i;
  };
</script>
