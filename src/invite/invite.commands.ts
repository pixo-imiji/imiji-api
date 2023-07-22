export interface CreateLinkInviteForAlbum {
  albumId: string;
}

export interface CreateGuestInviteForAlbum {
  albumId: string;
  guestId: string;
}

export interface AcceptInviteForAlbum {
  inviteId: string;
}

export interface RejectInviteForAlbum {
  inviteId: string;
}
