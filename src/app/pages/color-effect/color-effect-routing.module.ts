import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorEffectPage } from './color-effect.page';

const routes: Routes = [
  {
    path: '',
    component: ColorEffectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorEffectPageRoutingModule {}
