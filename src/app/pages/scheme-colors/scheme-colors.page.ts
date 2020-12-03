import { NavController } from '@ionic/angular';
import { ProductService } from './../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheme-colors',
  templateUrl: './scheme-colors.page.html',
  styleUrls: ['./scheme-colors.page.scss'],
})
export class SchemeColorsPage implements OnInit {


  constructor(
    public productService: ProductService,
    private navCtrl: NavController) { 
  }

  ngOnInit() {
  }
  
  viewProductDetail(product){
    this.productService.selectedProduct = product;
    this.navCtrl.navigateForward('scheme-editor');
  }
}
