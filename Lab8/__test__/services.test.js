const findById = require('../helpers/findById');
const findByName = require('../helpers/findByName');
const sortdb = require('../helpers/sortdb');
const pagination = require('../helpers/pagination');
const db = require('../helpers/readDataBase');

describe("services", () => {
  describe("id", () => {
    test('id = 603', () => {
      const movie = findById(db,1235);
			expect(movie.id).toBe(1235)
    });

    test("incorrect id", () => {
      const movie = findById(db,0);

      expect(movie).toBeUndefined();
    });
  });

  describe("name", () => {
    test('matrix', () => {
      const movies = findByName(db,"1944");

			movies.forEach(movie => {
				expect(movie).toHaveProperty('original_title');
				expect(movie).toHaveProperty('id');
				expect(movie).toHaveProperty('adult');
				expect(movie).toHaveProperty('popularity');
			});
    });

    test("incorrect name", () => {
      const movies = findByName(db,"uktgyhyjb");

      expect(movies.length).toBe(0);
    });
});

  describe("pagination", () => {
    test("from 15 to 25", () => {
      const query = {
        offset: 15,
        limit: 25
      }
      const movies = pagination(db, query);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBe(10);
    });

    test("incorrect pagination", () => {
      const query = {
        offset: 15,
        limit: 25
      }
      const movies = pagination(db, query);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBe(0);
    });
  });

  describe("sortBy", () => {
    test("sort key = id order = inc", () => {

			const query = {
				key: 'id',
				order: 'inc'
			};
      const movies = sortdb(db,query);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBeGreaterThan(1);

      for (let i = 0; i < movies.size - 1; i++)
        expect(movies[i].id < movies[i + 1].id).toBe(true);
    });

    test("sort key = original_title order = inc", () => {

			const query = {
				key: 'original_title',
				order: 'inc'
			};
      const movies = sortdb(db,query);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBeGreaterThan(1);

      for (let i = 0; i < movies.size - 1; i++)
        expect(movies[i].original_title < movies[i + 1].original_title).toBe(true);
    });
  });
});