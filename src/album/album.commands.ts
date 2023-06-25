import { AlbumType } from './album.type';

export interface CreateAlbum {
  name: string;
  type: AlbumType;
  date: number;
}

export interface RemoveAlbum {
  albumId: string;
}

export interface UpdateAlbum {
  albumId: string;
  name: string;
  type: AlbumType;
  date: number;
}
