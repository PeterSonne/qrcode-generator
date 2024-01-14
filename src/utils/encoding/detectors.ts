import { REGEX_TESTS } from './constants';

export const isNumeric = (value: string) => {
  return value && REGEX_TESTS.NUMERIC.test(value);
};

export const isAlphaNumeric = (value: string) => {
  return value && REGEX_TESTS.ALPHA_NUMERIC.test(value);
};
