import { ProductColor } from './product/product-color.interface';
export interface ColorCollectionModel{
    title: string;
    src: string;
    colors ?: ProductColor [];
    active: boolean;
}
