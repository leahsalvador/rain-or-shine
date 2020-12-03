import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchProductCatalogPage } from './search-product-catalog.page';

const routes: Routes = [
  {
    path: '',
    component: SearchProductCatalogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchProductCatalogPageRoutingModule {}
