import { IEvent } from '../event';

export interface ValidateAccountMailSent extends IEvent {
  mail: string;
  validateId: string;
}

export class ValidateAccountMailSentEvent implements ValidateAccountMailSent {
  authorId: string;
  eventName: string;
  mail: string;
  validateId: string;

  constructor(mail: string, authorId: string, validateId: string) {
    this.mail = mail;
    this.authorId = authorId;
    this.validateId = validateId;
    this.eventName = ValidateAccountMailSentEvent.name;
  }
}

export interface InvoicePackageMailSent extends IEvent {
  mail: string;
  startDate: number;
  endDate: number;
  currency: string;
  price: string;
}

export class InvoicePackageMailSentEvent implements InvoicePackageMailSent {
  authorId: string;
  eventName: string;
  mail: string;
  currency: string;
  endDate: number;
  price: string;
  startDate: number;

  constructor(
    mail: string,
    authorId: string,
    startDate: number,
    endDate: number,
    price: string,
    currency: string,
  ) {
    this.mail = mail;
    this.authorId = authorId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.price = price;
    this.currency = currency;
    this.eventName = InvoicePackageMailSentEvent.name;
  }
}

export interface ResetPasswordMailSent extends IEvent {
  mail: string;
  resetPasswordId: string;
}

export class ResetPasswordMailSentEvent implements ResetPasswordMailSent {
  authorId: string;
  eventName: string;
  mail: string;
  resetPasswordId: string;

  constructor(mail: string, authorId: string, resetPasswordId: string) {
    this.mail = mail;
    this.authorId = authorId;
    this.resetPasswordId = resetPasswordId;
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
  inviteId: string;
}

export class InviteMailSentEvent implements InviteMailSent {
  authorId: string;
  mail: string;
  eventName: string;
  inviteId: string;

  constructor(mail: string, authorId: string, inviteId: string) {
    this.mail = mail;
    this.authorId = authorId;
    this.inviteId = inviteId;
    this.eventName = InviteMailSentEvent.name;
  }
}
