import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchProductCatalogPageRoutingModule } from './search-product-catalog-routing.module';

import { SearchProductCatalogPage } from './search-product-catalog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchProductCatalogPageRoutingModule
  ],
  declarations: [SearchProductCatalogPage]
})
export class SearchProductCatalogPageModule {}
