import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorCaptureViewerPageRoutingModule } from './color-capture-viewer-routing.module';

import { ColorCaptureViewerPage } from './color-capture-viewer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorCaptureViewerPageRoutingModule
  ],
  declarations: [ColorCaptureViewerPage]
})
export class ColorCaptureViewerPageModule {}
