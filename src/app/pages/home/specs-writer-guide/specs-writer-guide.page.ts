import { NavController } from '@ionic/angular';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specs-writer-guide',
  templateUrl: './specs-writer-guide.page.html',
  styleUrls: ['./specs-writer-guide.page.scss'],
})
export class SpecsWriterGuidePage implements OnInit {

  constructor(
    public productService: ProductService,
    private navCtrl: NavController
  ) {
  }

  ngOnInit() {
  }

  viewProducts(product){
    this.productService.selectedSpecProduct = product;
    this.navCtrl.navigateForward('specs-product');
  }
}
