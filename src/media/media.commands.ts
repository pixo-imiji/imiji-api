import { MediaResizeType } from './media.resize.type';

export interface UploadMedia {
  file: File;
  type: string;
  albumId: string;
  chapterId: string;
}

export interface RemoveMedia {
  mediaId: string;
}

export interface ResizeMedia {
  mediaId: string;
  type: MediaResizeType;
}
