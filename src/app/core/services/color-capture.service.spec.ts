import { TestBed } from '@angular/core/testing';

import { ColorCaptureService } from './color-capture.service';

describe('ColorCaptureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorCaptureService = TestBed.get(ColorCaptureService);
    expect(service).toBeTruthy();
  });
});
