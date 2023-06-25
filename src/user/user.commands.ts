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

export interface RefreshToken {
  token: UserToken;
}
