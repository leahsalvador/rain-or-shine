import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Painting101Page } from './painting101.page';

describe('Painting101Page', () => {
  let component: Painting101Page;
  let fixture: ComponentFixture<Painting101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Painting101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Painting101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
