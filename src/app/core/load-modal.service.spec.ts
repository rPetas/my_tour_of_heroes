import { TestBed } from '@angular/core/testing';

import { LoadModalService } from './load-modal.service';

describe('LoadModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadModalService = TestBed.get(LoadModalService);
    expect(service).toBeTruthy();
  });
});
