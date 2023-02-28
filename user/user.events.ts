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

export class UserLoggedInEvent implements UserLoggedIn, IEvent {
  eventName: string;
  authorId: string;

  constructor(authorId: string) {
    this.authorId = authorId;
    this.eventName = UserLoggedInEvent.name;
  }
}

export class UserRegisteredEvent implements UserRegistered {
  eventName: string;
  authorId: string;
  email: string;
  userId: string;
  validateId: string;

  constructor(id: string, email: string, validateId: string) {
    this.eventName = UserRegisteredEvent.name;
    this.authorId = id;
    this.userId = id;
    this.email = email;
    this.validateId = validateId;
  }
}

export class UserUpdatedEvent implements UserUpdated {
  eventName: string;
  authorId: string;
  locale: string;

  constructor(authorId: string, locale: string) {
    this.eventName = UserUpdatedEvent.name;
    this.authorId = authorId;
    this.locale = locale;
  }
}

export class UserValidatedEvent implements UserValidated {
  eventName: string;
  authorId: string;
  validateId: string;

  constructor(authorId: string, validateId: string) {
    this.eventName = UserValidatedEvent.name;
    this.authorId = authorId;
    this.validateId = validateId;
  }
}
