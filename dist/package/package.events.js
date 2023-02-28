"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyRequestCreatedEvent = exports.PackageUpdatedEvent = exports.PackageCreatedEvent = void 0;
class PackageCreatedEvent {
    constructor(id, authorId, name, mediaLimit, price, years) {
        this.eventName = PackageCreatedEvent.name;
        this.authorId = authorId;
        this.packageId = id;
        this.name = name;
        this.mediaLimit = mediaLimit;
        this.price = price;
        this.years = years;
    }
}
exports.PackageCreatedEvent = PackageCreatedEvent;
class PackageUpdatedEvent {
    constructor(id, authorId, name, mediaLimit, price, years) {
        this.eventName = PackageUpdatedEvent.name;
        this.authorId = authorId;
        this.packageId = id;
        this.name = name;
        this.mediaLimit = mediaLimit;
        this.price = price;
        this.years = years;
    }
}
exports.PackageUpdatedEvent = PackageUpdatedEvent;
class BuyRequestCreatedEvent {
    constructor(id, authorId) {
        this.eventName = BuyRequestCreatedEvent.name;
        this.authorId = authorId;
        this.packageId = id;
    }
}
exports.BuyRequestCreatedEvent = BuyRequestCreatedEvent;
