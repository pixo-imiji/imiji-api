"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleChangedEvent = exports.GuestRemovedEvent = exports.GuestAddedEvent = void 0;
class GuestAddedEvent {
    constructor(id, authorId, email, albumId) {
        this.eventName = GuestAddedEvent.name;
        this.guestId = id;
        this.authorId = authorId;
        this.email = email;
        this.albumId = albumId;
    }
}
exports.GuestAddedEvent = GuestAddedEvent;
class GuestRemovedEvent {
    constructor(id, authorId, email, albumId) {
        this.eventName = GuestRemovedEvent.name;
        this.guestId = id;
        this.authorId = authorId;
        this.email = email;
        this.albumId = albumId;
    }
}
exports.GuestRemovedEvent = GuestRemovedEvent;
class RoleChangedEvent {
    constructor(id, authorId, albumId, role) {
        this.eventName = RoleChangedEvent.name;
        this.guestId = id;
        this.authorId = authorId;
        this.albumId = albumId;
        this.role = role;
    }
}
exports.RoleChangedEvent = RoleChangedEvent;
