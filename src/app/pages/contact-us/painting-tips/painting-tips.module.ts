import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaintingTipsPageRoutingModule } from './painting-tips-routing.module';

import { PaintingTipsPage } from './painting-tips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaintingTipsPageRoutingModule
  ],
  declarations: [PaintingTipsPage]
})
export class PaintingTipsPageModule {}
