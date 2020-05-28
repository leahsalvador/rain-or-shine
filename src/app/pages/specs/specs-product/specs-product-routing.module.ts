import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecsProductPage } from './specs-product.page';

const routes: Routes = [
  {
    path: '',
    component: SpecsProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecsProductPageRoutingModule {}
