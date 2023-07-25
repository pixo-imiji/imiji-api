import { IEvent } from '../event';
import { MediaType } from './media.type';
import { MediaFormat } from './media.format';
import { MediaDoAction } from './media.action';

export interface MediaUploaded extends IEvent {
  readonly mediaId: string;
  readonly type: MediaType;
  readonly albumId: string;
  readonly chapterId: string;
  readonly fileName: string;
  readonly size: number;
  readonly format: MediaFormat;
}

export interface MediaRemoved extends IEvent {
  readonly mediaId: string;
  readonly type: MediaType;
  readonly albumId: string;
  readonly chapterId: string;
  readonly fileName: string;
  readonly size: number;
  readonly formats: MediaFormat[];
}

export interface MediaAlbumResized extends IEvent {
  readonly mediaId: string;
  readonly albumId: string;
  readonly fileName: string;
  readonly format: MediaFormat;
  readonly size: number;
}

export interface MediaDidAction extends IEvent {
  readonly albumId: string;
  readonly mediaId: string;
  readonly action: MediaDoAction;
}

export interface MediaAvatarResized extends IEvent {
  readonly id: string;
  readonly format: MediaFormat;
}

export interface MediaDownloadItemsSelected extends IEvent {
  readonly mediaIds: string[];
  readonly isAllMedia: boolean;
  readonly albumId: string;
}

export class MediaDownloadItemsSelectedEvent
  implements MediaDownloadItemsSelected
{
  readonly albumId: string;
  readonly authorId: string;
  readonly eventName: string;
  readonly isAllMedia: boolean;
  readonly mediaIds: string[];

  constructor(
    id: string,
    authorId: string,
    isAll: boolean,
    mediaIds: string[],
  ) {
    this.albumId = id;
    this.authorId = authorId;
    this.isAllMedia = isAll;
    this.mediaIds = mediaIds;
    this.eventName = MediaDownloadItemsSelectedEvent.name;
  }
}

export class MediaUploadedEvent implements MediaUploaded {
  readonly albumId: string;
  readonly chapterId: string;
  readonly mediaId: string;
  readonly type: MediaType;
  readonly fileName: string;
  readonly format: MediaFormat;
  readonly authorId: string;
  readonly eventName: string;
  readonly size: number;

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
  readonly authorId: string;
  readonly eventName: string;
  readonly mediaId: string;
  readonly albumId: string;
  readonly chapterId: string;
  readonly fileName: string;
  readonly type: MediaType;
  readonly formats: MediaFormat[];
  readonly size: number;

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
  readonly albumId: string;
  readonly authorId: string;
  readonly eventName: string;
  readonly mediaId: string;
  readonly fileName: string;
  readonly format: MediaFormat;
  readonly size: number;

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
  readonly authorId: string;
  readonly eventName: string;
  readonly format: MediaFormat;
  readonly id: string;

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
  readonly action: MediaDoAction;
  readonly authorId: string;
  readonly eventName: string;
  readonly albumId: string;
  readonly mediaId: string;

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
