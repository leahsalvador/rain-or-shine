import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Painting101PageRoutingModule } from './painting101-routing.module';

import { Painting101Page } from './painting101.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Painting101PageRoutingModule
  ],
  declarations: [Painting101Page]
})
export class Painting101PageModule {}
