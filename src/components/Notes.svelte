<script>
  import { onMount } from "svelte";
  import Note from "./Note.svelte";

  // const low = require("lowdb");
  // const FileSync = require("lowdb/adapters/FileSync");

  // let adapter;
  // let db;

  export let newNote;

  let notes = [];

  // onMount(async () => {
  //   adapter = new FileSync("db.json");
  //   db = low(adapter);
  //   notes = db.get("notes");
  // });

  function addNote(text) {
    if (!text) {
      return;
    }
    const newNoteId = notes.length ? Math.max(...notes.map((n) => n.id)) + 1 : 1;
    notes = [...notes, { id: newNoteId, text }];
    newNote = "";
  }

  function removeNote(note) {
    notes = notes.filter((n) => n.id !== note.id);
  }
  function updateNote(note) {
    const i = notes.findIndex((n) => n.id === note.id);
    notes[i] = { ...notes[i], ...note };
  }
</script>

<style>
  .board {
    display: -webkit-box;
    /* display: flex; */
    /* grid-template-columns: 1fr 1fr; */
    grid-gap: 1em;
    /* max-width: 36em; */
    margin: 1em auto;
    /* font-family: "Fira Mono", monospace; */
  }
</style>

<div class="board">
  {#each Object.values(notes) as note (note.id)}
    <Note {note} />
  {/each}
</div>
