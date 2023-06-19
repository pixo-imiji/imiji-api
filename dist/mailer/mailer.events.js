"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteMailSentEvent = exports.ResetPasswordConfirmMailSentEvent = exports.ResetPasswordMailSentEvent = exports.InvoicePackageMailSentEvent = exports.ValidateAccountMailSentEvent = void 0;
class ValidateAccountMailSentEvent {
    constructor(mail, authorId, validateId) {
        this.mail = mail;
        this.authorId = authorId;
        this.validateId = validateId;
        this.eventName = ValidateAccountMailSentEvent.name;
    }
}
exports.ValidateAccountMailSentEvent = ValidateAccountMailSentEvent;
class InvoicePackageMailSentEvent {
    constructor(mail, authorId, startDate, endDate, price, currency) {
        this.mail = mail;
        this.authorId = authorId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.price = price;
        this.currency = currency;
        this.eventName = InvoicePackageMailSentEvent.name;
    }
}
exports.InvoicePackageMailSentEvent = InvoicePackageMailSentEvent;
class ResetPasswordMailSentEvent {
    constructor(mail, authorId, resetPasswordId) {
        this.mail = mail;
        this.authorId = authorId;
        this.resetPasswordId = resetPasswordId;
        this.eventName = ResetPasswordMailSentEvent.name;
    }
}
exports.ResetPasswordMailSentEvent = ResetPasswordMailSentEvent;
class ResetPasswordConfirmMailSentEvent {
    constructor(mail, authorId) {
        this.mail = mail;
        this.authorId = authorId;
        this.eventName = ResetPasswordConfirmMailSentEvent.name;
    }
}
exports.ResetPasswordConfirmMailSentEvent = ResetPasswordConfirmMailSentEvent;
class InviteMailSentEvent {
    constructor(mail, authorId, inviteId) {
        this.mail = mail;
        this.authorId = authorId;
        this.inviteId = inviteId;
        this.eventName = InviteMailSentEvent.name;
    }
}
exports.InviteMailSentEvent = InviteMailSentEvent;
