import { TestBed } from '@angular/core/testing';

import { NgxCloudScriptureService } from './ngx-cloud-scripture.service';

describe('NgxCloudScriptureService', () => {
  let service: NgxCloudScriptureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCloudScriptureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
