import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaintingWorkPageRoutingModule } from './painting-work-routing.module';

import { PaintingWorkPage } from './painting-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaintingWorkPageRoutingModule
  ],
  declarations: [PaintingWorkPage]
})
export class PaintingWorkPageModule {}
