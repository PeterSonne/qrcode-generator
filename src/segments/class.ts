import { MODE_PROPERTIES } from '../constants';
import { MODE } from '../types';
import { encodeToBits, encoders } from '../utils/encoding/encoders';
import { bitLengthCharactorCountIndicator } from './indicators';

export class Segment {
  private rawData;
  private mode;

  constructor(data: string, mode: MODE) {
    if (!data || !mode) {
      throw Error('Segment creation failed: Invalid input parameters');
    }

    this.rawData = data;
    this.mode = mode;
  }

  getBitsRepresentation(version: number) {
    if (!version) {
      throw Error(
        'Failed to create segment bits representation: Invalid version provided',
      );
    }

    return [
      encodeToBits(MODE_PROPERTIES[this.mode].code, 4),
      encodeToBits(
        this.rawData.length,
        bitLengthCharactorCountIndicator[this.mode](version),
      ),
      encoders[this.mode](this.rawData),
    ];
  }
}
