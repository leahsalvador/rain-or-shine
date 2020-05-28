import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecsProductPage } from './specs-product.page';

describe('SpecsProductPage', () => {
  let component: SpecsProductPage;
  let fixture: ComponentFixture<SpecsProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecsProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecsProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
