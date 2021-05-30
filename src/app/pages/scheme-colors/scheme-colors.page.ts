import { SchemeService } from './../../core/services/scheme.service';
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
    public scheme: SchemeService,
    private navCtrl: NavController) { 
      console.log(this.scheme.selectedData);
  }

  ngOnInit() {
  }
  
  viewProductDetail(product){
    this.productService.selectedProduct = product;
    this.navCtrl.navigateForward('scheme-editor');
  }
}
