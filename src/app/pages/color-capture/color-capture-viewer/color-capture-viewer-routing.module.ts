import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorCaptureViewerPage } from './color-capture-viewer.page';

const routes: Routes = [
  {
    path: '',
    component: ColorCaptureViewerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorCaptureViewerPageRoutingModule {}
