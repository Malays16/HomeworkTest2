import { sortHeroesByHealth } from '../user';
import { heroes } from '../user';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('sorted heroes by health', () => {
  const result = sortHeroesByHealth(heroes);
  expect(result).toEqual([
    {
      name: 'маг',
      health: 100,
    },
    {
      name: 'лучник',
      health: 80,
    },
    {
      name: 'мечник',
      health: 10,
    },
  ]);
});
