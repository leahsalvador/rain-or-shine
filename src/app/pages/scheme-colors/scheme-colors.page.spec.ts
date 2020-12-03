import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchemeColorsPage } from './scheme-colors.page';

describe('SchemeColorsPage', () => {
  let component: SchemeColorsPage;
  let fixture: ComponentFixture<SchemeColorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeColorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchemeColorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
