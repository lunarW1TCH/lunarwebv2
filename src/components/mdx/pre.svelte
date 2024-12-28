<pre
  class="{className} font-['Fira Code Variable'] mb-2 rounded bg-base-200 px-4 py-2 text-sm"
  style="color:#cdd6f4;overflow-x:auto;white-space:pre-wrap;word-wrap:break-word"
  {...props}>{@render children()}</pre>

<script lang="ts">
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let { style: _, class: className, children, ...props } = $props();
</script>
