import { sum } from './sum';

describe('test suite for sum function', () => {
  it('should return the correct sum', () => {
    expect(sum(5, 3)).toBe(8);
  });
});
