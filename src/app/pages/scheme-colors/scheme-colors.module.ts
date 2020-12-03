import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchemeColorsPageRoutingModule } from './scheme-colors-routing.module';

import { SchemeColorsPage } from './scheme-colors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchemeColorsPageRoutingModule
  ],
  declarations: [SchemeColorsPage]
})
export class SchemeColorsPageModule {}
