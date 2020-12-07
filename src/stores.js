import { writable } from 'svelte/store';

function createNotes() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        add: (note) => update(_notes => { _notes.push(note); return _notes }),
    };
}

export const notes = createNotes();