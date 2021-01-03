<script context="module">
  export function preload() {
    return this.fetch(`notes.json`)
      .then((r) => r.json())
      .then((notes) => {
        return { notes };
      });
  }
</script>

<script>
  export let notes;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Notes</title>
</svelte:head>

<h1>Recent notes</h1>

<ul>
  {#each notes as note}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li><a rel="prefetch" href="notes/{note.slug}">{note.title}</a></li>
  {/each}
</ul>
