import { IEvent } from "../event/IEvent";
export type UserLoggedIn = IEvent;
export interface UserRegistered extends IEvent {
    email: string;
    validateId: string;
}
export interface UserUpdated extends IEvent {
    locale: string;
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
    constructor(id: string, email: string, validateId: string);
}
export declare class UserUpdatedEvent implements UserUpdated {
    eventName: string;
    authorId: string;
    locale: string;
    constructor(authorId: string, locale: string);
}
export declare class UserValidatedEvent implements UserValidated {
    eventName: string;
    authorId: string;
    validateId: string;
    constructor(authorId: string, validateId: string);
}
