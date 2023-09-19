import { TestBed } from '@angular/core/testing';

import { SernameService } from './sername.service';

describe('SernameService', () => {
  let service: SernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
