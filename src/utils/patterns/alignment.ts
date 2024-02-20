/**
 * Find number of Alignment Patterns cols/rows by given qr code version.
 */
export const findAlignmentPatternRank = (version: number) => {
  if (version === 1) {
    return 0;
  }
  // instead of hardcoding the alignment pattern table from Appendix E
  // this is a more analytical approach assuming the maximum gap between two
  // patterns is max. 24 pixel
  return (
    [2, 3, 4, 5, 6, 7].find(
      (rank) => (17 + version * 4 - 6 - 7) / (rank - 1) - 4 <= 24,
    ) || 0
  );
};
