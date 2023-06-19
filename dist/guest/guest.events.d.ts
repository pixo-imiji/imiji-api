import { IEvent } from '../event';
import { GuestRole } from './guest.role';
export interface GuestAdded extends IEvent {
    guestId: string;
    albumId: string;
    email: string;
}
export interface GuestRemoved extends IEvent {
    guestId: string;
    albumId: string;
    email: string;
}
export interface RoleChanged extends IEvent {
    guestId: string;
    albumId: string;
    role: GuestRole;
}
export declare class GuestAddedEvent implements GuestAdded {
    albumId: string;
    authorId: string;
    email: string;
    eventName: string;
    guestId: string;
    constructor(id: string, authorId: string, email: string, albumId: string);
}
export declare class GuestRemovedEvent implements GuestRemoved {
    albumId: string;
    authorId: string;
    email: string;
    eventName: string;
    guestId: string;
    constructor(id: string, authorId: string, email: string, albumId: string);
}
export declare class RoleChangedEvent implements RoleChanged {
    authorId: string;
    eventName: string;
    guestId: string;
    albumId: string;
    role: GuestRole;
    constructor(id: string, authorId: string, albumId: string, role: GuestRole);
}
