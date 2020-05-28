import { LevelModel } from './../../../core/interfaces/level.interface';
import { HomeModule } from './../../../core/interfaces/home.interface';
import { Component, OnInit } from '@angular/core';
import { ProductCatalogPage } from '../../home/product-catalog/product-catalog.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {

  homeModule: HomeModule [];
  currentSelectedLevel: LevelModel;
  
  constructor(private router: Router) {
    this.initialize();
  }

  initialize(){
    this.homeModule = [
      {
        title: 'Product Catalog',
        titleRow1: 'Product',
        titleRow2: 'Catalog',
        icon: 'file-tray-full-outline',
        id: 'product-catalog'
      },
      {
        title: 'Choose Paint',
        titleRow1: 'Choose',
        titleRow2: 'Paint',
        icon: 'color-fill-outline',
        id: 'choose-paint'
      },
      {
        title: 'Color Collections',
        titleRow1: 'Color',
        titleRow2: 'Collections',
        icon: 'albums-outline',
        id: 'color-collections'
      },
      {
        title: 'Designer Scheme',
        titleRow1: 'Designer',
        titleRow2: 'Scheme',
        icon: 'pencil-outline',
        id: 'designer-scheme'
      },
      {
        title: 'Specs Writer Guide',
        titleRow1: 'Specs',
        titleRow2: 'Writer Guide',
        icon: 'book-outline',
        id: 'specs-writer-guide'
      },
      {
        title: 'Paint Calculator',
        titleRow1: 'Paint',
        titleRow2: 'Calculator',
        icon: 'calculator-outline',
        id: 'paint-calculator'
      },
      {
        title: 'Color Capture',
        titleRow1: 'Color',
        titleRow2: 'Capture',
        icon: 'camera-outline',
        id: 'color-capture'
      }
    ];
  }

  ngOnInit() {

  }

  open(link: string){
    this.router.navigateByUrl(link);
  }
}