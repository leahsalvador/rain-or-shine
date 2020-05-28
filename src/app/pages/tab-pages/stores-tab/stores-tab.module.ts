import { UIComponentsModule } from './../../../core/modules/ui-components/ui-components.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoresTabPageRoutingModule } from './stores-tab-routing.module';

import { StoresTabPage } from './stores-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoresTabPageRoutingModule,
    UIComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [StoresTabPage]
})
export class StoresTabPageModule {}
