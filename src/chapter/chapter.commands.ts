export interface CreateChapter {
  albumId: string;
  name: string;
  isPrivate: boolean;
}

export interface UpdateChapter extends CreateChapter {
  id: string;
}

export interface RemoveChapter {
  id: string;
}
