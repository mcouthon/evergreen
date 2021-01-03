<script>
  import marked from "marked";

  import Notes from "../components/Notes.svelte";

  let title = "";
  let body = "";

  function addNote() {
    if (!body) {
      return;
    }

    if (!title) {
      return;
    }

    const note = { title: title, body: body };

    fetch("notes.json", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        title = "";
        body = "";
        r.json().then(function (result) {
          // The data is posted: do something with the result...
        });
      })
      .catch((err) => {
        // POST error: do something...
        console.log("POST error", err.message);
      });
  }
</script>

<style>
</style>

<svelte:head>
  <title>Evergreen</title>
</svelte:head>

<div class="container">
  <div class="row">
    <div class="col">
      <div><input type="text" bind:value={title} /></div>
      <div>
        <!-- Declare a textarea where the user can enter markdown, and bind it to the variable `markdown` -->
        <textarea rows="30" cols="60" bind:value={body} placeholder="Enter markdown here" />
      </div>
      <div>
        <button class="save" on:click={addNote}>
          <span class="circle" aria-hidden="true"> <span class="icon arrow" /> </span>
          <span class="button-text">Save</span>
        </button>
      </div>
    </div>
    <div class="col">
      <div>
        {@html marked(body)}
      </div>
    </div>
  </div>
</div>
<Notes bind:newNote={body} />
