import { IEvent } from '../event';

export interface ValidateAccountMailSent extends IEvent {
  readonly id: string;
  readonly mail: string;
  readonly validateId: string;
}

export class ValidateAccountMailSentEvent implements ValidateAccountMailSent {
  readonly id: string;
  readonly authorId: string;
  readonly eventName: string;
  readonly mail: string;
  readonly validateId: string;

  constructor(id: string, mail: string, authorId: string, validateId: string) {
    this.id = id;
    this.mail = mail;
    this.authorId = authorId;
    this.validateId = validateId;
    this.eventName = ValidateAccountMailSentEvent.name;
  }
}

export interface InvoicePackageMailSent extends IEvent {
  readonly id: string;
  readonly mail: string;
  readonly startDate: number;
  readonly endDate: number;
  readonly currency: string;
  readonly price: string;
}

export class InvoicePackageMailSentEvent implements InvoicePackageMailSent {
  readonly id: string;
  readonly authorId: string;
  readonly eventName: string;
  readonly mail: string;
  readonly currency: string;
  readonly endDate: number;
  readonly price: string;
  readonly startDate: number;

  constructor(
    id: string,
    mail: string,
    authorId: string,
    startDate: number,
    endDate: number,
    price: string,
    currency: string,
  ) {
    this.id = id;
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
  readonly id: string;
  readonly mail: string;
  readonly resetPasswordId: string;
}

export class ResetPasswordMailSentEvent implements ResetPasswordMailSent {
  readonly id: string;
  readonly authorId: string;
  readonly eventName: string;
  readonly mail: string;
  readonly resetPasswordId: string;

  constructor(mail: string, authorId: string, resetPasswordId: string) {
    this.mail = mail;
    this.authorId = authorId;
    this.resetPasswordId = resetPasswordId;
    this.eventName = ResetPasswordMailSentEvent.name;
  }
}

export interface ResetPasswordConfirmMailSent extends IEvent {
  readonly id: string;
  readonly mail: string;
}

export class ResetPasswordConfirmMailSentEvent
  implements ResetPasswordConfirmMailSent
{
  readonly id: string;
  readonly authorId: string;
  readonly eventName: string;
  readonly mail: string;

  constructor(mail: string, authorId: string) {
    this.mail = mail;
    this.authorId = authorId;
    this.eventName = ResetPasswordConfirmMailSentEvent.name;
  }
}

export interface InviteMailSent extends IEvent {
  readonly id: string;
  readonly mail: string;
  readonly inviteId: string;
}

export class InviteMailSentEvent implements InviteMailSent {
  readonly id: string;
  readonly authorId: string;
  readonly mail: string;
  readonly eventName: string;
  readonly inviteId: string;

  constructor(id: string, mail: string, authorId: string, inviteId: string) {
    this.id = id;
    this.mail = mail;
    this.authorId = authorId;
    this.inviteId = inviteId;
    this.eventName = InviteMailSentEvent.name;
  }
}
