import { IEvent } from '../event';

export interface GuestInvitedCreated extends IEvent {
  readonly inviteId: string;
  readonly guestId: string;
  readonly albumId: string;
  readonly endDate: number;
}

export interface LinkInviteCreated extends IEvent {
  readonly inviteId: string;
  readonly albumId: string;
  readonly endDate: number;
}

export interface InviteForAlbumAccepted extends IEvent {
  readonly inviteId: string;
  readonly userId: string;
}

export interface InviteForAlbumReject extends IEvent {
  readonly inviteId: string;
  readonly userId: string;
}

export class InviteForGuestAlbumCreatedEvent implements GuestInvitedCreated {
  readonly albumId: string;
  readonly authorId: string;
  readonly endDate: number;
  readonly eventName: string;
  readonly guestId: string;
  readonly inviteId: string;

  constructor(
    id: string,
    authorId: string,
    albumId: string,
    guestId: string,
    endDate: number,
  ) {
    this.eventName = InviteForGuestAlbumCreatedEvent.name;
    this.authorId = authorId;
    this.inviteId = id;
    this.albumId = albumId;
    this.guestId = guestId;
    this.endDate = endDate;
  }
}

export class InviteLinkForAlbumCreatedEvent implements LinkInviteCreated {
  readonly albumId: string;
  readonly authorId: string;
  readonly endDate: number;
  readonly eventName: string;
  readonly inviteId: string;

  constructor(id: string, authorId: string, albumId: string, endDate: number) {
    this.inviteId = id;
    this.authorId = authorId;
    this.albumId = albumId;
    this.endDate = endDate;
    this.eventName = InviteLinkForAlbumCreatedEvent.name;
  }
}

export class InviteForAlbumAcceptedEvent implements InviteForAlbumAccepted {
  readonly authorId: string;
  readonly eventName: string;
  readonly inviteId: string;
  readonly userId: string;

  constructor(id: string, authorId: string) {
    this.eventName = InviteForAlbumAcceptedEvent.name;
    this.authorId = authorId;
    this.userId = authorId;
    this.inviteId = id;
  }
}

export class InviteForAlbumRejectedEvent implements InviteForAlbumReject {
  readonly authorId: string;
  readonly eventName: string;
  readonly inviteId: string;
  readonly userId: string;

  constructor(id: string, authorId: string) {
    this.eventName = InviteForAlbumRejectedEvent.name;
    this.authorId = authorId;
    this.userId = authorId;
    this.inviteId = id;
  }
}
