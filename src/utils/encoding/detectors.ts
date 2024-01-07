import { REGEX_TESTS } from './constants';

const isNumeric = (value: string) => {
  return value && REGEX_TESTS.NUMERIC.test(value);
};

const isAlphaNumeric = (value: string) => {
  return value && REGEX_TESTS.ALPHA_NUMERIC.test(value);
};

export default { isNumeric, isAlphaNumeric };
