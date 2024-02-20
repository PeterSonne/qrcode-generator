import { findAlignmentPatternRank } from './alignment';

const alignmentPatterRanks = [
  0, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5,
  5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7,
].map((rank, idx) => ({ rank, version: idx + 1 }));

describe('findAlignmentPatternRank()', () => {
  it.each(alignmentPatterRanks)(
    'return rank $rank for version $version',
    ({ rank, version }) => {
      expect(version).toBeGreaterThan(0);
      expect(version).toBeLessThanOrEqual(40);
      expect(findAlignmentPatternRank(version)).toBe(rank);
    },
  );
});
