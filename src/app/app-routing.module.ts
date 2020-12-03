import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'product-catalog',
    loadChildren: () => import('./pages/home/product-catalog/product-catalog.module').then( m => m.ProductCatalogPageModule)
  },
  {
    path: 'color-collections',
    loadChildren: () => import('./pages/home/color-collections/color-collections.module').then( m => m.ColorCollectionsPageModule)
  },
  {
    path: 'choose-paint',
    loadChildren: () => import('./pages/home/choose-paint/choose-paint.module').then( m => m.ChoosePaintPageModule)
  },
  {
    path: 'designer-scheme',
    loadChildren: () => import('./pages/home/designer-scheme/designer-scheme.module').then( m => m.DesignerSchemePageModule)
  },
  {
    path: 'specs-writer-guide',
    loadChildren: () => import('./pages/home/specs-writer-guide/specs-writer-guide.module').then( m => m.SpecsWriterGuidePageModule)
  },
  {
    path: 'paint-calculator',
    loadChildren: () => import('./pages/home/paint-calculator/paint-calculator.module').then( m => m.PaintCalculatorPageModule)
  },
  {
    path: 'color-capture',
    loadChildren: () => import('./pages/home/color-capture/color-capture.module').then( m => m.ColorCapturePageModule)
  },
  {
    path: 'professional-painting-service',
    loadChildren: () => import('./pages/contact-us/professional-painting-service/professional-painting-service.module').then( m => m.ProfessionalPaintingServicePageModule)
  },
  {
    path: 'general-inquiry',
    loadChildren: () => import('./pages/contact-us/general-inquiry/general-inquiry.module').then( m => m.GeneralInquiryPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/contact-us/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'disclaimer',
    loadChildren: () => import('./pages/contact-us/disclaimer/disclaimer.module').then( m => m.DisclaimerPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/contact-us/policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./pages/products/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-color',
    loadChildren: () => import('./pages/products/product-color/product-color.module').then( m => m.ProductColorPageModule)
  },
  {
    path: 'color-capture-viewer',
    loadChildren: () => import('./pages/color-capture/color-capture-viewer/color-capture-viewer.module').then( m => m.ColorCaptureViewerPageModule)
  },
  {
    path: 'product-calculator',
    loadChildren: () => import('./pages/products/product-calculator/product-calculator.module').then( m => m.ProductCalculatorPageModule)
  },
  {
    path: 'specs-product',
    loadChildren: () => import('./pages/specs/specs-product/specs-product.module').then( m => m.SpecsProductPageModule)
  },
  {
    path: 'gameplay',
    loadChildren: () => import('./pages/game/gameplay/gameplay.module').then( m => m.GameplayPageModule)
  },
  {
    path: 'color-shop',
    loadChildren: () => import('./pages/game/color-shop/color-shop.module').then( m => m.ColorShopPageModule)
  },
  {
    path: 'painting-tips',
    loadChildren: () => import('./pages/contact-us/painting-tips/painting-tips.module').then( m => m.PaintingTipsPageModule)
  },
  {
    path: 'color-effect',
    loadChildren: () => import('./pages/color-effect/color-effect.module').then( m => m.ColorEffectPageModule)
  },
  {
    path: 'general-direction',
    loadChildren: () => import('./pages/general-direction/general-direction.module').then( m => m.GeneralDirectionPageModule)
  },
  {
    path: 'paint-requirements',
    loadChildren: () => import('./pages/paint-requirements/paint-requirements.module').then( m => m.PaintRequirementsPageModule)
  },
  {
    path: 'painting-work',
    loadChildren: () => import('./pages/painting-work/painting-work.module').then( m => m.PaintingWorkPageModule)
  },
  {
    path: 'store-list',
    loadChildren: () => import('./pages/store-list/store-list.module').then( m => m.StoreListPageModule)
  },
  {
    path: 'search-product-catalog',
    loadChildren: () => import('./pages/search-product-catalog/search-product-catalog.module').then( m => m.SearchProductCatalogPageModule)
  },
  {
    path: 'scheme-colors',
    loadChildren: () => import('./pages/scheme-colors/scheme-colors.module').then( m => m.SchemeColorsPageModule)
  },
  {
    path: 'scheme-editor',
    loadChildren: () => import('./pages/scheme-editor/scheme-editor.module').then( m => m.SchemeEditorPageModule)
  },
  {
    path: 'color-view-modal',
    loadChildren: () => import('./color-view-modal/color-view-modal.module').then( m => m.ColorViewModalPageModule)
  },
  {
    path: 'painting101',
    loadChildren: () => import('./painting101/painting101.module').then( m => m.Painting101PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
