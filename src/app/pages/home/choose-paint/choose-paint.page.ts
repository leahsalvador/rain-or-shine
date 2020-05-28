import { NavController } from '@ionic/angular';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-paint',
  templateUrl: './choose-paint.page.html',
  styleUrls: ['./choose-paint.page.scss'],
})
export class ChoosePaintPage implements OnInit {


  constructor(
    public productService: ProductService,
    private navCtrl: NavController) { 
      console.log('Product Catalog Page Constructor');
      // Set Default
  }

  ngOnInit() {
  }
  
  viewProductDetail(product){
    this.productService.selectedProduct = product;
    this.navCtrl.navigateForward('product-detail');
  }

}
