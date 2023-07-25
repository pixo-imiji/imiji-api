"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteMailSentEvent = exports.ResetPasswordConfirmMailSentEvent = exports.ResetPasswordMailSentEvent = exports.InvoicePackageMailSentEvent = exports.DownloadLinkSentEvent = exports.DeleteAccountMailSentEvent = exports.ValidateAccountMailSentEvent = void 0;
class ValidateAccountMailSentEvent {
    constructor(id, mail, authorId, validateId) {
        this.id = id;
        this.mail = mail;
        this.authorId = authorId;
        this.validateId = validateId;
        this.eventName = ValidateAccountMailSentEvent.name;
    }
}
exports.ValidateAccountMailSentEvent = ValidateAccountMailSentEvent;
class DeleteAccountMailSentEvent {
    constructor(id, email, authorId) {
        this.id = id;
        this.eventName = DeleteAccountMailSentEvent.name;
        this.authorId = authorId;
        this.email = email;
    }
}
exports.DeleteAccountMailSentEvent = DeleteAccountMailSentEvent;
class DownloadLinkSentEvent {
    constructor(id, albumId, userId, authorId, link) {
        this.id = id;
        this.albumId = albumId;
        this.userId = userId;
        this.authorId = authorId;
        this.link = link;
        this.eventName = DownloadLinkSentEvent.name;
    }
}
exports.DownloadLinkSentEvent = DownloadLinkSentEvent;
class InvoicePackageMailSentEvent {
    constructor(id, orderId, authorId) {
        this.id = id;
        this.orderId = orderId;
        this.authorId = authorId;
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
    constructor(id, mail, authorId, inviteId) {
        this.id = id;
        this.mail = mail;
        this.authorId = authorId;
        this.inviteId = inviteId;
        this.eventName = InviteMailSentEvent.name;
    }
}
exports.InviteMailSentEvent = InviteMailSentEvent;
