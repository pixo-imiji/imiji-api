import { IEvent } from '../event';
import { Locale } from './locale';
import { UserRole } from './user.role';
export type UserLoggedIn = IEvent;
export type UserRefreshedToken = IEvent;
export interface UserRegistered extends IEvent {
    email: string;
    validateId: string;
    locale: Locale;
    role: UserRole;
}
export interface UserUpdated extends IEvent {
    locale: Locale;
    role: UserRole;
}
export interface UserValidated extends IEvent {
    validateId: string;
}
export interface UserForgotPassword extends IEvent {
    email: string;
    resetPasswordId: string;
}
export declare class UserLoggedInEvent implements UserLoggedIn, IEvent {
    eventName: string;
    authorId: string;
    constructor(authorId: string);
}
export declare class UserRefreshedTokenEvent implements UserRefreshedToken {
    authorId: string;
    eventName: string;
    constructor(authorId: string);
}
export declare class UserRegisteredEvent implements UserRegistered {
    eventName: string;
    authorId: string;
    email: string;
    userId: string;
    validateId: string;
    locale: Locale;
    role: UserRole;
    constructor(id: string, email: string, locale: Locale, validateId: string, role: UserRole);
}
export declare class UserUpdatedEvent implements UserUpdated {
    eventName: string;
    authorId: string;
    locale: Locale;
    role: UserRole;
    constructor(authorId: string, locale: Locale, role: UserRole);
}
export declare class UserValidatedEvent implements UserValidated {
    eventName: string;
    authorId: string;
    validateId: string;
    constructor(authorId: string, validateId: string);
}
export declare class UserForgotPasswordEvent implements UserForgotPassword {
    authorId: string;
    email: string;
    eventName: string;
    resetPasswordId: string;
    constructor(authorId: string, email: string, resetPasswordId: string);
}
