<footer
  class="footer bottom-0 grid-flow-col items-center bg-neutral p-2 text-neutral-content shadow-inner"
>
  <aside class="grid-flow-col items-center">
    <MoonStar class="h-5 w-5" />
    <p>Copyright © {new Date().getFullYear()} | Adrian Żegnałek</p>
  </aside>
  <nav class="grid-flow-col gap-4 place-self-center justify-self-end">
    <a
      class="btn btn-square btn-ghost btn-xs"
      href="https://www.linkedin.com/in/adrian-zegnalek/"
      target="_blank"
      rel="noreferrer"
    >
      <Linkedin class="h-5 w-5" />
    </a>
    <a
      class="btn btn-square btn-ghost btn-xs"
      href="https://github.com/lunarW1TCH"
      target="_blank"
      rel="noreferrer"
    >
      <Github class="h-5 w-5" />
    </a>
  </nav>
</footer>

<script lang="ts">
  import { MoonStar, Linkedin, Github } from 'lucide-svelte';
</script>
