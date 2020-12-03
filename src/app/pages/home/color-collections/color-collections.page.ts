import { ColorViewModalPage } from './../../../color-view-modal/color-view-modal.page';
import { ColorCollectionModel } from './../../../core/interfaces/color-colleciton.interface';
import { ProductColor } from './../../../core/interfaces/product/product-color.interface';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-color-collections',
  templateUrl: './color-collections.page.html',
  styleUrls: ['./color-collections.page.scss'],
})
export class ColorCollectionsPage implements OnInit {

  constructor(
    public productService: ProductService,
    public modalController: ModalController
  ) { 
  }

  ngOnInit() {
  }

  selectColorCollection(colorCollection: ColorCollectionModel){
    this.productService.selectedColorCollection.active = !this.productService.selectedColorCollection.active;
    colorCollection.active = !colorCollection.active;
    this.productService.selectedColorCollection = colorCollection;
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
