export interface UserRegister {
  email: string;
  password: string;
  repeatPassword: string;
  locale: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserUpdate {
  userId: string;
  locale: string;
}

export interface UserValidate {
  validateId: string;
}
