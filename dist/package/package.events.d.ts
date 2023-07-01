import { IEvent } from '../event';
export interface IPackage {
    packageId: string;
    name: string;
    price: number;
    mediaLimit: number;
    mediaSize: number;
    years: number;
}
export interface PackageCreated extends IEvent, IPackage {
}
export interface PackageUpdated extends IEvent, IPackage {
}
export interface BuyRequestCreated extends IEvent {
    packageId: string;
}
export interface PackageBought extends IEvent {
    packageId: string;
    userId: string;
}
export declare class PackageCreatedEvent implements PackageCreated {
    authorId: string;
    eventName: string;
    mediaLimit: number;
    mediaSize: number;
    name: string;
    packageId: string;
    price: number;
    years: number;
    constructor(id: string, authorId: string, name: string, mediaLimit: number, mediaSize: number, price: number, years: number);
}
export declare class PackageUpdatedEvent implements PackageUpdated {
    authorId: string;
    eventName: string;
    mediaLimit: number;
    mediaSize: number;
    name: string;
    packageId: string;
    price: number;
    years: number;
    constructor(id: string, authorId: string, name: string, mediaLimit: number, mediaSize: number, price: number, years: number);
}
export declare class BuyRequestCreatedEvent implements BuyRequestCreated {
    authorId: string;
    eventName: string;
    packageId: string;
    constructor(id: string, authorId: string);
}
export declare class PackageBoughtEvent implements PackageBought {
    authorId: string;
    eventName: string;
    packageId: string;
    userId: string;
    constructor(id: string, authorId: string, userId: string);
}
