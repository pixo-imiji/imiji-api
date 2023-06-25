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

export class UserLoggedInEvent implements UserLoggedIn, IEvent {
  eventName: string;
  authorId: string;

  constructor(authorId: string) {
    this.authorId = authorId;
    this.eventName = UserLoggedInEvent.name;
  }
}

export class UserRefreshedTokenEvent implements UserRefreshedToken {
  authorId: string;
  eventName: string;

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
  locale: Locale;
  role: UserRole;

  constructor(
    id: string,
    email: string,
    locale: Locale,
    validateId: string,
    role: UserRole,
  ) {
    this.eventName = UserRegisteredEvent.name;
    this.authorId = id;
    this.userId = id;
    this.email = email;
    this.locale = locale;
    this.role = role;
    this.validateId = validateId;
  }
}

export class UserUpdatedEvent implements UserUpdated {
  eventName: string;
  authorId: string;
  locale: Locale;
  role: UserRole;

  constructor(authorId: string, locale: Locale, role: UserRole) {
    this.eventName = UserUpdatedEvent.name;
    this.authorId = authorId;
    this.locale = locale;
    this.role = role;
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
