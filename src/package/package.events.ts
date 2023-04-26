import { IEvent } from '../event';

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

export class PackageCreatedEvent implements PackageCreated {
  authorId: string;
  eventName: string;
  mediaLimit: number;
  name: string;
  packageId: string;
  price: number;
  years: number;

  constructor(
    id: string,
    authorId: string,
    name: string,
    mediaLimit: number,
    price: number,
    years: number,
  ) {
    this.eventName = PackageCreatedEvent.name;
    this.authorId = authorId;
    this.packageId = id;
    this.name = name;
    this.mediaLimit = mediaLimit;
    this.price = price;
    this.years = years;
  }
}

export class PackageUpdatedEvent implements PackageUpdated {
  authorId: string;
  eventName: string;
  mediaLimit: number;
  name: string;
  packageId: string;
  price: number;
  years: number;

  constructor(
    id: string,
    authorId: string,
    name: string,
    mediaLimit: number,
    price: number,
    years: number,
  ) {
    this.eventName = PackageUpdatedEvent.name;
    this.authorId = authorId;
    this.packageId = id;
    this.name = name;
    this.mediaLimit = mediaLimit;
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
