import { NavController } from '@ionic/angular';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specs-product',
  templateUrl: './specs-product.page.html',
  styleUrls: ['./specs-product.page.scss'],
})
export class SpecsProductPage implements OnInit {

  constructor(
    public productService: ProductService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  viewProductDetail(product){
    this.productService.selectedProduct = product;
    this.navCtrl.navigateForward('product-detail');
  }
}
