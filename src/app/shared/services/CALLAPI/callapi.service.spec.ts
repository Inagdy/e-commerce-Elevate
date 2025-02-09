import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MAuthapiService } from '../lib/m-authapi.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { signal } from '@angular/core';
import { Forgetpassform } from '../../interfaces/auth/forgetpass';
import { Loginform } from '../../interfaces/auth/loginform';
import { LoginRes } from '../lib/interface/loginres';
import { SingupForm } from '../lib/interface/singup-form';
import { callAPIService } from './callapi.service';
import { ErrorRes } from '../lib/interface/errorRes/error-res';

describe('callAPIService', () => {
  let service: callAPIService;
  let httpTestingController: HttpTestingController;
  let mockAuthService: jasmine.SpyObj<MAuthapiService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj('MAuthapiService', [
      'regester',
      'login',
      'forgetpass',
      'resetCodeapi',
      'ResetPassworde',
      'userInfo',
    ]);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        callAPIService,
        { provide: MAuthapiService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
      ],
    });

    service = TestBed.inject(callAPIService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Verify that no unmatched requests are outstanding
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('singup', () => {
    it('should call regester and navigate to login on success', () => {
      const form: SingupForm = {
        username: 'testuser',
        firstName: 'Test',
        lastName: 'User ',
        email: 'test@example.com',
        password: 'password',
        rePassword: 'password',
        phone: '1234567890',
      };
      const formGroup = new FormGroup({}); // Mock FormGroup

      mockAuthService.regester.and.returnValue(of({
        message: 'Login successful',
        token: 'fake-token',
      })); // Mock successful response

      service.singup(form, formGroup);

      expect(service.looding()).toBeTrue(); // Use () to access the signal value
      expect(service.callapi()).toBeTrue(); // Use () to access the signal value
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
    });

    it('should set error message on regester failure', () => {
      const form: SingupForm = {
        username: 'testuser',
        firstName: 'Test',
        lastName: 'User ',
        email: 'test@example.com',
        password: 'password',
        rePassword: 'password',
        phone: '1234567890',
      };
      const formGroup = new FormGroup({}); // Mock FormGroup

      mockAuthService.regester.and.returnValue(throwError({ error: 'Error occurred' }));

      service.singup(form, formGroup);

      expect(service.errormassege()).toBe('Error occurred'); // Use () to access the signal value
    });
  });

  describe('singin', () => {
    it('should call login and navigate to home on success', () => {
      const form: Loginform = {
        email: 'test@example.com',
        password: 'password',
      };
      const formGroup = new FormGroup({}); // Mock FormGroup

      // Mock the response to match the LoginRes interface
      const mockResponse: LoginRes = {
        message: 'Login successful',
        token: 'fake-token',
      };

      mockAuthService.login.and.returnValue(of(mockResponse)); // Return the mocked response

      service.singin(form, formGroup);

      expect(service.isAuthenticated()).toBeTrue(); // Use () to access the signal value
      expect(localStorage.getItem('token')).toBe('fake-token');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
    });

    it('should set error message on login failure', () => {
      const form: Loginform = {
        email: 'test@example.com',
        password: 'password',
      };
      const formGroup = new FormGroup({}); // Mock FormGroup

      // Mock the error response to match the ErrorRes interface
      const mockError: ErrorRes = {
        error: "falied",
        message: "404",
        status: 404,
      };

      mockAuthService.login.and.returnValue(throwError(mockError));

      service.singin(form, formGroup);

      expect(service.errormassege()).toBe('Login failed'); // Use () to access the signal value
    });
  });

  describe('forgetpassword', () => {
    it('should call forgetpass and update step on success', () => {
      const form: Forgetpassform = {
        email: 'test@example.com',
      };
      const formGroup = new FormGroup({}); // Mock FormGroup

      // Mock the response to match the expected interface
      const mockResponse = {
        message: 'Reset code sent',
      };

      mockAuthService.forgetpass.and.returnValue(of(mockResponse)); // Return the mocked response

      service.forgetpassword(form, formGroup);

      expect(service.looding()).toBeTrue(); // Use () to access the signal value
      expect(service.callapi()).toBeTrue(); // Use () to access the signal value
      expect(service.step()).toBe(2); // Use () to access the signal value
    });

    it('should set error message on forgetpass failure', () => {
      const form: Forgetpassform= {
        email: 'test@example.com',
      };
      const formGroup = new FormGroup({}); // Mock FormGroup

      // Mock the error response
      const mockError = {
        error: 'Email not found',
      };

      mockAuthService.forgetpass.and.returnValue(throwError(mockError));

      service.forgetpassword(form, formGroup);

      expect(service.errormassege()).toBe('Email not found'); // Use () to access the signal value
    });
  });
});