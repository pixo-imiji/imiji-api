"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaDidActionEvent = exports.MediaAvatarResizedEvent = exports.MediaAlbumResizedEvent = exports.MediaRemovedEvent = exports.MediaUploadedEvent = void 0;
const media_format_1 = require("./media.format");
class MediaUploadedEvent {
    constructor(id, authorId, albumId, chapterId, fileName, type, format) {
        this.eventName = MediaUploadedEvent.name;
        this.authorId = authorId;
        this.mediaId = id;
        this.albumId = albumId;
        this.chapterId = chapterId;
        this.fileName = fileName;
        this.type = type;
        this.format = new media_format_1.MediaFormat(format.s3Id, format.sizeType, format.storage, format.resolution);
    }
}
exports.MediaUploadedEvent = MediaUploadedEvent;
class MediaRemovedEvent {
    constructor(id, authorId, albumId, chapterId, fileName, type, formats) {
        this.eventName = MediaRemovedEvent.name;
        this.authorId = authorId;
        this.mediaId = id;
        this.albumId = albumId;
        this.chapterId = chapterId;
        this.fileName = fileName;
        this.type = type;
        this.formats = formats;
    }
}
exports.MediaRemovedEvent = MediaRemovedEvent;
class MediaAlbumResizedEvent {
    constructor(id, authorId, albumId, fileName, format) {
        this.mediaId = id;
        this.authorId = authorId;
        this.eventName = MediaAlbumResizedEvent.name;
        this.albumId = albumId;
        this.fileName = fileName;
        this.format = new media_format_1.MediaFormat(format.s3Id, format.sizeType, format.storage, format.resolution);
    }
}
exports.MediaAlbumResizedEvent = MediaAlbumResizedEvent;
class MediaAvatarResizedEvent {
    constructor(id, authorId, format) {
        this.id = id;
        this.authorId = authorId;
        this.format = new media_format_1.MediaFormat(format.s3Id, format.sizeType, format.storage, format.resolution);
        this.eventName = MediaAvatarResizedEvent.name;
    }
}
exports.MediaAvatarResizedEvent = MediaAvatarResizedEvent;
class MediaDidActionEvent {
    constructor(id, authorId, albumId, action) {
        this.mediaId = id;
        this.authorId = authorId;
        this.albumId = albumId;
        this.eventName = MediaDidActionEvent.name;
        this.action = action;
    }
}
exports.MediaDidActionEvent = MediaDidActionEvent;
