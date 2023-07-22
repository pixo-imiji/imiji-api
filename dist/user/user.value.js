"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValue = void 0;
class UserValue {
    constructor(_id, _email, _locale, _validate, _publicKey, _roles) {
        this._id = _id;
        this._email = _email;
        this._locale = _locale;
        this._validate = _validate;
        this._publicKey = _publicKey;
        this._roles = _roles;
    }
    get id() {
        return this._id;
    }
    get email() {
        return this._email;
    }
    get locale() {
        return this._locale;
    }
    get validate() {
        return this._validate;
    }
    get publicKey() {
        return this._publicKey;
    }
    get roles() {
        return this._roles;
    }
}
exports.UserValue = UserValue;
