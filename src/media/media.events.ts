import { IEvent } from '../event';
import { MediaType } from './media.type';
import { MediaFormat } from './media.format';
import { MediaAction } from './media.action';

export interface MediaUploaded extends IEvent {
  mediaId: string;
  type: MediaType;
  albumId: string;
  chapterId: string;
  format: MediaFormat;
}

export interface MediaRemoved extends IEvent {
  mediaId: string;
  type: MediaType;
  albumId: string;
  chapterId: string;
  formats: MediaFormat[];
}

export interface MediaAlbumResized extends IEvent {
  mediaId: string;
  albumId: string;
  format: MediaFormat;
}

export interface MediaDidAction extends IEvent {
  mediaId: string;
  action: MediaAction;
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
  format: MediaFormat;
  authorId: string;
  eventName: string;

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    chapterId: string,
    type: MediaType,
    format: MediaFormat,
  ) {
    this.eventName = MediaUploadedEvent.name;
    this.authorId = authorId;
    this.mediaId = id;
    this.albumId = albumId;
    this.chapterId = chapterId;
    this.type = type;
    this.format = format;
  }
}

export class MediaRemovedEvent implements MediaRemoved {
  authorId: string;
  eventName: string;
  mediaId: string;
  albumId: string;
  chapterId: string;
  type: MediaType;
  formats: MediaFormat[];

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    chapterId: string,
    type: MediaType,
    formats: MediaFormat[],
  ) {
    this.eventName = MediaRemovedEvent.name;
    this.authorId = authorId;
    this.mediaId = id;
    this.albumId = albumId;
    this.chapterId = chapterId;
    this.type = type;
    this.formats = formats;
  }
}

export class MediaAlbumResizedEvent implements MediaAlbumResized {
  albumId: string;
  authorId: string;
  eventName: string;
  mediaId: string;
  format: MediaFormat;

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    format: MediaFormat,
  ) {
    this.mediaId = id;
    this.authorId = authorId;
    this.eventName = MediaAlbumResizedEvent.name;
    this.albumId = albumId;
    this.format = format;
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
    this.format = format;
    this.eventName = MediaAvatarResizedEvent.name;
  }
}

export class MediaDidActionEvent implements MediaDidAction {
  action: MediaAction;
  authorId: string;
  eventName: string;
  mediaId: string;

  constructor(id: string, authorId: string, action: MediaAction) {
    this.mediaId = id;
    this.authorId = authorId;
    this.eventName = MediaDidActionEvent.name;
    this.action = action;
  }
}
