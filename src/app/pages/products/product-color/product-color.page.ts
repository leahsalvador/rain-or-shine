import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-color',
  templateUrl: './product-color.page.html',
  styleUrls: ['./product-color.page.scss'],
})
export class ProductColorPage implements OnInit {

  constructor(
    public productService: ProductService) { 
      console.log('Product Color Page Constructor');
  }

  ngOnInit() {
  }

}
