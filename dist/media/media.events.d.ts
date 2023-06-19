import { IEvent } from '../event';
import { MediaType } from './media.type';
import { MediaFormat } from './media.format';
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
export interface MediaAvatarResized extends IEvent {
    id: string;
    format: MediaFormat;
}
export declare class MediaUploadedEvent implements MediaUploaded {
    albumId: string;
    chapterId: string;
    mediaId: string;
    type: MediaType;
    format: MediaFormat;
    authorId: string;
    eventName: string;
    constructor(id: string, authorId: string, albumId: string, chapterId: string, type: MediaType, format: MediaFormat);
}
export declare class MediaRemovedEvent implements MediaRemoved {
    authorId: string;
    eventName: string;
    mediaId: string;
    albumId: string;
    chapterId: string;
    type: MediaType;
    formats: MediaFormat[];
    constructor(id: string, authorId: string, albumId: string, chapterId: string, type: MediaType, formats: MediaFormat[]);
}
export declare class MediaAlbumResizedEvent implements MediaAlbumResized {
    albumId: string;
    authorId: string;
    eventName: string;
    mediaId: string;
    format: MediaFormat;
    constructor(id: string, authorId: string, albumId: string, format: MediaFormat);
}
export declare class MediaAvatarResizedEvent implements MediaAvatarResized {
    authorId: string;
    eventName: string;
    format: MediaFormat;
    id: string;
    constructor(id: string, authorId: string, format: MediaFormat);
}
