import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchemeEditorPage } from './scheme-editor.page';

describe('SchemeEditorPage', () => {
  let component: SchemeEditorPage;
  let fixture: ComponentFixture<SchemeEditorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeEditorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchemeEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
