import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneralDirectionPage } from './general-direction.page';

describe('GeneralDirectionPage', () => {
  let component: GeneralDirectionPage;
  let fixture: ComponentFixture<GeneralDirectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralDirectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralDirectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
