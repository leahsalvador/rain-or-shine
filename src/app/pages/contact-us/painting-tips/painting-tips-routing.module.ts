import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaintingTipsPage } from './painting-tips.page';

const routes: Routes = [
  {
    path: '',
    component: PaintingTipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaintingTipsPageRoutingModule {}
