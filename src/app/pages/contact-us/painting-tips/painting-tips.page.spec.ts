import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaintingTipsPage } from './painting-tips.page';

describe('PaintingTipsPage', () => {
  let component: PaintingTipsPage;
  let fixture: ComponentFixture<PaintingTipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingTipsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaintingTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
