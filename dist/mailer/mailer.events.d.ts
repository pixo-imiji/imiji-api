import { IEvent } from '../event';
export interface ValidateAccountMailSent extends IEvent {
    readonly id: string;
    readonly mail: string;
    readonly validateId: string;
}
export declare class ValidateAccountMailSentEvent implements ValidateAccountMailSent {
    readonly id: string;
    readonly authorId: string;
    readonly eventName: string;
    readonly mail: string;
    readonly validateId: string;
    constructor(id: string, mail: string, authorId: string, validateId: string);
}
export interface DeleteAccountMailSent extends IEvent {
    readonly id: string;
    readonly email: string;
}
export declare class DeleteAccountMailSentEvent implements DeleteAccountMailSent {
    readonly authorId: string;
    readonly email: string;
    readonly eventName: string;
    readonly id: string;
    constructor(id: string, email: string, authorId: string);
}
export interface DownloadLinkSent extends IEvent {
    readonly id: string;
    readonly albumId: string;
    readonly link: string;
    readonly userId: string;
}
export declare class DownloadLinkSentEvent implements DownloadLinkSent {
    readonly albumId: string;
    readonly authorId: string;
    readonly eventName: string;
    readonly id: string;
    readonly link: string;
    readonly userId: string;
    constructor(id: string, albumId: string, userId: string, authorId: string, link: string);
}
export interface InvoicePackageMailSent extends IEvent {
    readonly id: string;
    readonly orderId: string;
}
export declare class InvoicePackageMailSentEvent implements InvoicePackageMailSent {
    readonly id: string;
    readonly authorId: string;
    readonly eventName: string;
    readonly orderId: string;
    constructor(id: string, orderId: string, authorId: string);
}
export interface ResetPasswordMailSent extends IEvent {
    readonly id: string;
    readonly mail: string;
    readonly resetPasswordId: string;
}
export declare class ResetPasswordMailSentEvent implements ResetPasswordMailSent {
    readonly id: string;
    readonly authorId: string;
    readonly eventName: string;
    readonly mail: string;
    readonly resetPasswordId: string;
    constructor(mail: string, authorId: string, resetPasswordId: string);
}
export interface ResetPasswordConfirmMailSent extends IEvent {
    readonly id: string;
    readonly mail: string;
}
export declare class ResetPasswordConfirmMailSentEvent implements ResetPasswordConfirmMailSent {
    readonly id: string;
    readonly authorId: string;
    readonly eventName: string;
    readonly mail: string;
    constructor(mail: string, authorId: string);
}
export interface InviteMailSent extends IEvent {
    readonly id: string;
    readonly mail: string;
    readonly inviteId: string;
}
export declare class InviteMailSentEvent implements InviteMailSent {
    readonly id: string;
    readonly authorId: string;
    readonly mail: string;
    readonly eventName: string;
    readonly inviteId: string;
    constructor(id: string, mail: string, authorId: string, inviteId: string);
}
