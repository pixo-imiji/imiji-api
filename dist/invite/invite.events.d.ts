import { IEvent } from '../event';
export interface GuestInvitedCreated extends IEvent {
    readonly inviteId: string;
    readonly guestId: string;
    readonly albumId: string;
    readonly endDate: number;
}
export interface LinkInviteCreated extends IEvent {
    readonly inviteId: string;
    readonly albumId: string;
    readonly endDate: number;
}
export interface InviteForAlbumAccepted extends IEvent {
    readonly inviteId: string;
    readonly userId: string;
}
export interface InviteForAlbumReject extends IEvent {
    readonly inviteId: string;
    readonly userId: string;
}
export declare class InviteForGuestAlbumCreatedEvent implements GuestInvitedCreated {
    readonly albumId: string;
    readonly authorId: string;
    readonly endDate: number;
    readonly eventName: string;
    readonly guestId: string;
    readonly inviteId: string;
    constructor(id: string, authorId: string, albumId: string, guestId: string, endDate: number);
}
export declare class InviteLinkForAlbumCreatedEvent implements LinkInviteCreated {
    readonly albumId: string;
    readonly authorId: string;
    readonly endDate: number;
    readonly eventName: string;
    readonly inviteId: string;
    constructor(id: string, authorId: string, albumId: string, endDate: number);
}
export declare class InviteForAlbumAcceptedEvent implements InviteForAlbumAccepted {
    readonly authorId: string;
    readonly eventName: string;
    readonly inviteId: string;
    readonly userId: string;
    constructor(id: string, authorId: string);
}
export declare class InviteForAlbumRejectedEvent implements InviteForAlbumReject {
    readonly authorId: string;
    readonly eventName: string;
    readonly inviteId: string;
    readonly userId: string;
    constructor(id: string, authorId: string);
}
