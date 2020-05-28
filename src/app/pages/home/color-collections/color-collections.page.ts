import { ColorCollectionModel } from './../../../core/interfaces/color-colleciton.interface';
import { ProductColor } from './../../../core/interfaces/product/product-color.interface';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-collections',
  templateUrl: './color-collections.page.html',
  styleUrls: ['./color-collections.page.scss'],
})
export class ColorCollectionsPage implements OnInit {

  constructor(
    public productService: ProductService
  ) { 
  }

  ngOnInit() {
  }

  selectColorCollection(colorCollection: ColorCollectionModel){
    this.productService.selectedColorCollection.active = !this.productService.selectedColorCollection.active;
    colorCollection.active = !colorCollection.active;
    this.productService.selectedColorCollection = colorCollection;
  }

}
