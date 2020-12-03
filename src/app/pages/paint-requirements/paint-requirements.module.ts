import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaintRequirementsPageRoutingModule } from './paint-requirements-routing.module';

import { PaintRequirementsPage } from './paint-requirements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaintRequirementsPageRoutingModule
  ],
  declarations: [PaintRequirementsPage]
})
export class PaintRequirementsPageModule {}
