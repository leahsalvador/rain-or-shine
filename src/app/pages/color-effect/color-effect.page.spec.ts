import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColorEffectPage } from './color-effect.page';

describe('ColorEffectPage', () => {
  let component: ColorEffectPage;
  let fixture: ComponentFixture<ColorEffectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorEffectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorEffectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
