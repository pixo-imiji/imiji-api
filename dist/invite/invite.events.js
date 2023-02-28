"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptInviteForAlbumEvent = exports.InviteForAlbumCreatedEvent = void 0;
class InviteForAlbumCreatedEvent {
    constructor(id, authorId, albumId, userId, email) {
        this.eventName = InviteForAlbumCreatedEvent.name;
        this.authorId = authorId;
        this.inviteId = id;
        this.albumId = albumId;
        this.userId = userId;
        this.email = email;
    }
}
exports.InviteForAlbumCreatedEvent = InviteForAlbumCreatedEvent;
class AcceptInviteForAlbumEvent {
    constructor(id, authorId) {
        this.eventName = AcceptInviteForAlbumEvent.name;
        this.authorId = authorId;
        this.inviteId = id;
    }
}
exports.AcceptInviteForAlbumEvent = AcceptInviteForAlbumEvent;
