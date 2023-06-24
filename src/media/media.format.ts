import { MediaResizeType } from './media.resize.type';
import { MediaStorage } from './media.storage';
import { MediaResolution } from './media.resolution';

export class MediaFormat {
  s3Id: string;
  sizeType: MediaResizeType;
  storage: MediaStorage;
  resolution: MediaResolution;

  constructor(
    s3Id: string,
    sizeType: MediaResizeType,
    storage: MediaStorage,
    resolution: MediaResolution,
  ) {
    this.s3Id = s3Id;
    this.sizeType = sizeType;
    this.storage = storage;
    this.resolution = resolution;
  }
}
