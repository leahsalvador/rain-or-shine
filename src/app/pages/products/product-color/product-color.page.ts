import { ColorViewModalPage } from './../../../color-view-modal/color-view-modal.page';
import { ModalController } from '@ionic/angular';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-color',
  templateUrl: './product-color.page.html',
  styleUrls: ['./product-color.page.scss'],
})
export class ProductColorPage implements OnInit {

  constructor(
    public productService: ProductService,
    public modalController: ModalController
    ) { 
      console.log('Product Color Page Constructor');
  }

  ngOnInit() {
  }

  async viewColor(color) {
    const modal = await this.modalController.create({
      component: ColorViewModalPage,
      cssClass: 'view-color-modal-class',
      backdropDismiss: false,
      animated: false,
      componentProps: {
        color
      }
    });
    await modal.present();
  }
}
