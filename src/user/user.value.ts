import { UserRole } from './user.role';

export class UserValue {
  constructor(
    private readonly _id: string,
    private readonly _email: string,
    private readonly _locale: string,
    private readonly _validate: boolean,
    private readonly _publicKey: string,
    private readonly _roles: UserRole[],
  ) {}

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  get locale(): string {
    return this._locale;
  }

  get validate(): boolean {
    return this._validate;
  }

  get publicKey(): string {
    return this._publicKey;
  }

  get roles(): UserRole[] {
    return this._roles;
  }
}
