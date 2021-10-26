import { ProductOptionSubModel } from './product-option-sub.interface';

export interface ProductOptionsModel {
    title: string;
    options ?: ProductOptionSubModel[];
}
