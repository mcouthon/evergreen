<script>
  import marked from "marked";

  export let note;
</script>

<style>
  .preview {
    height: 75%;
    padding: 2rem;
    border-top: solid 2px #888;
  }
</style>

<div class="preview">
  {@html marked(note.text)}
</div>
