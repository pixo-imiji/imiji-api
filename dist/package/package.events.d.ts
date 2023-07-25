import { IEvent } from '../event';
export interface IPackage {
    readonly packageId: string;
    readonly name: string;
    readonly price: number;
    readonly mediaLimit: number;
    readonly mediaSize: number;
    readonly years: number;
}
export interface PackageCreated extends IEvent, IPackage {
}
export interface PackageUpdated extends IEvent, IPackage {
}
export interface BuyRequestCreated extends IEvent {
    readonly packageId: string;
    readonly orderId: string;
    readonly paymentRef: string;
    readonly paymentMethod: string;
    readonly price: number;
    readonly mediaLimit: number;
    readonly mediaSize: number;
}
export interface PackageBought extends IEvent {
    readonly orderId: string;
    readonly endDate: number;
}
export declare class PackageCreatedEvent implements PackageCreated {
    readonly authorId: string;
    readonly eventName: string;
    readonly mediaLimit: number;
    readonly mediaSize: number;
    readonly name: string;
    readonly packageId: string;
    readonly price: number;
    readonly years: number;
    constructor(id: string, authorId: string, name: string, mediaLimit: number, mediaSize: number, price: number, years: number);
}
export declare class PackageUpdatedEvent implements PackageUpdated {
    readonly authorId: string;
    readonly eventName: string;
    readonly mediaLimit: number;
    readonly mediaSize: number;
    readonly name: string;
    readonly packageId: string;
    readonly price: number;
    readonly years: number;
    constructor(id: string, authorId: string, name: string, mediaLimit: number, mediaSize: number, price: number, years: number);
}
export declare class BuyRequestCreatedEvent implements BuyRequestCreated {
    readonly authorId: string;
    readonly eventName: string;
    readonly packageId: string;
    readonly orderId: string;
    readonly price: number;
    readonly mediaLimit: number;
    readonly mediaSize: number;
    readonly paymentMethod: string;
    readonly paymentRef: string;
    constructor(id: string, authorId: string, orderId: string, price: number, mediaLimit: number, mediaSize: number, method: string, refId: string);
}
export declare class PackageBoughtEvent implements PackageBought {
    readonly authorId: string;
    readonly eventName: string;
    readonly orderId: string;
    readonly endDate: number;
    constructor(id: string, endDate: number);
}
