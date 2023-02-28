export interface UploadMedia {
  file: File;
  type: string;
  albumId: string;
  chapterId: string;
}

export interface RemoveMedia {
  mediaId: string;
}
