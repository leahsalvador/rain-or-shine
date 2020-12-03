import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaintingWorkPage } from './painting-work.page';

const routes: Routes = [
  {
    path: '',
    component: PaintingWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaintingWorkPageRoutingModule {}
