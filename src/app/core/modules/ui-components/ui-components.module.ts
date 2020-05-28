import { IonicModule } from '@ionic/angular';
import { FaqContentComponent } from './../component/faq/faq-content/faq-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FaqContentComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FaqContentComponent]
})
export class UIComponentsModule { }
