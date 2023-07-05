import { IEvent } from '../event';
import { MediaType } from './media.type';
import { MediaFormat } from './media.format';
import { MediaDoAction } from './media.action';

export interface MediaUploaded extends IEvent {
  mediaId: string;
  type: MediaType;
  albumId: string;
  chapterId: string;
  fileName: string;
  size: number;
  format: MediaFormat;
}

export interface MediaRemoved extends IEvent {
  mediaId: string;
  type: MediaType;
  albumId: string;
  chapterId: string;
  fileName: string;
  size: number;
  formats: MediaFormat[];
}

export interface MediaAlbumResized extends IEvent {
  mediaId: string;
  albumId: string;
  fileName: string;
  format: MediaFormat;
  size: number;
}

export interface MediaDidAction extends IEvent {
  albumId: string;
  mediaId: string;
  action: MediaDoAction;
}

export interface MediaAvatarResized extends IEvent {
  id: string;
  format: MediaFormat;
}

export class MediaUploadedEvent implements MediaUploaded {
  albumId: string;
  chapterId: string;
  mediaId: string;
  type: MediaType;
  fileName: string;
  format: MediaFormat;
  authorId: string;
  eventName: string;
  size: number;

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    chapterId: string,
    fileName: string,
    type: MediaType,
    format: MediaFormat,
    size: number,
  ) {
    this.eventName = MediaUploadedEvent.name;
    this.authorId = authorId;
    this.mediaId = id;
    this.albumId = albumId;
    this.chapterId = chapterId;
    this.fileName = fileName;
    this.type = type;
    this.format = new MediaFormat(
      format.s3Id,
      format.sizeType,
      format.storage,
      format.resolution,
    );
    this.size = size;
  }
}

export class MediaRemovedEvent implements MediaRemoved {
  authorId: string;
  eventName: string;
  mediaId: string;
  albumId: string;
  chapterId: string;
  fileName: string;
  type: MediaType;
  formats: MediaFormat[];
  size: number;

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    chapterId: string,
    fileName: string,
    type: MediaType,
    formats: MediaFormat[],
    size: number,
  ) {
    this.eventName = MediaRemovedEvent.name;
    this.authorId = authorId;
    this.mediaId = id;
    this.albumId = albumId;
    this.chapterId = chapterId;
    this.fileName = fileName;
    this.type = type;
    this.formats = formats;
    this.size = size;
  }
}

export class MediaAlbumResizedEvent implements MediaAlbumResized {
  albumId: string;
  authorId: string;
  eventName: string;
  mediaId: string;
  fileName: string;
  format: MediaFormat;
  size: number;

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    fileName: string,
    format: MediaFormat,
    size: number,
  ) {
    this.mediaId = id;
    this.authorId = authorId;
    this.eventName = MediaAlbumResizedEvent.name;
    this.albumId = albumId;
    this.fileName = fileName;
    this.format = new MediaFormat(
      format.s3Id,
      format.sizeType,
      format.storage,
      format.resolution,
    );
    this.size = size;
  }
}

export class MediaAvatarResizedEvent implements MediaAvatarResized {
  authorId: string;
  eventName: string;
  format: MediaFormat;
  id: string;

  constructor(id: string, authorId: string, format: MediaFormat) {
    this.id = id;
    this.authorId = authorId;
    this.format = new MediaFormat(
      format.s3Id,
      format.sizeType,
      format.storage,
      format.resolution,
    );
    this.eventName = MediaAvatarResizedEvent.name;
  }
}

export class MediaDidActionEvent implements MediaDidAction {
  action: MediaDoAction;
  authorId: string;
  eventName: string;
  albumId: string;
  mediaId: string;

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    action: MediaDoAction,
  ) {
    this.mediaId = id;
    this.authorId = authorId;
    this.albumId = albumId;
    this.eventName = MediaDidActionEvent.name;
    this.action = action;
  }
}
