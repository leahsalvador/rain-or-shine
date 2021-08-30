import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-calculator',
  templateUrl: './product-calculator.page.html',
  styleUrls: ['./product-calculator.page.scss'],
})
export class ProductCalculatorPage implements OnInit {
  
  keyboardStyle = { width: '100%', height: '0px' };

  m2 = 0;
  ft2 = 0;
  constructor(
    public productService: ProductService,
    private keyboard: Keyboard
  ) { 
    
    this.m2 = 0;
    this.ft2 = 0;
    this.keyboard.onKeyboardWillShow().subscribe( {
      next: x => {
        this.keyboardStyle.height = x.keyboardHeight + 'px';
        
      },
      error: e => {
        console.log(e);
      }
    });
    this.keyboard.onKeyboardWillHide().subscribe( {
      next: x => {
        this.keyboardStyle.height = '0px';
      },
      error: e => {
        console.log(e);
      }
    });
  }

  ngOnInit() {
    this.productService.paintCalculatorProduct = 0;
  }

  calculate(event: any){
    if(event.target.value){
      const input = parseFloat(event.target.value);
      if(input >= this.productService.selectedProduct.min && input <=this.productService.selectedProduct.max){
        this.productService.paintCalculatorProduct = this.productService.selectedProduct.perLiter;
      }else{
        this.productService.paintCalculatorProduct = (input / this.productService.selectedProduct.min) * this.productService.selectedProduct.perLiter;
        this.productService.paintCalculatorProduct = Math.floor(this.productService.paintCalculatorProduct);
      }
    }
  }
  
  focusInput (event): void {
    let total = 0;
    let container = null;

    const _rec = (obj) => {

        total += obj.offsetTop;
        const par = obj.offsetParent;
        if (par && par.localName !== 'ion-content') {
            _rec(par);
        } else {
            container = par;
        }
    };
    _rec(event.target);
    setTimeout(() => {
      container.scrollToPoint(0, total - 50, 400);
    }, 500);
  }

  convertToFt2(){
    this.ft2 = parseFloat((this.m2 * 10.764).toFixed(2));
  }
  convertToM2(){
    this.m2 = parseFloat((this.ft2 / 10.764).toFixed(2));
  }
}
