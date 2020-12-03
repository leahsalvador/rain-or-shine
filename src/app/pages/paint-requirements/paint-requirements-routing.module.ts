import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaintRequirementsPage } from './paint-requirements.page';

const routes: Routes = [
  {
    path: '',
    component: PaintRequirementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaintRequirementsPageRoutingModule {}
