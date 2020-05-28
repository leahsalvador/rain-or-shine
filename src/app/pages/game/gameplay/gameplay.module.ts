import { Dialogs } from '@ionic-native/dialogs/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { GameplayPageRoutingModule } from './gameplay-routing.module';

import { GameplayPage } from './gameplay.page';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameplayPageRoutingModule
  ],
  providers: [ScreenOrientation, Dialogs, Base64ToGallery, AndroidPermissions],
  declarations: [GameplayPage]
})
export class GameplayPageModule {}
