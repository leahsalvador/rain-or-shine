import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColorShopPage } from './color-shop.page';

describe('ColorShopPage', () => {
  let component: ColorShopPage;
  let fixture: ComponentFixture<ColorShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorShopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
