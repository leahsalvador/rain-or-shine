import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorShopPage } from './color-shop.page';

const routes: Routes = [
  {
    path: '',
    component: ColorShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorShopPageRoutingModule {}
