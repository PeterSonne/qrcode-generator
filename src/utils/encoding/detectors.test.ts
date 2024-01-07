import { CHARSET } from './constants';
import detectors from './detectors';

describe('Encoding detectors', () => {
  const numericTestValues = [
    '1',
    '23',
    '123456789',
    '345345',
    '253453535',
    ...[new Array(10)].map(() => Math.round(Math.random() * 10).toString()),
  ];

  const alphaNumericTestValues = [
    'A1',
    'ABC123',
    'A1B2C3.',
    '%$',
    '$%*+-./:',
    CHARSET.ALPHA_NUMERIC,
  ];

  const byteTestValues = ['abc123ABC', 'ABC_123', '123;ABC'];

  describe('NUMERICS detector', () => {
    it.each(numericTestValues)('accepts NUMERIC input', (testString) => {
      expect(detectors.isNumeric(testString)).toBeTruthy();
    });

    it.each(alphaNumericTestValues)(
      'rejects ALPHA_NUMERIC input',
      (testString) => {
        expect(detectors.isNumeric(testString)).toBeFalsy();
      },
    );

    it.each(byteTestValues)('rejects BYTE input', (testString) => {
      expect(detectors.isNumeric(testString)).toBeFalsy();
    });
  });

  describe('ALPHA_NUMERICS detector', () => {
    it.each(numericTestValues)('accepts NUMERIC input', (testString) => {
      expect(detectors.isAlphaNumeric(testString)).toBeTruthy();
    });

    it.each(alphaNumericTestValues)(
      'accepts ALPHA_NUMERIC input',
      (testString) => {
        expect(detectors.isAlphaNumeric(testString)).toBeTruthy();
      },
    );

    it.each(byteTestValues)('rejects BYTE input', (testString) => {
      expect(detectors.isAlphaNumeric(testString)).toBeFalsy();
    });
  });
});
