import { ProductModel } from './../../core/interfaces/product/product.interface';
import { ColorViewModalPage } from './../../color-view-modal/color-view-modal.page';
import { ColorCollectionModel } from './../../core/interfaces/color-colleciton.interface';
import { NavController, ModalController } from '@ionic/angular';
import { ProductService } from './../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.page.html',
  styleUrls: ['./search-page.page.scss'],
})
export class SearchPagePage implements OnInit {

  searchText = '';
  searchBy = 'product';
  total_result = 0;
  constructor(
    public productService: ProductService,
    public modalController: ModalController,
    private navCtrl: NavController) {  }

  ngOnInit() {
  }
  

  viewProductDetail(product: any){
    this.productService.selectedProduct = product;
    this.navCtrl.navigateForward('product-detail');
  }

  checkProductSearch(product: any){
    return (
      (product.title.toLowerCase().indexOf(this.searchText.toLowerCase().trim()) !== -1 ||
      product.keywords.toLowerCase().indexOf(this.searchText.toLowerCase().trim()) !== -1 ||
      product.subtitle.toLowerCase().indexOf(this.searchText.toLowerCase().trim()) !== -1)
    && this.searchText.trim().length > 2);
  }
  checkColorSearch(color: any){
      return ((
        (color.name.toLowerCase().indexOf(this.searchText.toLowerCase().trim()) !== -1 || 
        color.hex.toLowerCase().indexOf(this.searchText.toLowerCase().trim()) !== -1) 
      && this.searchText.trim().length > 2) || ( (color.code.toLowerCase().indexOf(this.searchText.toLowerCase().trim()) !== -1) && this.searchText.trim().length > 1) );
    if(this.searchBy == 'color'){
      return (
        (color.name.toLowerCase().indexOf(this.searchText.toLowerCase().trim()) !== -1 || 
        color.hex.toLowerCase().indexOf(this.searchText.toLowerCase().trim()) !== -1) 
      && this.searchText.trim().length > 2);
    }else{
      return (
        (color.code.toLowerCase().indexOf(this.searchText.toLowerCase().trim()) !== -1) && this.searchText.trim().length > 1);
    }
  }

  selectColorCollection(colorCollection: ColorCollectionModel){
    this.productService.selectedColorCollection.active = !this.productService.selectedColorCollection.active;
    colorCollection.active = !colorCollection.active;
    this.productService.selectedColorCollection = colorCollection;
  }

  async viewColor(color) {
    /*const modal = await this.modalController.create({
      component: ColorViewModalPage,
      cssClass: 'view-color-modal-class',
      backdropDismiss: false,
      animated: false,
      componentProps: {
        color
      }
    });
    await modal.present();//*/
    this.productService.color = color;
    this.navCtrl.navigateForward('color-view-modal');
  }
}
