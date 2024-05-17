import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userGuardService } from './usrer-guard.guard';

describe('userGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userGuardService(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
