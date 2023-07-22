import { IEvent } from '../event';
import { GuestRole } from './guest.role';
import { Locale } from '../user';
export interface GuestTransport {
    email: string;
    phone: string;
    baseAddress: string;
    publicKey: string;
}
export interface GuestAdded extends IEvent, GuestTransport {
    guestId: string;
    albumId: string;
    email: string;
    phone: string;
    baseAddress: string;
    publicKey: string;
    locale: Locale;
}
export interface GuestRemoved extends IEvent, GuestTransport {
    guestId: string;
    albumId: string;
    email: string;
}
export interface RoleChanged extends IEvent {
    email: string;
    albumId: string;
    role: GuestRole;
}
export declare class GuestAddedEvent implements GuestAdded {
    albumId: string;
    authorId: string;
    email: string;
    phone: string;
    baseAddress: string;
    publicKey: string;
    eventName: string;
    guestId: string;
    locale: Locale;
    constructor(id: string, authorId: string, email: string, phone: string, baseAddress: string, publicKey: string, albumId: string, locale: Locale);
}
export declare class GuestRemovedEvent implements GuestRemoved {
    albumId: string;
    authorId: string;
    email: string;
    phone: string;
    baseAddress: string;
    publicKey: string;
    eventName: string;
    guestId: string;
    constructor(id: string, authorId: string, email: string, phone: string, baseAddress: string, publicKey: string, albumId: string);
}
export declare class RoleChangedEvent implements RoleChanged {
    authorId: string;
    eventName: string;
    email: string;
    albumId: string;
    role: GuestRole;
    constructor(email: string, authorId: string, albumId: string, role: GuestRole);
}
