import { IEvent } from "../event/IEvent";
import { AlbumType } from "./album.type";

export interface AlbumCreated extends IEvent {
  albumId: string;
  type: AlbumType;
  name: string;
  date: number;
}

export interface AlbumChapterCreated extends IEvent {
  albumId: string;
  chapterId: string;
  name: string;
  isPublic: boolean;
}

export interface AlbumRemoved extends IEvent {
  albumId: string;
}

export interface AlbumUpdated extends IEvent {
  albumId: string;
  type: AlbumType;
  name: string;
  date: number;
}

export class AlbumCreatedEvent implements AlbumCreated {
  albumId: string;
  authorId: string;
  date: number;
  eventName: string;
  name: string;
  type: AlbumType;

  constructor(
    id: string,
    authorId: string,
    name: string,
    type: AlbumType,
    date: number
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
  albumId: string;
  chapterId: string;
  authorId: string;
  eventName: string;
  isPublic: boolean;
  name: string;

  constructor(
    id: string,
    authorId: string,
    name: string,
    albumId: string,
    isPublic: boolean
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
  albumId: string;
  authorId: string;
  eventName: string;

  constructor(id: string, authorId: string) {
    this.eventName = AlbumRemovedEvent.name;
    this.authorId = authorId;
    this.albumId = id;
  }
}

export class AlbumUpdatedEvent implements AlbumUpdated {
  albumId: string;
  authorId: string;
  date: number;
  eventName: string;
  name: string;
  type: AlbumType;

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    name: string,
    type: AlbumType,
    date: number
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
