/**
 * Core method to convert given value to bits array
 */
const encodeToBits = (value: number, bitLength: number) => {
  // TODO: check if input params valid
  return [...new Array(bitLength)].map(
    (_, idx) => (value >>> (bitLength - idx - 1)) & 1,
  );
};

const encodeNumeric = (value: string) => {
  // split string into chunks of size 3
  // as max. bits for numeric is 10 and each
  // digit need 3 1/3 bits
  return value
    .match(/\d{1,3}/g)
    ?.map((chunk) =>
      encodeToBits(parseInt(chunk, 10), Math.ceil(chunk.length * 3.33)),
    )
    .flat();
};

export default {
  numeric: encodeNumeric,
};
