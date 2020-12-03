import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorEffectPageRoutingModule } from './color-effect-routing.module';

import { ColorEffectPage } from './color-effect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorEffectPageRoutingModule
  ],
  declarations: [ColorEffectPage]
})
export class ColorEffectPageModule {}
