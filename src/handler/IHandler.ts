import { IEvent } from '../event';

export interface IHandler {
  on: (event: IEvent) => Promise<any>;
}
