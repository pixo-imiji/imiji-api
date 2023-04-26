import { IEvent } from '../event';
import { GuestRole } from './guest.role';

export interface GuestAdded extends IEvent {
  guestId: string;
  albumId: string;
  email: string;
}

export interface GuestRemoved extends IEvent {
  guestId: string;
  albumId: string;
  email: string;
}

export interface RoleChanged extends IEvent {
  guestId: string;
  albumId: string;
  role: GuestRole;
}

export class GuestAddedEvent implements GuestAdded {
  albumId: string;
  authorId: string;
  email: string;
  eventName: string;
  guestId: string;

  constructor(id: string, authorId: string, email: string, albumId: string) {
    this.eventName = GuestAddedEvent.name;
    this.guestId = id;
    this.authorId = authorId;
    this.email = email;
    this.albumId = albumId;
  }
}

export class GuestRemovedEvent implements GuestRemoved {
  albumId: string;
  authorId: string;
  email: string;
  eventName: string;
  guestId: string;

  constructor(id: string, authorId: string, email: string, albumId: string) {
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
  guestId: string;
  albumId: string;
  role: GuestRole;

  constructor(id: string, authorId: string, albumId: string, role: GuestRole) {
    this.eventName = RoleChangedEvent.name;
    this.guestId = id;
    this.authorId = authorId;
    this.albumId = albumId;
    this.role = role;
  }
}
