import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorViewModalPage } from './color-view-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ColorViewModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorViewModalPageRoutingModule {}
