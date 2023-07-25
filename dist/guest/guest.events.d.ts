import { IEvent } from '../event';
import { GuestRole } from './guest.role';
import { Locale } from '../user';
export interface GuestTransport {
    readonly email: string;
    readonly phone: string;
    readonly baseAddress: string;
    readonly publicKey: string;
}
export interface GuestAdded extends IEvent, GuestTransport {
    readonly guestId: string;
    readonly albumId: string;
    readonly email: string;
    readonly phone: string;
    readonly baseAddress: string;
    readonly publicKey: string;
    readonly locale: Locale;
}
export interface GuestRemoved extends IEvent, GuestTransport {
    readonly guestId: string;
    readonly albumId: string;
    readonly email: string;
}
export interface RoleChanged extends IEvent {
    readonly guestId: string;
    readonly role: GuestRole;
}
export declare class GuestAddedEvent implements GuestAdded {
    readonly albumId: string;
    readonly authorId: string;
    readonly email: string;
    readonly phone: string;
    readonly baseAddress: string;
    readonly publicKey: string;
    readonly eventName: string;
    readonly guestId: string;
    readonly locale: Locale;
    constructor(id: string, authorId: string, email: string, phone: string, baseAddress: string, publicKey: string, albumId: string, locale: Locale);
}
export declare class GuestRemovedEvent implements GuestRemoved {
    readonly albumId: string;
    readonly authorId: string;
    readonly email: string;
    readonly phone: string;
    readonly baseAddress: string;
    readonly publicKey: string;
    readonly eventName: string;
    readonly guestId: string;
    constructor(id: string, authorId: string, email: string, phone: string, baseAddress: string, publicKey: string, albumId: string);
}
export declare class GuestRoleChangedEvent implements RoleChanged {
    readonly authorId: string;
    readonly eventName: string;
    readonly guestId: string;
    readonly role: GuestRole;
    constructor(id: string, authorId: string, role: GuestRole);
}
