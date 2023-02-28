export interface CreatePackage {
    name: string;
    price: number;
    mediaLimit: number;
    years: number;
}
export interface UpdatePackage {
    packageId: string;
    name: string;
    price: number;
    mediaLimit: number;
    years: number;
}
export interface CreateBuyRequest {
    packageId: string;
    email: string;
}
