import { GuestRole } from './guest.role';

export interface AddGuest {
  userId: string;
  albumId: string;
  email: string;
}

export interface RemoveGuest {
  userId: string;
  albumId: string;
  email: string;
}

export interface ChangeGuestRole {
  guestId: string;
  role: GuestRole;
}
