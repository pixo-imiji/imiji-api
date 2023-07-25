import { IEvent } from '../event';
import { Locale } from './locale';
import { UserRole } from './user.role';
export type UserLoggedIn = IEvent;
export type UserRefreshedToken = IEvent;
export interface UserRegistered extends IEvent {
    readonly email: string;
    readonly validateId: string;
    readonly locale: Locale;
    readonly role: UserRole;
}
export interface UserUpdated extends IEvent {
    readonly locale: Locale;
    readonly role: UserRole;
}
export interface UserValidated extends IEvent {
    readonly validateId: string;
}
export interface UserForgotPassword extends IEvent {
    readonly email: string;
    readonly resetPasswordId: string;
}
export declare class UserLoggedInEvent implements UserLoggedIn, IEvent {
    readonly eventName: string;
    readonly authorId: string;
    constructor(authorId: string);
}
export declare class UserRefreshedTokenEvent implements UserRefreshedToken {
    readonly authorId: string;
    readonly eventName: string;
    constructor(authorId: string);
}
export declare class UserRegisteredEvent implements UserRegistered {
    readonly eventName: string;
    readonly authorId: string;
    readonly email: string;
    readonly userId: string;
    readonly validateId: string;
    readonly locale: Locale;
    readonly role: UserRole;
    constructor(id: string, email: string, locale: Locale, validateId: string, role: UserRole);
}
export declare class UserUpdatedEvent implements UserUpdated {
    readonly eventName: string;
    readonly authorId: string;
    readonly locale: Locale;
    readonly role: UserRole;
    constructor(authorId: string, locale: Locale, role: UserRole);
}
export declare class UserValidatedEvent implements UserValidated {
    readonly eventName: string;
    readonly authorId: string;
    readonly validateId: string;
    constructor(authorId: string, validateId: string);
}
export declare class UserForgotPasswordEvent implements UserForgotPassword {
    readonly authorId: string;
    readonly email: string;
    readonly eventName: string;
    readonly resetPasswordId: string;
    constructor(authorId: string, email: string, resetPasswordId: string);
}
export declare class UserPasswordUpdatedEvent implements IEvent {
    readonly authorId: string;
    readonly eventName: string;
}
