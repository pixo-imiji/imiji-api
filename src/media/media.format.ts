import { MediaResizeType } from './media.resize.type';
import { MediaStorage } from './media.storage';
import { MediaResolution } from './media.resolution';

export interface MediaFormat {
  s3Id: string;
  sizeType: MediaResizeType;
  storage: MediaStorage;
  resolution: MediaResolution;
}
