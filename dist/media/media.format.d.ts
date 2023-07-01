import { MediaResizeType } from './media.resize.type';
import { MediaStorage } from './media.storage';
import { MediaResolution } from './media.resolution';
export declare class MediaFormat {
    s3Id: string;
    sizeType: MediaResizeType;
    storage: MediaStorage;
    resolution: MediaResolution;
    constructor(s3Id: string, sizeType: MediaResizeType, storage: MediaStorage, resolution: MediaResolution);
}
