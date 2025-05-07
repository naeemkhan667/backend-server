import { sum } from '../app1.js';

describe('Sample unit test', () => {
  it('should return correct sum', () => {
    expect(sum(2, 3)).toBe(5);
  });
});

// describe('Todo Controller', () => {
//     it('should work', () => {
//       expect(true).toBe(true);
//     });
//   });