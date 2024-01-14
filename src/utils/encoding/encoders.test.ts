import { encodeAlphaNumeric, encodeNumeric } from './encoders';

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
    expect(encodeNumeric(input)).toEqual(output);
  });

  it.each([
    {
      input: 'A1',
      output: [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1],
    },
    {
      input: 'A1B2',
      output: [
        0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1,
      ],
    },
    {
      input: 'A1B2C',
      output: [
        // A1
        0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1,
        // B2
        0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1,
        // C
        0, 0, 1, 1, 0, 0,
      ],
    },
  ])('alpha-numeric', ({ input, output }) => {
    expect(encodeAlphaNumeric(input)).toEqual(output);
  });
});
