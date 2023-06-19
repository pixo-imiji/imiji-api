"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaAvatarResizedEvent = exports.MediaAlbumResizedEvent = exports.MediaRemovedEvent = exports.MediaUploadedEvent = void 0;
class MediaUploadedEvent {
    constructor(id, authorId, albumId, chapterId, type, format) {
        this.eventName = MediaUploadedEvent.name;
        this.authorId = authorId;
        this.mediaId = id;
        this.albumId = albumId;
        this.chapterId = chapterId;
        this.type = type;
        this.format = format;
    }
}
exports.MediaUploadedEvent = MediaUploadedEvent;
class MediaRemovedEvent {
    constructor(id, authorId, albumId, chapterId, type, formats) {
        this.eventName = MediaRemovedEvent.name;
        this.authorId = authorId;
        this.mediaId = id;
        this.albumId = albumId;
        this.chapterId = chapterId;
        this.type = type;
        this.formats = formats;
    }
}
exports.MediaRemovedEvent = MediaRemovedEvent;
class MediaAlbumResizedEvent {
    constructor(id, authorId, albumId, format) {
        this.mediaId = id;
        this.authorId = authorId;
        this.eventName = MediaAlbumResizedEvent.name;
        this.albumId = albumId;
        this.format = format;
    }
}
exports.MediaAlbumResizedEvent = MediaAlbumResizedEvent;
class MediaAvatarResizedEvent {
    constructor(id, authorId, format) {
        this.id = id;
        this.authorId = authorId;
        this.format = format;
        this.eventName = MediaAvatarResizedEvent.name;
    }
}
exports.MediaAvatarResizedEvent = MediaAvatarResizedEvent;
