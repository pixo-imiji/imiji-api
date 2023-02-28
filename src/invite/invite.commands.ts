export interface CreateInviteForAlbum {
  albumId: string;
  email: string;
}

export interface AcceptInviteForAlbum {
  inviteId: string;
}

export interface RejectInviteForAlbum {
  inviteId: string;
}
