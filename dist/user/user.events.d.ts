import { IEvent } from '../event';
import { Locale } from './locale';
export type UserLoggedIn = IEvent;
export interface UserRegistered extends IEvent {
    email: string;
    validateId: string;
    locale: Locale;
}
export interface UserUpdated extends IEvent {
    locale: Locale;
}
export interface UserValidated extends IEvent {
    validateId: string;
}
export declare class UserLoggedInEvent implements UserLoggedIn, IEvent {
    eventName: string;
    authorId: string;
    constructor(authorId: string);
}
export declare class UserRegisteredEvent implements UserRegistered {
    eventName: string;
    authorId: string;
    email: string;
    userId: string;
    validateId: string;
    locale: Locale;
    constructor(id: string, email: string, locale: Locale, validateId: string);
}
export declare class UserUpdatedEvent implements UserUpdated {
    eventName: string;
    authorId: string;
    locale: Locale;
    constructor(authorId: string, locale: Locale);
}
export declare class UserValidatedEvent implements UserValidated {
    eventName: string;
    authorId: string;
    validateId: string;
    constructor(authorId: string, validateId: string);
}
