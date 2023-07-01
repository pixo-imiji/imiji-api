import { IEvent } from '../event';
import { InviteType } from './invite.type';
export interface InviteForAlbumCreated extends IEvent {
    inviteId: string;
    guestId: string;
    albumId: string;
    email: string;
    type: InviteType;
}
export interface InviteForAlbumAccepted extends IEvent {
    inviteId: string;
    guestId: string;
}
export declare class InviteForAlbumCreatedEvent implements InviteForAlbumCreated {
    albumId: string;
    authorId: string;
    email: string;
    eventName: string;
    inviteId: string;
    guestId: string;
    type: InviteType;
    constructor(id: string, authorId: string, albumId: string, guestId: string, email: string, type: InviteType);
}
export declare class AcceptInviteForAlbumEvent implements InviteForAlbumAccepted {
    authorId: string;
    guestId: string;
    eventName: string;
    inviteId: string;
    constructor(id: string, authorId: string, guestId: string);
}
