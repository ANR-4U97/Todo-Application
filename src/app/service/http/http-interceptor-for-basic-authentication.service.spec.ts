import { TestBed } from '@angular/core/testing';

import { HttpInterceptorForBasicAuthenticationService } from './http-interceptor-for-basic-authentication.service';

describe('HttpInterceptorForBasicAuthenticationService', () => {
  let service: HttpInterceptorForBasicAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorForBasicAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
