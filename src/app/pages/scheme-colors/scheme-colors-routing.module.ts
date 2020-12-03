import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchemeColorsPage } from './scheme-colors.page';

const routes: Routes = [
  {
    path: '',
    component: SchemeColorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchemeColorsPageRoutingModule {}
