import { MediaResizeType } from './media.resize.type';
import { MediaType } from './media.type';
export interface UploadAlbumMedia {
    file: File;
    type: MediaType;
    albumId: string;
    chapterId: string;
}
export interface UploadAvatarMedia {
    id: string;
    file: File;
    type: MediaType;
}
export interface RemoveMedia {
    mediaId: string;
}
export interface ResizeMedia {
    mediaId: string;
    type: MediaResizeType;
}
