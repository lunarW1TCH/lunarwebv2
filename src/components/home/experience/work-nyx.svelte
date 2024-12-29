<div class="prose flex h-full w-full flex-col">
  <div class="flex w-full min-w-full gap-2">
    <a href="https://www.nyxvx.com/" target="_blank" rel="noreferrer">
      <img
        src="/nyxvx_logo.jpeg"
        class="my-0 h-20 w-20 rounded"
        alt="nyx logo"
      />
    </a>
    <div class="flex-grow">
      <div class="my-0 flex justify-between py-0">
        <h3 class="mb-3 mt-0 flex-grow text-5xl">NYX</h3>
        <div>
          <a
            href="https://www.linkedin.com/company/nyxvx"
            target="_blank"
            rel="noreferrer"
            class="btn btn-square btn-ghost btn-sm"
          >
            <Linkedin class="h-5 w-5" />
          </a>
          <a
            href="https://www.nyxvx.com/"
            target="_blank"
            rel="noreferrer"
            class="btn btn-square btn-ghost btn-sm p-0"
          >
            <ExternalLink class="h-5 w-5" />
          </a>
        </div>
      </div>
      <span class="text-lg">VX</span>
    </div>
  </div>

  <hr class="my-1" />

  <div class="flex flex-col">
    <span class="text-thin mt-1 self-end font-light text-primary">
      2022 October - 2023 May
    </span>
    <span class="text-thin mt-1 self-end font-light text-primary">
      Junior Developer
    </span>
  </div>

  <p class="my-0.5">
    Nyx is an international company specializing in VR and AR technologies. As
    an Epic Games MegaGrant recipient, they have extensive experience to
    accelerate brand engagement and brand adoption.
  </p>

  <p class="my-0.5">
    I worked with a talented team from around the world which helped me gain
    first experience in the tech industry.
  </p>

  <p class="my-0.5">
    My responsibilities included creating content inside of Unreal Engine 5.
  </p>

  <div class="grow"></div>

  <div class="flex flex-row flex-wrap gap-2">
    <LinkTechBadge type="accent" tech="ue5" />
  </div>
</div>

<script lang="ts">
  import LinkTechBadge from './../../util/badges/link-tech-badge.svelte';
  import { ExternalLink, Linkedin } from 'lucide-svelte';
</script>
