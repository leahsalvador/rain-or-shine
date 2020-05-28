import { ProductModel } from './product/product.interface';
export interface SpecsModel{
    name: string;
    total: number;
    product: ProductModel [];
}