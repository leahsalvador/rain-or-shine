import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactUsTabPageRoutingModule } from './contact-us-tab-routing.module';

import { ContactUsTabPage } from './contact-us-tab.page';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactUsTabPageRoutingModule
  ],
  providers: [EmailComposer],
  declarations: [ContactUsTabPage]
})
export class ContactUsTabPageModule {}
