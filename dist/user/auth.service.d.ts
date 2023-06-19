import { UserValue } from './user.value';
import { UserToken } from './user.token';
export interface IAuthService {
    getUserById: (id: string) => Promise<UserValue>;
    validateUser: (email: string, password: string) => Promise<any>;
    verifyToken: (token: string) => any;
    login: (user: UserValue) => Promise<UserToken>;
}
