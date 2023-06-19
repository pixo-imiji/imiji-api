import { IEvent } from '../event';

export interface ChapterCreated extends IEvent {
  chapterId: string;
  albumId: string;
  name: string;
  isPrivate: boolean;
}

export interface ChapterUpdated extends ChapterCreated {}

export interface ChapterRemoved extends IEvent {
  chapterId: string;
  albumId: string;
}

export class ChapterCreatedEvent implements ChapterCreated, IEvent {
  albumId: string;
  authorId: string;
  chapterId: string;
  eventName: string;
  isPrivate: boolean;
  name: string;

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    name: string,
    isPrivate: boolean,
  ) {
    this.authorId = authorId;
    this.eventName = ChapterCreatedEvent.name;
    this.chapterId = id;
    this.albumId = albumId;
    this.name = name;
    this.isPrivate = isPrivate;
  }
}

export class ChapterUpdatedEvent extends ChapterCreatedEvent {}

export class ChapterRemovedEvent implements ChapterRemoved, IEvent {
  authorId: string;
  albumId: string;
  chapterId: string;
  eventName: string;

  constructor(id: string, authorId: string, albumId: string) {
    this.authorId = authorId;
    this.eventName = ChapterRemovedEvent.name;
    this.chapterId = id;
    this.albumId = albumId;
  }
}
