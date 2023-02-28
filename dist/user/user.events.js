"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidatedEvent = exports.UserUpdatedEvent = exports.UserRegisteredEvent = exports.UserLoggedInEvent = void 0;
class UserLoggedInEvent {
    constructor(authorId) {
        this.authorId = authorId;
        this.eventName = UserLoggedInEvent.name;
    }
}
exports.UserLoggedInEvent = UserLoggedInEvent;
class UserRegisteredEvent {
    constructor(id, email, validateId) {
        this.eventName = UserRegisteredEvent.name;
        this.authorId = id;
        this.userId = id;
        this.email = email;
        this.validateId = validateId;
    }
}
exports.UserRegisteredEvent = UserRegisteredEvent;
class UserUpdatedEvent {
    constructor(authorId, locale) {
        this.eventName = UserUpdatedEvent.name;
        this.authorId = authorId;
        this.locale = locale;
    }
}
exports.UserUpdatedEvent = UserUpdatedEvent;
class UserValidatedEvent {
    constructor(authorId, validateId) {
        this.eventName = UserValidatedEvent.name;
        this.authorId = authorId;
        this.validateId = validateId;
    }
}
exports.UserValidatedEvent = UserValidatedEvent;
