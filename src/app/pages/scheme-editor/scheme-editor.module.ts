import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchemeEditorPageRoutingModule } from './scheme-editor-routing.module';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { SchemeEditorPage } from './scheme-editor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchemeEditorPageRoutingModule
  ],
  providers: [ScreenOrientation, Dialogs, Base64ToGallery, AndroidPermissions],
  declarations: [SchemeEditorPage]
})
export class SchemeEditorPageModule {}
