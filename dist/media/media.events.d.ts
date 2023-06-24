import { IEvent } from '../event';
import { MediaType } from './media.type';
import { MediaFormat } from './media.format';
import { MediaDoAction } from './media.action';
export interface MediaUploaded extends IEvent {
    mediaId: string;
    type: MediaType;
    albumId: string;
    chapterId: string;
    fileName: string;
    format: MediaFormat;
}
export interface MediaRemoved extends IEvent {
    mediaId: string;
    type: MediaType;
    albumId: string;
    chapterId: string;
    fileName: string;
    formats: MediaFormat[];
}
export interface MediaAlbumResized extends IEvent {
    mediaId: string;
    albumId: string;
    fileName: string;
    format: MediaFormat;
}
export interface MediaDidAction extends IEvent {
    albumId: string;
    mediaId: string;
    action: MediaDoAction;
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
    fileName: string;
    format: MediaFormat;
    authorId: string;
    eventName: string;
    constructor(id: string, authorId: string, albumId: string, chapterId: string, fileName: string, type: MediaType, format: MediaFormat);
}
export declare class MediaRemovedEvent implements MediaRemoved {
    authorId: string;
    eventName: string;
    mediaId: string;
    albumId: string;
    chapterId: string;
    fileName: string;
    type: MediaType;
    formats: MediaFormat[];
    constructor(id: string, authorId: string, albumId: string, chapterId: string, fileName: string, type: MediaType, formats: MediaFormat[]);
}
export declare class MediaAlbumResizedEvent implements MediaAlbumResized {
    albumId: string;
    authorId: string;
    eventName: string;
    mediaId: string;
    fileName: string;
    format: MediaFormat;
    constructor(id: string, authorId: string, albumId: string, fileName: string, format: MediaFormat);
}
export declare class MediaAvatarResizedEvent implements MediaAvatarResized {
    authorId: string;
    eventName: string;
    format: MediaFormat;
    id: string;
    constructor(id: string, authorId: string, format: MediaFormat);
}
export declare class MediaDidActionEvent implements MediaDidAction {
    action: MediaDoAction;
    authorId: string;
    eventName: string;
    albumId: string;
    mediaId: string;
    constructor(id: string, authorId: string, albumId: string, action: MediaDoAction);
}
