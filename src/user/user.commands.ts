import { Locale } from './locale';

export interface UserRegister {
  email: string;
  password: string;
  repeatPassword: string;
  locale: Locale;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserUpdate {
  userId: string;
  locale: Locale;
}

export interface UserValidate {
  validateId: string;
}
