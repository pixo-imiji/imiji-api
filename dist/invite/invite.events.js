"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteForAlbumRejectedEvent = exports.InviteForAlbumAcceptedEvent = exports.InviteLinkForAlbumCreatedEvent = exports.InviteForGuestAlbumCreatedEvent = void 0;
class InviteForGuestAlbumCreatedEvent {
    constructor(id, authorId, albumId, guestId, endDate) {
        this.eventName = InviteForGuestAlbumCreatedEvent.name;
        this.authorId = authorId;
        this.inviteId = id;
        this.albumId = albumId;
        this.guestId = guestId;
        this.endDate = endDate;
    }
}
exports.InviteForGuestAlbumCreatedEvent = InviteForGuestAlbumCreatedEvent;
class InviteLinkForAlbumCreatedEvent {
    constructor(id, authorId, albumId, endDate) {
        this.inviteId = id;
        this.authorId = authorId;
        this.albumId = albumId;
        this.endDate = endDate;
        this.eventName = InviteLinkForAlbumCreatedEvent.name;
    }
}
exports.InviteLinkForAlbumCreatedEvent = InviteLinkForAlbumCreatedEvent;
class InviteForAlbumAcceptedEvent {
    constructor(id, authorId) {
        this.eventName = InviteForAlbumAcceptedEvent.name;
        this.authorId = authorId;
        this.userId = authorId;
        this.inviteId = id;
    }
}
exports.InviteForAlbumAcceptedEvent = InviteForAlbumAcceptedEvent;
class InviteForAlbumRejectedEvent {
    constructor(id, authorId) {
        this.eventName = InviteForAlbumRejectedEvent.name;
        this.authorId = authorId;
        this.userId = authorId;
        this.inviteId = id;
    }
}
exports.InviteForAlbumRejectedEvent = InviteForAlbumRejectedEvent;
