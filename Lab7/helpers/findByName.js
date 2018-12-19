const CONST = require('../constants');

module.exports = findByName = (db, name) => {
	const found = [];

	db.find((elem) => {
			const sample = name.replace(' ', '').toLowerCase();
			const elValue = elem[CONST.name]? elem[CONST.name].replace(' ', '').toLowerCase() : "";
			if (elValue.search(sample) !== -1)
					found.push(elem);
			return false;
	});

	return found;
};