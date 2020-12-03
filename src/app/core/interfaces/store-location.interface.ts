import { StoreBranchModel } from './store-branches.interface';

export interface StoreLocationModel{
    title: string;
    src: string;
    branches: StoreBranchModel [];
}