<script>
	import marked from "marked";
	import { notes } from "./stores.js";

	import Note from "./Note.svelte";

	let markdown = "";
</script>

<style>
	.board {
		display: -webkit-box;
		/* display: flex; */
		/* grid-template-columns: 1fr 1fr; */
		grid-gap: 1em;
		/* max-width: 36em; */
		margin: 1em auto;
		font-family: "Fira Mono", monospace;
	}

	.preview {
	}

	.board > input {
		font-size: 1.4em;
		grid-column: 1/3;
	}
</style>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap"
		rel="stylesheet" />
</svelte:head>
<div class="board">
	<!-- Declare a textarea where the user can enter markdown, and bind it to the variable `markdown` -->
	<textarea bind:value={markdown} placeholder="Enter markdown here" />

	<div class="preview">
		{@html marked(markdown)}
	</div>

	<div>
		<Note />
	</div>
</div>
