export interface ICommand {
    execute: (request: any) => Promise<any>;
}
