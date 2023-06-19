import { IEvent } from '../event';
import { InviteType } from './invite.type';
export interface InviteForAlbumCreated extends IEvent {
    inviteId: string;
    userId: string;
    albumId: string;
    email: string;
    type: InviteType;
}
export interface InviteForAlbumAccepted extends IEvent {
    inviteId: string;
}
export declare class InviteForAlbumCreatedEvent implements InviteForAlbumCreated {
    albumId: string;
    authorId: string;
    email: string;
    eventName: string;
    inviteId: string;
    userId: string;
    type: InviteType;
    constructor(id: string, authorId: string, albumId: string, userId: string, email: string, type: InviteType);
}
export declare class AcceptInviteForAlbumEvent implements InviteForAlbumAccepted {
    authorId: string;
    eventName: string;
    inviteId: string;
    constructor(id: string, authorId: string);
}
