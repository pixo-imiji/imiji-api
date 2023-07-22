import { GuestRole } from './guest.role';
import { GuestTransport } from './guest.events';
export interface AddGuest extends GuestTransport {
    userId: string;
    albumId: string;
    email: string;
}
export interface RemoveGuest extends GuestTransport {
    userId: string;
    albumId: string;
    email: string;
}
export interface ChangeGuestRole {
    guestId: string;
    role: GuestRole;
}
