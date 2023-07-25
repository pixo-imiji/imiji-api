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

export interface DeleteAccountMailSent extends IEvent {
  readonly id: string;
  readonly email: string;
}

export class DeleteAccountMailSentEvent implements DeleteAccountMailSent {
  readonly authorId: string;
  readonly email: string;
  readonly eventName: string;
  readonly id: string;

  constructor(id: string, email: string, authorId: string) {
    this.id = id;
    this.eventName = DeleteAccountMailSentEvent.name;
    this.authorId = authorId;
    this.email = email;
  }
}

export interface DownloadLinkSent extends IEvent {
  readonly id: string;
  readonly albumId: string;
  readonly link: string;
  readonly userId: string;
}

export class DownloadLinkSentEvent implements DownloadLinkSent {
  readonly albumId: string;
  readonly authorId: string;
  readonly eventName: string;
  readonly id: string;
  readonly link: string;
  readonly userId: string;

  constructor(
    id: string,
    albumId: string,
    userId: string,
    authorId: string,
    link: string,
  ) {
    this.id = id;
    this.albumId = albumId;
    this.userId = userId;
    this.authorId = authorId;
    this.link = link;
    this.eventName = DownloadLinkSentEvent.name;
  }
}

export interface InvoicePackageMailSent extends IEvent {
  readonly id: string;
  readonly orderId: string;
}

export class InvoicePackageMailSentEvent implements InvoicePackageMailSent {
  readonly id: string;
  readonly authorId: string;
  readonly eventName: string;
  readonly orderId: string;

  constructor(id: string, orderId: string, authorId: string) {
    this.id = id;
    this.orderId = orderId;
    this.authorId = authorId;
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
