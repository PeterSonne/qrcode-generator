import { ERROR_CORRECTION_LEVEL } from '../../types';
import {
  getMisdecodeProtectionCodewords,
  getErrorCorrectionCodewordsCount,
} from './capacity';

const inputs = [
  // defined cases
  {
    version: 1,
    level: ERROR_CORRECTION_LEVEL.LOW,
    misdecodeCodewordsCount: 3,
    errorCorrectionCodewordsCount: 7,
  },
  {
    version: 1,
    level: ERROR_CORRECTION_LEVEL.MEDIUM,
    misdecodeCodewordsCount: 2,
    errorCorrectionCodewordsCount: 10,
  },
  {
    version: 1,
    level: ERROR_CORRECTION_LEVEL.QUALITY,
    misdecodeCodewordsCount: 1,
    errorCorrectionCodewordsCount: 13,
  },
  {
    version: 1,
    level: ERROR_CORRECTION_LEVEL.HIGH,
    misdecodeCodewordsCount: 1,
    errorCorrectionCodewordsCount: 17,
  },
  {
    version: 2,
    level: ERROR_CORRECTION_LEVEL.LOW,
    misdecodeCodewordsCount: 2,
    errorCorrectionCodewordsCount: 10,
  },
  {
    version: 3,
    level: ERROR_CORRECTION_LEVEL.LOW,
    misdecodeCodewordsCount: 1,
    errorCorrectionCodewordsCount: 15,
  },
  // default fallback cases ( = 0 )
  //   {
  //     version: 2,
  //     level: ERROR_CORRECTION_LEVEL.MEDIUM,
  //     misdecodeCodewordsCount: 0,
  //     errorCorrectionCodewordsCount: 0,
  //   },
  //   {
  //     version: 3,
  //     level: ERROR_CORRECTION_LEVEL.HIGH,
  //     misdecodeCodewordsCount: 0,
  //     errorCorrectionCodewordsCount: 0,
  //   },
  //   {
  //     version: 17,
  //     level: ERROR_CORRECTION_LEVEL.LOW,
  //     misdecodeCodewordsCount: 0,
  //     errorCorrectionCodewordsCount: 0,
  //   },
  //   {
  //     version: 25,
  //     level: ERROR_CORRECTION_LEVEL.QUALITY,
  //     misdecodeCodewordsCount: 0,
  //     errorCorrectionCodewordsCount: 0,
  //   },
  //   {
  //     version: 38,
  //     level: ERROR_CORRECTION_LEVEL.MEDIUM,
  //     misdecodeCodewordsCount: 0,
  //     errorCorrectionCodewordsCount: 0,
  //   },
];

describe('getMisdecodeProtectionCodewords()', () => {
  it.each(inputs)(
    'returns p = $misdecodeCodewordsCount for QR Code Version $version and ECL $level',
    ({ version, level, misdecodeCodewordsCount }) => {
      expect(getMisdecodeProtectionCodewords(version, level)).toBe(
        misdecodeCodewordsCount,
      );
    },
  );
});

describe('getErrorCorrectionCodewordsCount()', () => {
  it.each(inputs)(
    'returns $errorCorrectionCodewordsCount ECCs for QR Code Version $version and ECL $level',
    ({ version, level, errorCorrectionCodewordsCount }) => {
      expect(getErrorCorrectionCodewordsCount(version, level)).toBe(
        errorCorrectionCodewordsCount,
      );
    },
  );
});
