import { IEvent } from '../event';
export interface ChapterCreated extends IEvent {
    chapterId: string;
    albumId: string;
    name: string;
    isPrivate: boolean;
}
export interface ChapterUpdated extends ChapterCreated {
}
export interface ChapterRemoved extends IEvent {
    chapterId: string;
}
export declare class ChapterCreatedEvent implements ChapterCreated, IEvent {
    albumId: string;
    authorId: string;
    chapterId: string;
    eventName: string;
    isPrivate: boolean;
    name: string;
    constructor(id: string, authorId: string, albumId: string, name: string, isPrivate: boolean);
}
export declare class ChapterUpdatedEvent extends ChapterCreatedEvent {
}
export declare class ChapterRemovedEvent implements ChapterRemoved, IEvent {
    authorId: string;
    chapterId: string;
    eventName: string;
    constructor(id: string, authorId: string);
}
