import { CHARSET } from './constants';

/**
 * Core method to convert given value to bits array
 */
export const encodeToBits = (value: number, bitLength: number) => {
  // TODO: check if input params valid
  return [...new Array(bitLength)].map(
    (_, idx) => (value >>> (bitLength - idx - 1)) & 1,
  );
};

/**
 * Encodes numeric values into bits
 */
export const encodeNumeric = (value: string) => {
  // split string into chunks of size 3
  // as bits for numeric is 10 and each
  // digit need 3 1/3 bits
  return value
    .match(/\d{1,3}/g)
    ?.map((chunk) =>
      encodeToBits(parseInt(chunk, 10), Math.ceil(chunk.length * 3.33)),
    )
    .flat();
};

/**
 * Encodes alpha-numeric values into bits
 */
export const encodeAlphaNumeric = (value: string) => {
  // split string into chunks of size 2
  // as bits for alpha-numeric is 11 and
  // each char needs 5 1/2 bits
  return value
    .match(/.{1,2}/g)
    ?.map((chunk) =>
      encodeToBits(
        chunk
          .split('')
          .reduce(
            (acc, curr, idx) =>
              CHARSET.ALPHA_NUMERIC.indexOf(curr) *
                (chunk.length > 1 && !idx ? CHARSET.ALPHA_NUMERIC.length : 1) +
              acc,
            0,
          ),
        Math.ceil(chunk.length * 5.5),
      ),
    )
    .flat();
};
