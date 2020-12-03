import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralDirectionPageRoutingModule } from './general-direction-routing.module';

import { GeneralDirectionPage } from './general-direction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralDirectionPageRoutingModule
  ],
  declarations: [GeneralDirectionPage]
})
export class GeneralDirectionPageModule {}
