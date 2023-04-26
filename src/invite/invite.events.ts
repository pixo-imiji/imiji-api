import { IEvent } from '../event';
import { InviteType } from './invite.type';

export interface InviteForAlbumCreated extends IEvent {
  inviteId: string;
  userId: string;
  albumId: string;
  email: string;
  type: InviteType;
}

export interface InviteForAlbumAccepted extends IEvent {
  inviteId: string;
}

export class InviteForAlbumCreatedEvent implements InviteForAlbumCreated {
  albumId: string;
  authorId: string;
  email: string;
  eventName: string;
  inviteId: string;
  userId: string;
  type: InviteType;

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    userId: string,
    email: string,
    type: InviteType,
  ) {
    this.eventName = InviteForAlbumCreatedEvent.name;
    this.authorId = authorId;
    this.inviteId = id;
    this.albumId = albumId;
    this.userId = userId;
    this.email = email;
    this.type = type;
  }
}

export class AcceptInviteForAlbumEvent implements InviteForAlbumAccepted {
  authorId: string;
  eventName: string;
  inviteId: string;

  constructor(id: string, authorId: string) {
    this.eventName = AcceptInviteForAlbumEvent.name;
    this.authorId = authorId;
    this.inviteId = id;
  }
}
