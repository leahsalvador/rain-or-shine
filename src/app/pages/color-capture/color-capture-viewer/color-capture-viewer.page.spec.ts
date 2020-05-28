import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColorCaptureViewerPage } from './color-capture-viewer.page';

describe('ColorCaptureViewerPage', () => {
  let component: ColorCaptureViewerPage;
  let fixture: ComponentFixture<ColorCaptureViewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCaptureViewerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorCaptureViewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
