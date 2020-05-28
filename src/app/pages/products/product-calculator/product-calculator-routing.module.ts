import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCalculatorPage } from './product-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCalculatorPageRoutingModule {}
