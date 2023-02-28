"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaRemovedEvent = exports.MediaUploadedEvent = void 0;
class MediaUploadedEvent {
    constructor(id, authorId, albumId, chapterId, type, s3Id) {
        this.eventName = MediaUploadedEvent.name;
        this.authorId = authorId;
        this.mediaId = id;
        this.albumId = albumId;
        this.chapterId = chapterId;
        this.type = type;
        this.s3Id = s3Id;
    }
}
exports.MediaUploadedEvent = MediaUploadedEvent;
class MediaRemovedEvent {
    constructor(id, authorId) {
        this.eventName = MediaRemovedEvent.name;
        this.authorId = authorId;
        this.mediaId = id;
    }
}
exports.MediaRemovedEvent = MediaRemovedEvent;
