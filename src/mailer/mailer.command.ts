export interface SendValidateAccountMail {
  email: string;
  validateId: string;
}

export interface SendInvoicePackageMail {
  email: string;
  packageId: string;
  price: number;
  mediaLimit: number;
  years: number;
}

export interface SendResetPasswordMail {
  email: string;
  resetPasswordId: string;
}
