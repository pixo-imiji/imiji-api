import { IEvent } from '../event';
export interface ValidateAccountMailSent extends IEvent {
    mail: string;
    validateId: string;
}
export declare class ValidateAccountMailSentEvent implements ValidateAccountMailSent {
    authorId: string;
    eventName: string;
    mail: string;
    validateId: string;
    constructor(mail: string, authorId: string, validateId: string);
}
export interface InvoicePackageMailSent extends IEvent {
    mail: string;
    startDate: number;
    endDate: number;
    currency: string;
    price: string;
}
export declare class InvoicePackageMailSentEvent implements InvoicePackageMailSent {
    authorId: string;
    eventName: string;
    mail: string;
    currency: string;
    endDate: number;
    price: string;
    startDate: number;
    constructor(mail: string, authorId: string, startDate: number, endDate: number, price: string, currency: string);
}
export interface ResetPasswordMailSent extends IEvent {
    mail: string;
    resetPasswordId: string;
}
export declare class ResetPasswordMailSentEvent implements ResetPasswordMailSent {
    authorId: string;
    eventName: string;
    mail: string;
    resetPasswordId: string;
    constructor(mail: string, authorId: string, resetPasswordId: string);
}
export interface ResetPasswordConfirmMailSent extends IEvent {
    mail: string;
}
export declare class ResetPasswordConfirmMailSentEvent implements ResetPasswordConfirmMailSent {
    authorId: string;
    eventName: string;
    mail: string;
    constructor(mail: string, authorId: string);
}
export interface InviteMailSent extends IEvent {
    mail: string;
    inviteId: string;
}
export declare class InviteMailSentEvent implements InviteMailSent {
    authorId: string;
    mail: string;
    eventName: string;
    inviteId: string;
    constructor(mail: string, authorId: string, inviteId: string);
}
