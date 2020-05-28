import { ProductModel } from './product.interface';
import { ProductCategory } from './../../enums/product-category.enum';

export interface ProductCategoryModel{
    id: ProductCategory;
    category: string;
    active: boolean;
    products ?: ProductModel [];
}