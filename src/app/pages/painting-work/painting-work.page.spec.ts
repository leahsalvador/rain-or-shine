import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaintingWorkPage } from './painting-work.page';

describe('PaintingWorkPage', () => {
  let component: PaintingWorkPage;
  let fixture: ComponentFixture<PaintingWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingWorkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaintingWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
