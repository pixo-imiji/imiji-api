import { IEvent } from '../event';
import { InviteType } from './invite.type';

export interface InviteForAlbumCreated extends IEvent {
  inviteId: string;
  guestId: string;
  albumId: string;
  email: string;
  type: InviteType;
}

export interface InviteForAlbumAccepted extends IEvent {
  inviteId: string;
  guestId: string;
}

export interface InviteForAlbumReject extends IEvent {
  inviteId: string;
  guestId: string;
}

export class InviteForAlbumCreatedEvent implements InviteForAlbumCreated {
  albumId: string;
  authorId: string;
  email: string;
  eventName: string;
  inviteId: string;
  guestId: string;
  type: InviteType;

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    guestId: string,
    email: string,
    type: InviteType,
  ) {
    this.eventName = InviteForAlbumCreatedEvent.name;
    this.authorId = authorId;
    this.inviteId = id;
    this.albumId = albumId;
    this.guestId = guestId;
    this.email = email;
    this.type = type;
  }
}

export class AcceptInviteForAlbumEvent implements InviteForAlbumAccepted {
  authorId: string;
  guestId: string;
  eventName: string;
  inviteId: string;

  constructor(id: string, authorId: string, guestId: string) {
    this.eventName = AcceptInviteForAlbumEvent.name;
    this.authorId = authorId;
    this.guestId = guestId;
    this.inviteId = id;
  }
}

export class RejectInviteForAlbumEvent implements InviteForAlbumReject {
  authorId: string;
  guestId: string;
  eventName: string;
  inviteId: string;

  constructor(id: string, authorId: string, guestId: string) {
    this.eventName = RejectInviteForAlbumEvent.name;
    this.authorId = authorId;
    this.guestId = guestId;
    this.inviteId = id;
  }
}
