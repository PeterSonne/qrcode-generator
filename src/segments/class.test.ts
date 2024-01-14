import { MODE } from '../types';
import { Segment } from './class';

describe('Class Segment', () => {
  describe('method "getBitsRepresentation"', () => {
    it('returns correct code for numeric', () => {
      const segment = new Segment('123', MODE.NUMERIC);

      expect(segment.getBitsRepresentation(1)).toEqual([
        [0, 0, 0, 1], // mode code = 1
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1], // character count indicator for version 1 should be 10 bits in numeric mode
        [0, 0, 0, 1, 1, 1, 1, 0, 1, 1], // 3 1/3 bits per character => 10 bits encoded data
      ]);
    });

    it('returns correct code for alpha-numeric', () => {
      const segment = new Segment('ABC', MODE.ALPHA_NUMERIC);

      expect(segment.getBitsRepresentation(1)).toEqual([
        [0, 0, 1, 0], // mode code = 1
        [0, 0, 0, 0, 0, 0, 0, 1, 1], // character count indicator for version 1 should be 10 bits in numeric mode
        [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0], // 3 1/3 bits per character => 10 bits encoded data
      ]);
    });
  });
});
