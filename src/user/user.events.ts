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

export class UserLoggedInEvent implements UserLoggedIn, IEvent {
  readonly eventName: string;
  readonly authorId: string;

  constructor(authorId: string) {
    this.authorId = authorId;
    this.eventName = UserLoggedInEvent.name;
  }
}

export class UserRefreshedTokenEvent implements UserRefreshedToken {
  readonly authorId: string;
  readonly eventName: string;

  constructor(authorId: string) {
    this.authorId = authorId;
    this.eventName = UserLoggedInEvent.name;
  }
}

export class UserRegisteredEvent implements UserRegistered {
  readonly eventName: string;
  readonly authorId: string;
  readonly email: string;
  readonly userId: string;
  readonly validateId: string;
  readonly locale: Locale;
  readonly role: UserRole;

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
  readonly eventName: string;
  readonly authorId: string;
  readonly locale: Locale;
  readonly role: UserRole;

  constructor(authorId: string, locale: Locale, role: UserRole) {
    this.eventName = UserUpdatedEvent.name;
    this.authorId = authorId;
    this.locale = locale;
    this.role = role;
  }
}

export class UserValidatedEvent implements UserValidated {
  readonly eventName: string;
  readonly authorId: string;
  readonly validateId: string;

  constructor(authorId: string, validateId: string) {
    this.eventName = UserValidatedEvent.name;
    this.authorId = authorId;
    this.validateId = validateId;
  }
}

export class UserForgotPasswordEvent implements UserForgotPassword {
  readonly authorId: string;
  readonly email: string;
  readonly eventName: string;
  readonly resetPasswordId: string;

  constructor(authorId: string, email: string, resetPasswordId: string) {
    this.authorId = authorId;
    this.email = email;
    this.resetPasswordId = resetPasswordId;
    this.eventName = UserForgotPasswordEvent.name;
  }
}

export class UserPasswordUpdatedEvent implements IEvent {
  readonly authorId: string;
  readonly eventName: string;
}
