<div class="prose flex h-full w-full flex-col">
  <div class="flex w-full gap-2">
    <a href="https://4cf.eu/" target="_blank" rel="noreferrer">
      <img src="/4cf_logo.jpeg" class="my-0 h-20 w-20 rounded" alt="4cf logo" />
    </a>
    <div>
      <div class="my-0 flex justify-between py-0">
        <h3 class="mb-3 mt-0 flex-grow text-5xl">4CF</h3>
        <div>
          <a
            href="https://www.linkedin.com/company/4cf"
            target="_blank"
            rel="noreferrer"
            class="btn btn-square btn-ghost btn-sm"
          >
            <Linkedin class="h-5 w-5" />
          </a>
          <a
            href="https://4cf.eu/"
            target="_blank"
            rel="noreferrer"
            class="btn btn-square btn-ghost btn-sm p-0"
          >
            <ExternalLink class="h-5 w-5" />
          </a>
        </div>
      </div>
      <span class="text-lg">The Futures Literacy Company</span>
    </div>
  </div>

  <hr class="my-1" />

  <div class="flex flex-col">
    <span class="text-thin mt-1 self-end font-light text-primary">
      2023 September - Present
    </span>
    <span class="text-thin mt-1 self-end font-light text-primary">
      Fullstack Developer
    </span>
  </div>

  <p class="my-0.5">
    At 4CF I am responsible for creating and modernizing web applications used
    by the company to conduct research.
  </p>
  <p class="my-0.5">
    For nearly two decades, 4CF has been on a quest to equip businesses, public
    entities, and international organizations with foresight advisory, tools,
    and solutions.
  </p>

  <div class="grow"></div>

  <div class="flex flex-row flex-wrap gap-2">
    <LinkTechBadge type="accent" tech="typescript" />
    <LinkTechBadge type="accent" tech="react" />
    <LinkTechBadge type="accent" tech="next" />
    <LinkTechBadge type="accent" tech="elysia" />
    <LinkTechBadge type="accent" tech="prisma" />
    <NameTechBadge type="accent" tech="sso" />
    <NameTechBadge type="accent" tech="no-sql" />
    <LinkTechBadge type="accent" tech="mongo" />
    <LinkTechBadge type="accent" tech="node" />
    <LinkTechBadge type="accent" tech="bun" />
    <LinkTechBadge type="accent" tech="stripe" />
    <LinkTechBadge type="accent" tech="panda" />
    <LinkTechBadge type="accent" tech="react-email" />
    <LinkTechBadge type="accent" tech="vercel" />
    <LinkTechBadge type="accent" tech="shadcn" />
  </div>
</div>

<script lang="ts">
  import NameTechBadge from '@/components/util/badges/name-tech-badge.svelte';
  import LinkTechBadge from '@/components/util/badges/link-tech-badge.svelte';
  import { Linkedin, ExternalLink } from 'lucide-svelte';
</script>
