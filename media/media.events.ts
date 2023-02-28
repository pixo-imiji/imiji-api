import { IEvent } from "../event/IEvent";
import { MediaType } from "./media.type";

export interface MediaUploaded extends IEvent {
  mediaId: string;
  type: MediaType;
  albumId: string;
  chapterId: string;
  s3Id: string;
}

export interface MediaRemoved extends IEvent {
  mediaId: string;
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
    s3Id: string
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

  constructor(id: string, authorId: string) {
    this.eventName = MediaRemovedEvent.name;
    this.authorId = authorId;
    this.mediaId = id;
  }
}
