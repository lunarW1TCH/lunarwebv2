<pre
  class="{className} font-['Fira Code Variable'] rounded bg-base-200 px-4 py-2 text-sm"
  style="color:#cdd6f4;overflow-x:auto;white-space:pre-wrap;word-wrap:break-word"
  {...props}>{@render children()}</pre>

<script lang="ts">
  const { style, class: className, children, ...props } = $props();
</script>
