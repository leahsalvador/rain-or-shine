import { ProductCategoryModel } from './../../../core/interfaces/product/product-category.interface';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.page.html',
  styleUrls: ['./product-catalog.page.scss'],
})
export class ProductCatalogPage implements OnInit {

  searchText = '';
  constructor(
    public productService: ProductService,
    private navCtrl: NavController) { 
      console.log('Product Catalog Page Constructor');
      // Set Default
      this.productService.selectedProductCategory.active = false;
      this.productService.selectedProductCategory = this.productService.products[0];
      this.productService.selectedProductCategory.active = true;
  }

  ngOnInit() {
  }

  selectProdctCategory(category){
    this.productService.selectedProductCategory.active = !this.productService.selectedProductCategory.active;
    category.active = !category.active;
    this.productService.selectedProductCategory = category;
  }

  viewProductDetail(product){
    this.productService.selectedProduct = product;
    this.navCtrl.navigateForward('product-detail');
  }
}
