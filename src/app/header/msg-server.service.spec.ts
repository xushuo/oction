import { TestBed, inject } from '@angular/core/testing';

import { MsgServerService } from './msg-server.service';

describe('MsgServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsgServerService]
    });
  });

  it('should be created', inject([MsgServerService], (service: MsgServerService) => {
    expect(service).toBeTruthy();
  }));
});
