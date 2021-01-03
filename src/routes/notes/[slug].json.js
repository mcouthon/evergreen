import db from './_notes.js';


export function get(req, res, next) {
	const notes = db.get("notes").value()
	const lookup = new Map();
	notes.forEach(note => {
		lookup.set(note.slug, JSON.stringify(note));
	});
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
