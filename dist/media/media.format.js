"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaFormat = void 0;
class MediaFormat {
    constructor(_s3Id, _sizeType, _storage, _resolution) {
        this._s3Id = _s3Id;
        this._sizeType = _sizeType;
        this._storage = _storage;
        this._resolution = _resolution;
    }
    get s3Id() {
        return this._s3Id;
    }
    get sizeType() {
        return this._sizeType;
    }
    get storage() {
        return this._storage;
    }
    get resolution() {
        return this._resolution;
    }
}
exports.MediaFormat = MediaFormat;
