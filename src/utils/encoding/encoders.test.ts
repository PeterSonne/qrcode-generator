import encoders from './encoders';

describe('Encoders', () => {
  it.each([
    {
      input: '123',
      output: [0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
    },
    {
      input: '012',
      output: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    },
    {
      input: '12345',
      output: [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    },
  ])('numeric', ({ input, output }) => {
    expect(encoders.numeric(input)).toEqual(output);
  });
});
