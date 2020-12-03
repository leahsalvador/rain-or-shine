import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchProductCatalogPage } from './search-product-catalog.page';

describe('SearchProductCatalogPage', () => {
  let component: SearchProductCatalogPage;
  let fixture: ComponentFixture<SearchProductCatalogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProductCatalogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchProductCatalogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
