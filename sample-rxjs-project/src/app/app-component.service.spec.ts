import { TestBed } from '@angular/core/testing';

import { AppComponentService } from './app-component.service';

describe('AppComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppComponentService = TestBed.get(AppComponentService);
    expect(service).toBeTruthy();
  });
});
