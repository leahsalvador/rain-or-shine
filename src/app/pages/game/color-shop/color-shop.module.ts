import { Dialogs } from '@ionic-native/dialogs/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorShopPageRoutingModule } from './color-shop-routing.module';

import { ColorShopPage } from './color-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorShopPageRoutingModule
  ],
  providers: [Dialogs],
  declarations: [ColorShopPage]
})
export class ColorShopPageModule {}
