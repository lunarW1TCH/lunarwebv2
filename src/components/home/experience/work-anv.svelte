<div class="prose flex h-full w-full flex-col">
  <div class="flex w-full gap-2">
    <a
      href="https://anvproduction.pl"
      target="_blank"
      rel="noreferrer"
      class="max-h-20 min-h-20 min-w-20 rounded bg-white p-1"
    >
      <img src="/anv.svg" class="my-1 h-16 w-20" alt="anv logo" />
    </a>
    <div class="w-full">
      <div class="my-0 flex w-full justify-between py-0">
        <h3 class="mb-1 mt-0 flex-grow text-5xl">ANV</h3>
        <div>
          <a
            href="https://anvproduction.pl"
            target="_blank"
            rel="noreferrer"
            class="btn btn-square btn-ghost btn-sm p-0"
          >
            <ExternalLink class="h-5 w-5" />
          </a>
        </div>
      </div>
      <span class="text-3xl">Production</span>
    </div>
  </div>

  <hr class="my-1" />

  <div class="flex flex-col">
    <span class="text-thin mt-1 self-end font-light text-primary">
      2023 February - 2023 October
    </span>
    <span class="text-thin mt-1 self-end font-light text-primary">
      Developer
    </span>
  </div>

  <p class="my-0.5">
    Project in which I was responsible for creating a real-time communication
    system using radio modules and web sockets.
  </p>
  <p class="my-0.5">
    I created: code for Arduino controllers, Flask and Socket.IO based server on
    RPi devices, frontend and backend services for managing RPi devices from one
    place.
  </p>

  <div class="grow"></div>

  <div class="flex flex-row flex-wrap gap-2">
    <LinkTechBadge type="accent" tech="typescript" />
    <LinkTechBadge type="accent" tech="python" />
    <LinkTechBadge type="accent" tech="react" />
    <LinkTechBadge type="accent" tech="next" />
    <LinkTechBadge type="accent" tech="node" />
    <LinkTechBadge type="accent" tech="bun" />
    <LinkTechBadge type="accent" tech="socket-io" />
    <LinkTechBadge type="accent" tech="flask" />
    <LinkTechBadge type="accent" tech="docker" />
    <LinkTechBadge type="accent" tech="rpi" />
    <LinkTechBadge type="accent" tech="arduino" />
  </div>
</div>

<script lang="ts">
  import LinkTechBadge from './../../util/badges/link-tech-badge.svelte';
  import { ExternalLink } from 'lucide-svelte';
</script>
