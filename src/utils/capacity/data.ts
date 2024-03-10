import { findAlignmentPatternRank } from '../patterns/alignment';

/**
 * Returns number of non-data bits (e.g. finder pattern etc) per QR code version
 * */
const getNonDataBitsByVersion = (version: number) => {
  const alignmentPatternRank = findAlignmentPatternRank(version);

  return (
    // finder patterns
    3 * 64 +
    // alignment pattern
    Math.max(0, (Math.pow(alignmentPatternRank, 2) - 3) * 25) +
    // timing
    2 * (17 + version * 4 - 16) -
    Math.max(0, alignmentPatternRank - 2) * 10 +
    // dark module
    1 +
    // error lvl mask info
    2 * 15 +
    // version format info Lvl. 7+
    (version >= 7 ? 2 * 6 * 3 : 0)
  );
};

/**
 * Returns bit capacity of QR code by version
 * */
export const getBitsCapacityByVersion = (version: number) => {
  return Math.pow(17 + version * 4, 2) - getNonDataBitsByVersion(version);
};

/**
 * Returns total codewords (8 bits) per QR code version
 */
export const getCodewordsByVersion = (version: number) => {
  return Math.floor(getBitsCapacityByVersion(version) / 8);
};
