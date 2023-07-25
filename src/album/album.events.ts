import { IEvent } from '../event';
import { AlbumType } from './album.type';

export interface AlbumCreated extends IEvent {
  readonly albumId: string;
  readonly type: AlbumType;
  readonly name: string;
  readonly date: number;
}

export interface AlbumChapterCreated extends IEvent {
  readonly albumId: string;
  readonly chapterId: string;
  readonly name: string;
  readonly isPublic: boolean;
}

export interface AlbumRemoved extends IEvent {
  readonly albumId: string;
}

export interface AlbumUpdated extends IEvent {
  readonly albumId: string;
  readonly type: AlbumType;
  readonly name: string;
  readonly date: number;
}

export interface AlbumDownLinkCreated extends IEvent {
  readonly albumId: string;
  readonly link: string;
  readonly endDate: number;
}

export class AlbumDownLinkCreatedEvent implements AlbumDownLinkCreated {
  readonly albumId: string;
  readonly authorId: string;
  readonly endDate: number;
  readonly eventName: string;
  readonly link: string;

  constructor(id: string, authorId: string, link: string, endDate: number) {
    this.albumId = id;
    this.authorId = authorId;
    this.link = link;
    this.endDate = endDate;
    this.eventName = AlbumDownLinkCreatedEvent.name;
  }
}

export class AlbumCreatedEvent implements AlbumCreated {
  readonly albumId: string;
  readonly authorId: string;
  readonly date: number;
  readonly eventName: string;
  readonly name: string;
  readonly type: AlbumType;

  constructor(
    id: string,
    authorId: string,
    name: string,
    type: AlbumType,
    date: number,
  ) {
    this.eventName = AlbumCreatedEvent.name;
    this.albumId = id;
    this.authorId = authorId;
    this.name = name;
    this.type = type;
    this.date = date;
  }
}

export class AlbumChapterCreatedEvent implements AlbumChapterCreated {
  readonly albumId: string;
  readonly chapterId: string;
  readonly authorId: string;
  readonly eventName: string;
  readonly isPublic: boolean;
  readonly name: string;

  constructor(
    id: string,
    authorId: string,
    name: string,
    albumId: string,
    isPublic: boolean,
  ) {
    this.eventName = AlbumChapterCreatedEvent.name;
    this.authorId = authorId;
    this.chapterId = id;
    this.name = name;
    this.albumId = albumId;
    this.isPublic = isPublic;
  }
}

export class AlbumRemovedEvent implements AlbumRemoved {
  readonly albumId: string;
  readonly authorId: string;
  readonly eventName: string;

  constructor(id: string, authorId: string) {
    this.eventName = AlbumRemovedEvent.name;
    this.authorId = authorId;
    this.albumId = id;
  }
}

export class AlbumUpdatedEvent implements AlbumUpdated {
  readonly albumId: string;
  readonly authorId: string;
  readonly date: number;
  readonly eventName: string;
  readonly name: string;
  readonly type: AlbumType;

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    name: string,
    type: AlbumType,
    date: number,
  ) {
    this.eventName = AlbumUpdatedEvent.name;
    this.authorId = authorId;
    this.albumId = id;
    this.albumId = albumId;
    this.name = name;
    this.type = type;
    this.date = date;
  }
}
