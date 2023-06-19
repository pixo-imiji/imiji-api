import { MediaResizeType } from './media.resize.type';
import { MediaStorage } from './media.storage';

export interface MediaFormat {
  s3Id: string;
  sizeType: MediaResizeType;
  storage: MediaStorage;
}
