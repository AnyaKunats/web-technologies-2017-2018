const CONST = require('../constants');

module.exports = findById = (db, id) => {
	return db.find(elem => {
			return elem[CONST.id] === parseInt(id);
	});
};