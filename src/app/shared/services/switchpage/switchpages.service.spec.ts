import { TestBed } from '@angular/core/testing';
import { SwitchpagesService } from './switchpages.service';



describe('SwitchpagesService', () => {
  let service: SwitchpagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchpagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
