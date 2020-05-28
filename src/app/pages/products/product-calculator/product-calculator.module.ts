import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCalculatorPageRoutingModule } from './product-calculator-routing.module';

import { ProductCalculatorPage } from './product-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductCalculatorPageRoutingModule
  ],
  providers: [Keyboard],
  declarations: [ProductCalculatorPage]
})
export class ProductCalculatorPageModule {}
