import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralDirectionPage } from './general-direction.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralDirectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralDirectionPageRoutingModule {}
