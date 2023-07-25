"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageBoughtEvent = exports.BuyRequestCreatedEvent = exports.PackageUpdatedEvent = exports.PackageCreatedEvent = void 0;
class PackageCreatedEvent {
    constructor(id, authorId, name, mediaLimit, mediaSize, price, years) {
        this.eventName = PackageCreatedEvent.name;
        this.authorId = authorId;
        this.packageId = id;
        this.name = name;
        this.mediaLimit = mediaLimit;
        this.mediaSize = mediaSize;
        this.price = price;
        this.years = years;
    }
}
exports.PackageCreatedEvent = PackageCreatedEvent;
class PackageUpdatedEvent {
    constructor(id, authorId, name, mediaLimit, mediaSize, price, years) {
        this.eventName = PackageUpdatedEvent.name;
        this.authorId = authorId;
        this.packageId = id;
        this.name = name;
        this.mediaLimit = mediaLimit;
        this.mediaSize = mediaSize;
        this.price = price;
        this.years = years;
    }
}
exports.PackageUpdatedEvent = PackageUpdatedEvent;
class BuyRequestCreatedEvent {
    constructor(id, authorId, orderId, price, mediaLimit, mediaSize, method, refId) {
        this.eventName = BuyRequestCreatedEvent.name;
        this.authorId = authorId;
        this.packageId = id;
        this.orderId = orderId;
        this.price = price;
        this.mediaLimit = mediaLimit;
        this.mediaSize = mediaSize;
        this.paymentMethod = method;
        this.paymentRef = refId;
    }
}
exports.BuyRequestCreatedEvent = BuyRequestCreatedEvent;
class PackageBoughtEvent {
    constructor(id, endDate) {
        this.orderId = id;
        this.endDate = endDate;
        this.authorId = 'payment-gateway-system';
        this.eventName = PackageBoughtEvent.name;
    }
}
exports.PackageBoughtEvent = PackageBoughtEvent;
