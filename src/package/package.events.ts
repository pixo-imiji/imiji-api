import { IEvent } from '../event';

export interface IPackage {
  packageId: string;
  name: string;
  price: number;
  mediaLimit: number;
  mediaSize: number;
  years: number;
}

export interface PackageCreated extends IEvent, IPackage {}

export interface PackageUpdated extends IEvent, IPackage {}

export interface BuyRequestCreated extends IEvent {
  packageId: string;
  orderId: string;
  paymentRef: string;
  paymentMethod: string;
  price: number;
}

export interface PackageBought extends IEvent {
  orderId: string;
}

export class PackageCreatedEvent implements PackageCreated {
  authorId: string;
  eventName: string;
  mediaLimit: number;
  mediaSize: number;
  name: string;
  packageId: string;
  price: number;
  years: number;

  constructor(
    id: string,
    authorId: string,
    name: string,
    mediaLimit: number,
    mediaSize: number,
    price: number,
    years: number,
  ) {
    this.eventName = PackageCreatedEvent.name;
    this.authorId = authorId;
    this.packageId = id;
    this.name = name;
    this.mediaLimit = mediaLimit;
    this.mediaSize = mediaSize;
    this.price = price;
    this.years = years;
  }
}

export class PackageUpdatedEvent implements PackageUpdated {
  authorId: string;
  eventName: string;
  mediaLimit: number;
  mediaSize: number;
  name: string;
  packageId: string;
  price: number;
  years: number;

  constructor(
    id: string,
    authorId: string,
    name: string,
    mediaLimit: number,
    mediaSize: number,
    price: number,
    years: number,
  ) {
    this.eventName = PackageUpdatedEvent.name;
    this.authorId = authorId;
    this.packageId = id;
    this.name = name;
    this.mediaLimit = mediaLimit;
    this.mediaSize = mediaSize;
    this.price = price;
    this.years = years;
  }
}

export class BuyRequestCreatedEvent implements BuyRequestCreated {
  authorId: string;
  eventName: string;
  packageId: string;
  orderId: string;
  price: number;
  paymentMethod: string;
  paymentRef: string;

  constructor(
    id: string,
    authorId: string,
    orderId: string,
    price: number,
    method: string,
    refId: string,
  ) {
    this.eventName = BuyRequestCreatedEvent.name;
    this.authorId = authorId;
    this.packageId = id;
    this.orderId = orderId;
    this.price = price;
    this.paymentMethod = method;
    this.paymentRef = refId;
  }
}

export class PackageBoughtEvent implements PackageBought {
  authorId: string;
  eventName: string;
  orderId: string;

  constructor(id: string) {
    this.orderId = id;
    this.authorId = 'payment-gateway-system';
    this.eventName = PackageBoughtEvent.name;
  }
}
