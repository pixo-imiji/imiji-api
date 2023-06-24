import { MediaResizeType } from './media.resize.type';
import { MediaStorage } from './media.storage';
import { MediaResolution } from './media.resolution';

export class MediaFormat {
  constructor(
    private readonly _s3Id: string,
    private readonly _sizeType: MediaResizeType,
    private readonly _storage: MediaStorage,
    private readonly _resolution: MediaResolution,
  ) {}

  get s3Id(): string {
    return this._s3Id;
  }

  get sizeType(): MediaResizeType {
    return this._sizeType;
  }

  get storage(): MediaStorage {
    return this._storage;
  }

  get resolution(): MediaResolution {
    return this._resolution;
  }
}
