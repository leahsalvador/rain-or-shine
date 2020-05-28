import { ProductColor } from './product-color.interface';
import { ProductContentModel } from './product-content.interface';
export interface ProductModel{
    title: string;
    subtitle ?: string;
    image: string;
    content ?: ProductContentModel [];
    color ?: ProductColor [];
    hasPaintCalculator ?: boolean;
    min ?: number;
    max ?: number;
    perLiter?: number;
    active ?: boolean;
}