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
}

export interface PackageBought extends IEvent {
  packageId: string;
  userId: string;
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

  constructor(id: string, authorId: string) {
    this.eventName = BuyRequestCreatedEvent.name;
    this.authorId = authorId;
    this.packageId = id;
  }
}

export class PackageBoughtEvent implements PackageBought {
  authorId: string;
  eventName: string;
  packageId: string;
  userId: string;

  constructor(id: string, authorId: string, userId: string) {
    this.packageId = id;
    this.authorId = authorId;
    this.eventName = PackageBoughtEvent.name;
    this.userId = userId;
  }
}
