import { IEvent } from '../event';

export interface IPackage {
  readonly packageId: string;
  readonly name: string;
  readonly price: number;
  readonly mediaLimit: number;
  readonly mediaSize: number;
  readonly years: number;
}

export interface PackageCreated extends IEvent, IPackage {}

export interface PackageUpdated extends IEvent, IPackage {}

export interface BuyRequestCreated extends IEvent {
  readonly packageId: string;
  readonly name: string;
  readonly orderId: string;
  readonly paymentRef: string;
  readonly paymentMethod: string;
  readonly price: number;
  readonly discount: number;
  readonly mediaLimit: number;
  readonly mediaSize: number;
}

export interface PackageBought extends IEvent {
  readonly orderId: string;
  readonly endDate: number;
}

export class PackageCreatedEvent implements PackageCreated {
  readonly authorId: string;
  readonly eventName: string;
  readonly mediaLimit: number;
  readonly mediaSize: number;
  readonly name: string;
  readonly packageId: string;
  readonly price: number;
  readonly years: number;

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
  readonly authorId: string;
  readonly eventName: string;
  readonly mediaLimit: number;
  readonly mediaSize: number;
  readonly name: string;
  readonly packageId: string;
  readonly price: number;
  readonly years: number;

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
  readonly authorId: string;
  readonly eventName: string;
  readonly packageId: string;
  readonly name: string;
  readonly orderId: string;
  readonly price: number;
  readonly discount: number;
  readonly mediaLimit: number;
  readonly mediaSize: number;
  readonly paymentMethod: string;
  readonly paymentRef: string;

  constructor(
    id: string,
    packageName: string,
    authorId: string,
    orderId: string,
    price: number,
    discount: number,
    mediaLimit: number,
    mediaSize: number,
    method: string,
    refId: string,
  ) {
    this.eventName = BuyRequestCreatedEvent.name;
    this.authorId = authorId;
    this.packageId = id;
    this.name = packageName;
    this.orderId = orderId;
    this.price = price;
    this.mediaLimit = mediaLimit;
    this.mediaSize = mediaSize;
    this.paymentMethod = method;
    this.paymentRef = refId;
  }
}

export class PackageBoughtEvent implements PackageBought {
  readonly authorId: string;
  readonly eventName: string;
  readonly orderId: string;
  readonly endDate: number;

  constructor(id: string, endDate: number) {
    this.orderId = id;
    this.endDate = endDate;
    this.authorId = 'payment-gateway-system';
    this.eventName = PackageBoughtEvent.name;
  }
}
