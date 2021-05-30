import { ProductService } from './../core/services/product.service';
import { ModalController, Platform, NavController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-view-modal',
  templateUrl: './color-view-modal.page.html',
  styleUrls: ['./color-view-modal.page.scss'],
})
export class ColorViewModalPage implements OnInit {
  color: any;
  constructor(
    public navCtrl: NavController, public productService: ProductService) { 
      this.color = this.productService.color;
    }

  ngOnInit() {
  }

  /*ngOnDestroy(){
    this.platform.backButton.unsubscribe();
  }//*/

  closeModal(){
    /*this.platform.backButton.observers.pop();
    this.modalController.dismiss();//*/
    this.navCtrl.back();
  }

}
