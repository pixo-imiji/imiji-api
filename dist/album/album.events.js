"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumUpdatedEvent = exports.AlbumRemovedEvent = exports.AlbumChapterCreatedEvent = exports.AlbumCreatedEvent = void 0;
class AlbumCreatedEvent {
    constructor(id, authorId, name, type, date) {
        this.eventName = AlbumCreatedEvent.name;
        this.albumId = id;
        this.authorId = authorId;
        this.name = name;
        this.type = type;
        this.date = date;
    }
}
exports.AlbumCreatedEvent = AlbumCreatedEvent;
class AlbumChapterCreatedEvent {
    constructor(id, authorId, name, albumId, isPublic) {
        this.eventName = AlbumChapterCreatedEvent.name;
        this.authorId = authorId;
        this.chapterId = id;
        this.name = name;
        this.albumId = albumId;
        this.isPublic = isPublic;
    }
}
exports.AlbumChapterCreatedEvent = AlbumChapterCreatedEvent;
class AlbumRemovedEvent {
    constructor(id, authorId) {
        this.eventName = AlbumRemovedEvent.name;
        this.authorId = authorId;
        this.albumId = id;
    }
}
exports.AlbumRemovedEvent = AlbumRemovedEvent;
class AlbumUpdatedEvent {
    constructor(id, authorId, albumId, name, type, date) {
        this.eventName = AlbumUpdatedEvent.name;
        this.authorId = authorId;
        this.albumId = id;
        this.albumId = albumId;
        this.name = name;
        this.type = type;
        this.date = date;
    }
}
exports.AlbumUpdatedEvent = AlbumUpdatedEvent;
