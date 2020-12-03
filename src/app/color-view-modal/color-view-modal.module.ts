import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorViewModalPageRoutingModule } from './color-view-modal-routing.module';

import { ColorViewModalPage } from './color-view-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorViewModalPageRoutingModule
  ],
  declarations: [ColorViewModalPage]
})
export class ColorViewModalPageModule {}
