import { IEvent } from '../event';
import { GuestRole } from './guest.role';
import { Locale } from '../user';

export interface GuestTransport {
  email: string;
  phone: string;
  baseAddress: string;
  publicKey: string;
}

export interface GuestAdded extends IEvent, GuestTransport {
  guestId: string;
  albumId: string;
  email: string;
  phone: string;
  baseAddress: string;
  publicKey: string;
  locale: Locale;
}

export interface GuestRemoved extends IEvent, GuestTransport {
  guestId: string;
  albumId: string;
  email: string;
}

export interface RoleChanged extends IEvent {
  email: string;
  albumId: string;
  role: GuestRole;
}

export class GuestAddedEvent implements GuestAdded {
  albumId: string;
  authorId: string;
  email: string;
  phone: string;
  baseAddress: string;
  publicKey: string;
  eventName: string;
  guestId: string;
  locale: Locale;

  constructor(
    id: string,
    authorId: string,
    email: string,
    phone: string,
    baseAddress: string,
    publicKey: string,
    albumId: string,
    locale: Locale,
  ) {
    this.eventName = GuestAddedEvent.name;
    this.guestId = id;
    this.authorId = authorId;
    this.email = email;
    this.baseAddress = baseAddress;
    this.publicKey = publicKey;
    this.phone = phone;
    this.albumId = albumId;
    this.locale = locale;
  }
}

export class GuestRemovedEvent implements GuestRemoved {
  albumId: string;
  authorId: string;
  email: string;
  phone: string;
  baseAddress: string;
  publicKey: string;
  eventName: string;
  guestId: string;

  constructor(
    id: string,
    authorId: string,
    email: string,
    phone: string,
    baseAddress: string,
    publicKey: string,
    albumId: string,
  ) {
    this.eventName = GuestRemovedEvent.name;
    this.guestId = id;
    this.authorId = authorId;
    this.email = email;
    this.albumId = albumId;
  }
}

export class RoleChangedEvent implements RoleChanged {
  authorId: string;
  eventName: string;
  email: string;
  albumId: string;
  role: GuestRole;

  constructor(
    email: string,
    authorId: string,
    albumId: string,
    role: GuestRole,
  ) {
    this.eventName = RoleChangedEvent.name;
    this.email = email;
    this.authorId = authorId;
    this.albumId = albumId;
    this.role = role;
  }
}
