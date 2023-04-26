import { IEvent } from '../event';
import { MediaType } from './media.type';
import { MediaResizeType } from './media.resize.type';

export interface MediaUploaded extends IEvent {
  mediaId: string;
  type: MediaType;
  albumId: string;
  chapterId: string;
  s3Id: string;
}

export interface MediaRemoved extends IEvent {
  mediaId: string;
  albumId: string;
}

export interface MediaResized extends IEvent {
  mediaId: string;
  albumId: string;
  s3Id: string;
  type: MediaResizeType;
}

export class MediaUploadedEvent implements MediaUploaded {
  albumId: string;
  chapterId: string;
  mediaId: string;
  type: MediaType;
  s3Id: string;
  authorId: string;
  eventName: string;

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    chapterId: string,
    type: MediaType,
    s3Id: string,
  ) {
    this.eventName = MediaUploadedEvent.name;
    this.authorId = authorId;
    this.mediaId = id;
    this.albumId = albumId;
    this.chapterId = chapterId;
    this.type = type;
    this.s3Id = s3Id;
  }
}

export class MediaRemovedEvent implements MediaRemoved {
  authorId: string;
  eventName: string;
  mediaId: string;
  albumId: string;

  constructor(id: string, authorId: string, albumId: string) {
    this.eventName = MediaRemovedEvent.name;
    this.authorId = authorId;
    this.mediaId = id;
    this.albumId = albumId;
  }
}

export class MediaResizedEvent implements MediaResized {
  albumId: string;
  authorId: string;
  eventName: string;
  mediaId: string;
  s3Id: string;
  type: MediaResizeType;

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    s3Id: string,
    type: MediaResizeType,
  ) {
    this.mediaId = id;
    this.authorId = authorId;
    this.eventName = MediaResizedEvent.name;
    this.albumId = albumId;
    this.s3Id = s3Id;
    this.type = type;
  }
}
