import { bitLengthCharactorCountIndicator } from '../../segments/indicators';

const getBitStreamLength = {
  forNumeric: (value: string, version: number) =>
    4 +
    bitLengthCharactorCountIndicator.numeric(version) +
    10 * Math.floor(value.length / 3) +
    Math.ceil((value.length % 3) * 3.3),
};

export default getBitStreamLength;
