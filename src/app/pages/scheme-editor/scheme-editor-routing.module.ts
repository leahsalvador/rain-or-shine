import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchemeEditorPage } from './scheme-editor.page';

const routes: Routes = [
  {
    path: '',
    component: SchemeEditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchemeEditorPageRoutingModule {}
