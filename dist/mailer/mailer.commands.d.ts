export interface SendValidateAccountMail {
    email: string;
    validateId: string;
}
export interface SendInvoicePackageMail {
    email: string;
    packageId: string;
    price: string;
    currency: string;
    mediaLimit: number;
    years: number;
}
export interface SendResetPasswordMail {
    email: string;
    resetPasswordId: string;
}
export interface SendRestPasswordConfirmMail {
    email: string;
}
export interface SendInviteMail {
    email: string;
    inviteId: string;
}
