import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Painting101Page } from './painting101.page';

const routes: Routes = [
  {
    path: '',
    component: Painting101Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Painting101PageRoutingModule {}
