import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaintRequirementsPage } from './paint-requirements.page';

describe('PaintRequirementsPage', () => {
  let component: PaintRequirementsPage;
  let fixture: ComponentFixture<PaintRequirementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintRequirementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaintRequirementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
