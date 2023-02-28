import { IEvent } from "../event/IEvent";
export interface PackageCreated extends IEvent {
    packageId: string;
    name: string;
    price: number;
    mediaLimit: number;
    years: number;
}
export interface PackageUpdated extends IEvent {
    packageId: string;
    name: string;
    price: number;
    mediaLimit: number;
    years: number;
}
export interface BuyRequestCreated extends IEvent {
    packageId: string;
}
export declare class PackageCreatedEvent implements PackageCreated {
    authorId: string;
    eventName: string;
    mediaLimit: number;
    name: string;
    packageId: string;
    price: number;
    years: number;
    constructor(id: string, authorId: string, name: string, mediaLimit: number, price: number, years: number);
}
export declare class PackageUpdatedEvent implements PackageUpdated {
    authorId: string;
    eventName: string;
    mediaLimit: number;
    name: string;
    packageId: string;
    price: number;
    years: number;
    constructor(id: string, authorId: string, name: string, mediaLimit: number, price: number, years: number);
}
export declare class BuyRequestCreatedEvent implements BuyRequestCreated {
    authorId: string;
    eventName: string;
    packageId: string;
    constructor(id: string, authorId: string);
}
