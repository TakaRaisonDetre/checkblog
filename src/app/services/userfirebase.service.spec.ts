/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserfirebaseService } from './userfirebase.service';

describe('UserfirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserfirebaseService]
    });
  });

  it('should ...', inject([UserfirebaseService], (service: UserfirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
