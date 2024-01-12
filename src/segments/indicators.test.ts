import {
  getVersionGroupIndex,
  bitLengthCharactorCountIndicator,
} from './indicators';

describe('getVersionGroupIndex util', () => {
  it.each([...new Array(40)].map((_, idx) => ({ version: idx + 1 })))(
    'return correct group index for version $version to be $index',
    ({ version }) => {
      if (version >= 1 && version <= 9) {
        expect(getVersionGroupIndex(version)).toBe(0);
      } else if (version >= 10 && version <= 26) {
        expect(getVersionGroupIndex(version)).toBe(1);
      } else if (version >= 27 && version <= 40) {
        expect(getVersionGroupIndex(version)).toBe(2);
      } else {
        expect(true).toBeFalsy();
      }
    },
  );
});

describe('bitLengthCharactorCountIndicator util', () => {
  it.each([...new Array(40)].map((_, idx) => ({ version: idx + 1 })))(
    'return correct numberic character count for version $version',
    ({ version }) => {
      if (version >= 1 && version <= 9) {
        expect(bitLengthCharactorCountIndicator.numeric(version)).toBe(10);
      } else if (version >= 10 && version <= 26) {
        expect(bitLengthCharactorCountIndicator.numeric(version)).toBe(12);
      } else if (version >= 27 && version <= 40) {
        expect(bitLengthCharactorCountIndicator.numeric(version)).toBe(14);
      } else {
        expect(true).toBeFalsy();
      }
    },
  );

  it.each([...new Array(40)].map((_, idx) => ({ version: idx + 1 })))(
    'return correct alpha-numberic character count for version $version',
    ({ version }) => {
      if (version >= 1 && version <= 9) {
        expect(bitLengthCharactorCountIndicator.alpha_numeric(version)).toBe(9);
      } else if (version >= 10 && version <= 26) {
        expect(bitLengthCharactorCountIndicator.alpha_numeric(version)).toBe(
          11,
        );
      } else if (version >= 27 && version <= 40) {
        expect(bitLengthCharactorCountIndicator.alpha_numeric(version)).toBe(
          13,
        );
      } else {
        expect(true).toBeFalsy();
      }
    },
  );

  it.each([...new Array(40)].map((_, idx) => ({ version: idx + 1 })))(
    'return correct byte character count for version $version',
    ({ version }) => {
      if (version >= 1 && version <= 9) {
        expect(bitLengthCharactorCountIndicator.byte(version)).toBe(8);
      } else if (version >= 10 && version <= 26) {
        expect(bitLengthCharactorCountIndicator.byte(version)).toBe(16);
      } else if (version >= 27 && version <= 40) {
        expect(bitLengthCharactorCountIndicator.byte(version)).toBe(16);
      } else {
        expect(true).toBeFalsy();
      }
    },
  );
});
