import { getBitsCapacityByVersion, getCodewordsByVersion } from './data';

const capacityTable = [
  {
    // version 1
    bits: 208,
    codewords: 26,
  },
  {
    // version 2
    bits: 359,
    codewords: 44,
  },
  {
    // version 3
    bits: 567,
    codewords: 70,
  },
  {
    // version 4
    bits: 807,
    codewords: 100,
  },
  {
    // version 5
    bits: 1079,
    codewords: 134,
  },
  {
    // version 6
    bits: 1383,
    codewords: 172,
  },
  {
    // version 7
    bits: 1568,
    codewords: 196,
  },
  {
    // version 8
    bits: 1936,
    codewords: 242,
  },
  {
    // version 9
    bits: 2336,
    codewords: 292,
  },
  {
    // version 10
    bits: 2768,
    codewords: 346,
  },
  {
    // version 11
    bits: 3232,
    codewords: 404,
  },
  {
    // version 12
    bits: 3728,
    codewords: 466,
  },
  {
    // version 13
    bits: 4256,
    codewords: 532,
  },
  {
    // version 14
    bits: 4651,
    codewords: 581,
  },
  {
    // version 15
    bits: 5243,
    codewords: 655,
  },
  {
    // version 16
    bits: 5867,
    codewords: 733,
  },
  {
    // version 17
    bits: 6523,
    codewords: 815,
  },
  {
    // version 18
    bits: 7211,
    codewords: 901,
  },
  {
    // version 19
    bits: 7931,
    codewords: 991,
  },
  {
    // version 20
    bits: 8683,
    codewords: 1085,
  },
  {
    // version 21
    bits: 9252,
    codewords: 1156,
  },
  {
    // version 22
    bits: 10068,
    codewords: 1258,
  },
  {
    // version 23
    bits: 10916,
    codewords: 1364,
  },
  {
    // version 24
    bits: 11796,
    codewords: 1474,
  },
  {
    // version 25
    bits: 12708,
    codewords: 1588,
  },
  {
    // version 26
    bits: 13652,
    codewords: 1706,
  },
  {
    // version 27
    bits: 14628,
    codewords: 1828,
  },
  {
    // version 28
    bits: 15371,
    codewords: 1921,
  },
  {
    // version 29
    bits: 16411,
    codewords: 2051,
  },
  {
    // version 30
    bits: 17483,
    codewords: 2185,
  },
  {
    // version 31
    bits: 18587,
    codewords: 2323,
  },
  {
    // version 32
    bits: 19723,
    codewords: 2465,
  },
  {
    // version 33
    bits: 20891,
    codewords: 2611,
  },
  {
    // version 34
    bits: 22091,
    codewords: 2761,
  },
  {
    // version 35
    bits: 23008,
    codewords: 2876,
  },
  {
    // version 36
    bits: 24272,
    codewords: 3034,
  },
  {
    // version 37
    bits: 25568,
    codewords: 3196,
  },
  {
    // version 38
    bits: 26896,
    codewords: 3362,
  },
  {
    // version 39
    bits: 28256,
    codewords: 3532,
  },
  {
    // version 40
    bits: 29648,
    codewords: 3706,
  },
].map((entry, idx) => ({ ...entry, version: idx + 1 }));

describe('getBitsCapacityByVersion()', () => {
  it.each(capacityTable)(
    'returns $bits available bits for version $version',
    ({ version, bits }) => {
      expect(getBitsCapacityByVersion(version)).toBe(bits);
    },
  );
});

describe('getCodewordsByVersion()', () => {
  it.each(capacityTable)(
    'returns $codewords codewords for version $version',
    ({ version, codewords }) => {
      expect(getCodewordsByVersion(version)).toBe(codewords);
    },
  );
});
