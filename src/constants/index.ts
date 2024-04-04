import { ERROR_CORRECTION_LEVEL, MODE } from '../types';

export const CHARACTER_INDICATORS_COUNT_NUMBERIC = [10, 12, 14];
export const CHARACTER_INDICATORS_COUNT_ALPHA_NUMBERIC = [9, 11, 13];
export const CHARACTER_INDICATORS_COUNT_BYTE = [8, 16, 16];

export const MODE_PROPERTIES = {
  [MODE.NUMERIC]: {
    code: 1,
    lengthCharacterIndicator: CHARACTER_INDICATORS_COUNT_NUMBERIC,
  },
  [MODE.ALPHA_NUMERIC]: {
    code: 2,
    lengthCharacterIndicator: CHARACTER_INDICATORS_COUNT_NUMBERIC,
  },
  [MODE.BYTE]: {
    code: 4,
    lengthCharacterIndicator: CHARACTER_INDICATORS_COUNT_NUMBERIC,
  },
};

export const ERROR_CORRECTION_CHARACTERISTICS = [
  { [ERROR_CORRECTION_LEVEL.LOW]: 7 },
];
