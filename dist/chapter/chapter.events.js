"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChapterRemovedEvent = exports.ChapterUpdatedEvent = exports.ChapterCreatedEvent = void 0;
class ChapterCreatedEvent {
    constructor(id, authorId, albumId, name, isPrivate) {
        this.authorId = authorId;
        this.eventName = ChapterCreatedEvent.name;
        this.chapterId = id;
        this.albumId = albumId;
        this.name = name;
        this.isPrivate = isPrivate;
    }
}
exports.ChapterCreatedEvent = ChapterCreatedEvent;
class ChapterUpdatedEvent extends ChapterCreatedEvent {
}
exports.ChapterUpdatedEvent = ChapterUpdatedEvent;
class ChapterRemovedEvent {
    constructor(id, authorId) {
        this.authorId = authorId;
        this.eventName = ChapterRemovedEvent.name;
        this.chapterId = id;
    }
}
exports.ChapterRemovedEvent = ChapterRemovedEvent;
