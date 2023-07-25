"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestRoleChangedEvent = exports.GuestRemovedEvent = exports.GuestAddedEvent = void 0;
class GuestAddedEvent {
    constructor(id, authorId, email, phone, baseAddress, publicKey, albumId, locale) {
        this.eventName = GuestAddedEvent.name;
        this.guestId = id;
        this.authorId = authorId;
        this.email = email;
        this.baseAddress = baseAddress;
        this.publicKey = publicKey;
        this.phone = phone;
        this.albumId = albumId;
        this.locale = locale;
    }
}
exports.GuestAddedEvent = GuestAddedEvent;
class GuestRemovedEvent {
    constructor(id, authorId, email, phone, baseAddress, publicKey, albumId) {
        this.eventName = GuestRemovedEvent.name;
        this.guestId = id;
        this.authorId = authorId;
        this.email = email;
        this.albumId = albumId;
    }
}
exports.GuestRemovedEvent = GuestRemovedEvent;
class GuestRoleChangedEvent {
    constructor(id, authorId, role) {
        this.eventName = GuestRoleChangedEvent.name;
        this.guestId = id;
        this.authorId = authorId;
        this.role = role;
    }
}
exports.GuestRoleChangedEvent = GuestRoleChangedEvent;
