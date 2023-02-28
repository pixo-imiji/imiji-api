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
export declare class AlbumCreatedEvent implements AlbumCreated {
    albumId: string;
    authorId: string;
    date: number;
    eventName: string;
    name: string;
    type: AlbumType;
    constructor(id: string, authorId: string, name: string, type: AlbumType, date: number);
}
export declare class AlbumChapterCreatedEvent implements AlbumChapterCreated {
    albumId: string;
    chapterId: string;
    authorId: string;
    eventName: string;
    isPublic: boolean;
    name: string;
    constructor(id: string, authorId: string, name: string, albumId: string, isPublic: boolean);
}
export declare class AlbumRemovedEvent implements AlbumRemoved {
    albumId: string;
    authorId: string;
    eventName: string;
    constructor(id: string, authorId: string);
}
export declare class AlbumUpdatedEvent implements AlbumUpdated {
    albumId: string;
    authorId: string;
    date: number;
    eventName: string;
    name: string;
    type: AlbumType;
    constructor(id: string, authorId: string, albumId: string, name: string, type: AlbumType, date: number);
}
