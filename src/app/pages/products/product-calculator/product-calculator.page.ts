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
    const l1 = this.productService.selectedProduct.parentOption.length;
    for (let x = 0; x < l1; x++) {
      const l2 = this.productService.selectedProduct.parentOption[x].options.length;
      for (let y = 0; y < l2; y++) {
        const l3 = this.productService.selectedProduct.parentOption[x].options[y].options.length;
        for (let z = 0; z < l3; z++) {
          this.productService.selectedProduct.parentOption[x].options[y].options[z].quantity = 0;
        }
      }
    }
  }

  calculate(event: any) {
    if (event.target.value) {
      const input = parseFloat(event.target.value);
      const l1 = this.productService.selectedProduct.parentOption.length;
      for (let x = 0; x < l1; x++) {
        const l2 = this.productService.selectedProduct.parentOption[x].options.length;
        for (let y = 0; y < l2; y++) {
          const l3 = this.productService.selectedProduct.parentOption[x].options[y].options.length;
          for (let z = 0; z < l3; z++) {
            const divisor = this.productService.selectedProduct.parentOption[x].options[y].options[z].divisor;
            const multiplier = this.productService.selectedProduct.parentOption[x].options[y].options[z].multiplier;
            this.productService.selectedProduct.parentOption[x].options[y].options[z].quantity = ((input / divisor) * multiplier).toFixed(2).replace(/[.,]00$/, '');
          }
        }
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
