import { Locale } from './locale';
import { UserRole } from './user.role';
import { UserToken } from './user.token';

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

export interface UserLoginLink {
  email: string;
}

export interface UserUpdate {
  userId: string;
  locale: Locale;
}

export interface UserValidate {
  validateId: string;
}

export interface AddUserRole {
  userId: string;
  role: UserRole;
}

export interface UserRefreshToken {
  token: UserToken;
}

export interface UserForgotPassword {
  email: string;
}

export interface UserResetPassword {
  resetPasswordId: string;
}
