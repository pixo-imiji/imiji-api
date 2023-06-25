import { InviteType } from './invite.type';

export interface CreateInviteForAlbum {
  albumId: string;
  guestId: string;
  type: InviteType;
}

export interface AcceptInviteForAlbum {
  inviteId: string;
}

export interface RejectInviteForAlbum {
  inviteId: string;
}
