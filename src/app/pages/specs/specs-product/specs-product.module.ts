import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecsProductPageRoutingModule } from './specs-product-routing.module';

import { SpecsProductPage } from './specs-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecsProductPageRoutingModule
  ],
  declarations: [SpecsProductPage]
})
export class SpecsProductPageModule {}
