import { ERROR_CORRECTION_LEVEL } from '../../types';
import { getCodewordsByVersion } from '../capacity/data';

/**
 * Returns number of codewords for misdecode protection
 */
export const getMisdecodeProtectionCodewords = (
  version: number,
  level: ERROR_CORRECTION_LEVEL,
) => {
  // following config in taken from ISO 18004 doc 8.5.1
  const misdecodeProtectionCodewords = [
    {
      [ERROR_CORRECTION_LEVEL.LOW]: 3,
      [ERROR_CORRECTION_LEVEL.MEDIUM]: 2,
      [ERROR_CORRECTION_LEVEL.QUALITY]: 1,
      [ERROR_CORRECTION_LEVEL.HIGH]: 1,
    },
    {
      [ERROR_CORRECTION_LEVEL.LOW]: 2,
    },
    {
      [ERROR_CORRECTION_LEVEL.LOW]: 1,
    },
  ];

  return misdecodeProtectionCodewords[version - 1]?.[level] || 0;
};

/**
 * Returns number of codewords required per QR Code Version
 * and Error Correction Level
 */
export const getErrorCorrectionCodewordsCount = (
  version: number,
  level: ERROR_CORRECTION_LEVEL,
) => {
  // as defined in ISO 18004 8.5.1
  const recoveryCapacity = {
    [ERROR_CORRECTION_LEVEL.LOW]: 0.07,
    [ERROR_CORRECTION_LEVEL.MEDIUM]: 0.15,
    [ERROR_CORRECTION_LEVEL.QUALITY]: 0.25,
    [ERROR_CORRECTION_LEVEL.HIGH]: 0.3,
  };

  return (
    Math.ceil(2 * recoveryCapacity[level] * getCodewordsByVersion(version)) +
    getMisdecodeProtectionCodewords(version, level)
  );
};
