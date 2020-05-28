import { ProductService } from './../../../core/services/product.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paint-calculator',
  templateUrl: './paint-calculator.page.html',
  styleUrls: ['./paint-calculator.page.scss'],
})
export class PaintCalculatorPage implements OnInit {

  constructor(
    public productService: ProductService,
    private navCtrl: NavController) { 
      console.log('Paint Calculator Page Constructor');
      // Set Default
  }

  ngOnInit() {
  }

  viewProductDetail(product){
    this.productService.selectedProduct = product;
    this.navCtrl.navigateForward('product-detail');
  }
}
