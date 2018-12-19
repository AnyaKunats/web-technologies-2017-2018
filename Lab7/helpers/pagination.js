module.exports = pagination = (db, query) => {
	const offset = parseInt(query.offset);
	const limit = parseInt(query.limit);

	return db.slice(offset, offset + limit);
};