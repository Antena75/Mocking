import fetchData from '../http';
import {getLevel} from '../getLevel';

jest.mock('../http.js');

beforeEach(() => {
  jest.resetAllMocks();
});

test.each([
  [1, {status: 'ok', level: 55}],
  [-100, {status: 'not find', description: ''}],
])("testing the getLevel function with id=%i and response=%s", (id, response) => {
  fetchData.mockReturnValue(response);
  getLevel(id);
  expect(fetchData).toBeCalledWith(`https://server/user/${id}`);
})

