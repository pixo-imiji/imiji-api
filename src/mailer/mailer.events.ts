import { IEvent } from '../event';

export interface ValidateAccountMailSent extends IEvent {
  mail: string;
}

export class ValidateAccountMailSentEvent implements ValidateAccountMailSent {
  authorId: string;
  eventName: string;
  mail: string;

  constructor(mail: string, authorId: string) {
    this.mail = mail;
    this.authorId = authorId;
    this.eventName = ValidateAccountMailSentEvent.name;
  }
}

export interface InvoicePackageMailSent extends IEvent {
  mail: string;
}

export class InvoicePackageMailSentEvent implements InvoicePackageMailSent {
  authorId: string;
  eventName: string;
  mail: string;

  constructor(mail: string, authorId: string) {
    this.mail = mail;
    this.authorId = authorId;
    this.eventName = InvoicePackageMailSentEvent.name;
  }
}

export interface ResetPasswordMailSent extends IEvent {
  mail: string;
}

export class ResetPasswordMailSentEvent implements ResetPasswordMailSent {
  authorId: string;
  eventName: string;
  mail: string;

  constructor(mail: string, authorId: string) {
    this.mail = mail;
    this.authorId = authorId;
    this.eventName = ResetPasswordMailSentEvent.name;
  }
}

export interface ResetPasswordConfirmMailSent extends IEvent {
  mail: string;
}

export class ResetPasswordConfirmMailSentEvent
  implements ResetPasswordConfirmMailSent
{
  authorId: string;
  eventName: string;
  mail: string;

  constructor(mail: string, authorId: string) {
    this.mail = mail;
    this.authorId = authorId;
    this.eventName = ResetPasswordConfirmMailSentEvent.name;
  }
}

export interface InviteMailSent extends IEvent {
  mail: string;
}

export class InviteMailSentEvent implements InviteMailSent {
  authorId: string;
  mail: string;
  eventName: string;

  constructor(mail: string, authorId: string) {
    this.mail = mail;
    this.authorId = authorId;
    this.eventName = InviteMailSentEvent.name;
  }
}
