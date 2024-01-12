import {
  CHARACTER_INDICATORS_COUNT_ALPHA_NUMBERIC,
  CHARACTER_INDICATORS_COUNT_BYTE,
  CHARACTER_INDICATORS_COUNT_NUMBERIC,
} from '../constants';

/**
 * Tiny helper to determine based on version which of
 * the three size groups the character count indicator
 * will belong to
 */
export const getVersionGroupIndex = (version: number) => {
  return (
    [
      { condition: version >= 1 && version <= 9, value: 0 },
      { condition: version >= 10 && version <= 26, value: 1 },
      { condition: version >= 27 && version <= 40, value: 2 },
    ].find((group) => group.condition)?.value ?? -1
  );
};

/**
 * Based on version returns charactor count indicator length
 * per mode
 */
export const bitLengthCharactorCountIndicator: Record<
  string,
  (version: number) => number
> = {
  numeric: (version) =>
    CHARACTER_INDICATORS_COUNT_NUMBERIC[getVersionGroupIndex(version)],
  alpha_numeric: (version) =>
    CHARACTER_INDICATORS_COUNT_ALPHA_NUMBERIC[getVersionGroupIndex(version)],
  byte: (version) =>
    CHARACTER_INDICATORS_COUNT_BYTE[getVersionGroupIndex(version)],
};
