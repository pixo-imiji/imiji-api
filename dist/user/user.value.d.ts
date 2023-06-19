export declare class UserValue {
    private readonly _id;
    private readonly _email;
    private readonly _locale;
    private readonly _validate;
    private readonly _publicKey;
    constructor(_id: string, _email: string, _locale: string, _validate: boolean, _publicKey: string);
    get id(): string;
    get email(): string;
    get locale(): string;
    get validate(): boolean;
    get publicKey(): string;
}
