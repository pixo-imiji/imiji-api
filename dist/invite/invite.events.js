"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptInviteForAlbumEvent = exports.InviteForAlbumCreatedEvent = void 0;
class InviteForAlbumCreatedEvent {
    constructor(id, authorId, albumId, guestId, email, type) {
        this.eventName = InviteForAlbumCreatedEvent.name;
        this.authorId = authorId;
        this.inviteId = id;
        this.albumId = albumId;
        this.guestId = guestId;
        this.email = email;
        this.type = type;
    }
}
exports.InviteForAlbumCreatedEvent = InviteForAlbumCreatedEvent;
class AcceptInviteForAlbumEvent {
    constructor(id, authorId, guestId) {
        this.eventName = AcceptInviteForAlbumEvent.name;
        this.authorId = authorId;
        this.guestId = guestId;
        this.inviteId = id;
    }
}
exports.AcceptInviteForAlbumEvent = AcceptInviteForAlbumEvent;
