import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorCapturePageRoutingModule } from './color-capture-routing.module';

import { ColorCapturePage } from './color-capture.page';
import { Camera } from '@ionic-native/camera/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorCapturePageRoutingModule,
  ],
  providers: [Camera, Dialogs],
  declarations: [ColorCapturePage]
})
export class ColorCapturePageModule {}
