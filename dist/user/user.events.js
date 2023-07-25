"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPasswordUpdatedEvent = exports.UserForgotPasswordEvent = exports.UserValidatedEvent = exports.UserUpdatedEvent = exports.UserRegisteredEvent = exports.UserRefreshedTokenEvent = exports.UserLoggedInEvent = void 0;
class UserLoggedInEvent {
    constructor(authorId) {
        this.authorId = authorId;
        this.eventName = UserLoggedInEvent.name;
    }
}
exports.UserLoggedInEvent = UserLoggedInEvent;
class UserRefreshedTokenEvent {
    constructor(authorId) {
        this.authorId = authorId;
        this.eventName = UserLoggedInEvent.name;
    }
}
exports.UserRefreshedTokenEvent = UserRefreshedTokenEvent;
class UserRegisteredEvent {
    constructor(id, email, locale, validateId, role) {
        this.eventName = UserRegisteredEvent.name;
        this.authorId = id;
        this.userId = id;
        this.email = email;
        this.locale = locale;
        this.role = role;
        this.validateId = validateId;
    }
}
exports.UserRegisteredEvent = UserRegisteredEvent;
class UserUpdatedEvent {
    constructor(authorId, locale, role) {
        this.eventName = UserUpdatedEvent.name;
        this.authorId = authorId;
        this.locale = locale;
        this.role = role;
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
class UserForgotPasswordEvent {
    constructor(authorId, email, resetPasswordId) {
        this.authorId = authorId;
        this.email = email;
        this.resetPasswordId = resetPasswordId;
        this.eventName = UserForgotPasswordEvent.name;
    }
}
exports.UserForgotPasswordEvent = UserForgotPasswordEvent;
class UserPasswordUpdatedEvent {
}
exports.UserPasswordUpdatedEvent = UserPasswordUpdatedEvent;
