export interface CreateChapter {
  name: string;
  isPrivate: boolean;
}

export interface UpdateChapter extends CreateChapter {}

export interface RemoveChapter {
  id: string;
}
