import db from './_notes.js';

function getNotes() {
	const notes = db.get("notes").value()
	return JSON.stringify(notes.map(note => {
		return {
			title: note.title,
			slug: note.slug
		};
	}));
}


export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(getNotes());
}

export function post(req, res, next) {
	res.setHeader('Content-Type', 'application/json')
	const note = req.body
	const title = note.title
	const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
	const html = note.body

	db.get('notes')
		.push({ title, html: html, slug: slug })
		.write()

	return res.end(getNotes())
}