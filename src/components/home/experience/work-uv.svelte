<div class="prose flex h-full w-full flex-col">
  <div class="flex w-full min-w-full gap-2">
    <a
      href="https://www.linkedin.com/company/uv-ou/"
      target="_blank"
      rel="noreferrer"
    >
      <img src="/uv.jpeg" class="my-0 h-20 w-20 rounded" alt="uv logo" />
    </a>
    <div class="flex-grow">
      <div class="my-0 mb-2 flex justify-between py-0">
        <h3 class="mb-4 mt-0 flex-grow text-2xl">UuedViljapuuaiad</h3>
        <div>
          <a
            href="https://www.linkedin.com/company/uv-ou/"
            target="_blank"
            rel="noreferrer"
            class="btn btn-square btn-ghost btn-sm"
          >
            <Linkedin class="h-5 w-5" />
          </a>
        </div>
      </div>
      <span class="text-xl">OÜ</span>
    </div>
  </div>

  <hr class="my-1" />

  <div class="flex flex-col">
    <span class="text-thin mt-1 self-end font-light text-primary">
      2023 February - 2023 May
    </span>
    <span class="text-thin mt-1 self-end font-light text-primary">
      Junior Developer
    </span>
  </div>

  <p class="my-0.5">
    UuedViljapuuaiad OÜ is a software and mobile game development company
    recognized for its innovative projects.
  </p>

  <p class="my-0.5">
    At UV, my work primarily focused on handling data using VBA and MS Access.
  </p>

  <p class="my-0.5">
    In my most recent project, I used VBA to extract data from MS Access and
    represent data flow, which was then displayed as an interactive, front-end
    diagram.
  </p>

  <div class="grow"></div>

  <div class="flex flex-row flex-wrap gap-2">
    <LinkTechBadge type="accent" tech="vba" />
    <LinkTechBadge type="accent" tech="react" />
    <LinkTechBadge type="accent" tech="javascript" />
  </div>
</div>

<script lang="ts">
  import LinkTechBadge from './../../util/badges/link-tech-badge.svelte';
  import { Linkedin } from 'lucide-svelte';
</script>
