import { MediaResizeType } from './media.resize.type';
import { MediaType } from './media.type';
import { MediaDoAction } from './media.action';

export interface UploadAlbumMedia {
  filePath: string;
  type: MediaType;
  albumId: string;
  chapterId: string;
}

export interface UploadAvatarMedia {
  id: string;
  filePath: string;
  type: MediaType;
}

export interface RemoveMedia {
  mediaId: string;
}

export interface ResizeMedia {
  mediaId: string;
  type: MediaResizeType;
}

export interface MediaAction {
  mediaId: string;
  metadata: string;
  action: MediaDoAction;
}
