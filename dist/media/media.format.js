"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaFormat = void 0;
class MediaFormat {
    constructor(s3Id, sizeType, storage, resolution) {
        this.s3Id = s3Id;
        this.sizeType = sizeType;
        this.storage = storage;
        this.resolution = resolution;
    }
}
exports.MediaFormat = MediaFormat;
