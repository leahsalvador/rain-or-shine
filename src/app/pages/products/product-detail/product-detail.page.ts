import { NavController } from '@ionic/angular';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  constructor(
    public productService: ProductService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  viewProductColors(){
    this.navCtrl.navigateForward('product-color');
  }

  viewPaintCalculator(){
    this.navCtrl.navigateForward('product-calculator');
  }
  
  viewProductDetail(product: any){
    console.log(product);
    if(product.type == 'original'){
      this.productService.selectedProduct = this.productService.allOriginal[product.index];
    }else if(product.type == 'paint-and-seal'){
      this.productService.selectedProduct = this.productService.allPaintAndSeal[product.index];
    }
  }

}
