const db = require('../helpers/readDataBase');
const sortdb = require('../helpers/sortdb');
const findByName = require('../helpers/findByName');
const findById = require('../helpers/findById');
const pagination = require('../helpers/pagination');


module.exports = {
    movies: (req, res) => {
        res.send(db);
    },

    sort: (req, res) => {
        res.send(sortdb(db, req.query));
    },

    findByName: (req, res) => {
        res.send(findByName(db, req.params.name));
    },

    findById: (req, res) => {
        res.send(findById(db, req.params.id));
    },

    pagination: (req, res) => {
        res.send(pagination(db, req.query));
    }
};