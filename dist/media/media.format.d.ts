import { MediaResizeType } from './media.resize.type';
import { MediaStorage } from './media.storage';
import { MediaResolution } from './media.resolution';
export declare class MediaFormat {
    private readonly _s3Id;
    private readonly _sizeType;
    private readonly _storage;
    private readonly _resolution;
    constructor(_s3Id: string, _sizeType: MediaResizeType, _storage: MediaStorage, _resolution: MediaResolution);
    get s3Id(): string;
    get sizeType(): MediaResizeType;
    get storage(): MediaStorage;
    get resolution(): MediaResolution;
}
