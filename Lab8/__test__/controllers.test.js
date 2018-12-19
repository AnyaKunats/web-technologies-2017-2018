const controllers = require('../controllers/movies');
const findById = require('../helpers/findById');
const findByName = require('../helpers/findByName');
const sortdb = require('../helpers/sortdb');
const pagination = require('../helpers/pagination');
const db = require('../helpers/readDataBase');

describe("controllers", () => {

  test("mock test 'id'", () => {
    const send = jest.fn();
    const req = { params: { id: 603 } };
    const res = { send };

    controllers.findById(req, res);

    expect(send.mock.calls).toHaveLength(1);
    expect(send).toBeCalledWith(findById(db,335983));
  });

  test("mock test 'name'", () => {
    const send = jest.fn();
    const req = { params: { title: '1944' } };
    const res = { send };

    controllers.findByName(req, res);

    expect(send.mock.calls.length).toBe(1);
    expect(send).toBeCalledWith(findByName(db,'1944'));
  });

  test("mock test 'pagination'", () => {
    const send = jest.fn();
    const req = { query: { offset: 3, limit: 10 } };
    const res = { send };

    controllers.pagination(req, res);

    expect(send.mock.calls.length).toBe(1);
    expect(send).toBeCalledWith(pagination(db,req));
  });

  test("mock test 'sort by id'", () => {
    const send = jest.fn();
    const req = {
      query: { key: "id", order: 'inc' }
    };
    const res = { send };

    controllers.sort(req, res);

    expect(send.mock.calls.length).toBe(1);
    expect(send).toBeCalledWith(sortdb(db,req));
  });

});