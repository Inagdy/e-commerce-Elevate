import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MAuthapiService } from './m-authapi.service';
import { AdaptService } from './adapt/adapt.service';
import { ErrorService } from './adapt/adapterror/error.service';
import { AdaptForgetService } from './adapt/adaptforget/adapt-forget.service';
import { UserInfoService } from './adapt/adaptuserinfo/user-info.service';
import { LoginRes } from './interface/loginres';
import { ErrorRes } from './interface/errorRes/error-res';
import { ForgetRes } from './interface/forgetpassword/forget';
import { ResetCodeapi } from './interface/resetCodeapi/reset-codeapi';

describe('MAuthapiService', () => {
  let service: MAuthapiService;
  let httpTestingController: HttpTestingController;
  let adaptService: jasmine.SpyObj<AdaptService>;
  let errorService: jasmine.SpyObj<ErrorService>;
  let adaptForgetService: jasmine.SpyObj<AdaptForgetService>;
  let userInfoService: jasmine.SpyObj<UserInfoService>;

  beforeEach(() => {
    adaptService = jasmine.createSpyObj('AdaptService', ['adapt']);
    errorService = jasmine.createSpyObj('ErrorService', ['Adapterror']);
    adaptForgetService = jasmine.createSpyObj('AdaptForgetService', ['adaptForget']);
    userInfoService = jasmine.createSpyObj('UserInfoService', ['adaptUserInfo']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MAuthapiService,
        { provide: AdaptService, useValue: adaptService },
        { provide: ErrorService, useValue: errorService },
        { provide: AdaptForgetService, useValue: adaptForgetService },
        { provide: UserInfoService, useValue: userInfoService },
      ],
    });

    service = TestBed.inject(MAuthapiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle login successfully', () => {
    const mockLoginResponse: LoginRes = { message:"sussec",token: 'mockToken' };
    const loginData = { email: 'test@example.com', password: 'password' };

    adaptService.adapt.and.returnValue(mockLoginResponse);

    service.login(loginData).subscribe((response) => {
      expect(response).toEqual(mockLoginResponse);
    });

    const req = httpTestingController.expectOne('Authendpoint.LOGIN');
    expect(req.request.method).toBe('POST');
    req.flush(mockLoginResponse);
  });

  it('should handle login error', () => {
    const loginData = { email: 'test@example.com', password: 'password' };
    const mockErrorResponse: ErrorRes = { error:"email or password wrong",status: 400, message: 'Bad Request' };

    errorService.Adapterror.and.returnValue(mockErrorResponse);

    service.login(loginData).subscribe(
      () => fail('expected an error, not a successful login'),
      (error) => {
        expect(error).toEqual(mockErrorResponse);
      }
    );

    const req = httpTestingController.expectOne('Authendpoint.LOGIN');
    req.flush('Error', { status: 400, statusText: 'Bad Request' });
  });

  it('should handle forget password successfully', () => {
    const mockForgetResponse: ForgetRes = { message: 'Reset link sent' };
    const forgetData = { email: 'test@example.com' };

    adaptForgetService.adaptForget.and.returnValue(mockForgetResponse);

    service.forgetpass(forgetData).subscribe((response) => {
      expect(response).toEqual(mockForgetResponse);
    });

    const req = httpTestingController.expectOne('Authendpoint.forgotpassword');
    expect(req.request.method).toBe('POST');
    req.flush(mockForgetResponse);
  });

  it('should handle reset code successfully', () => {
    const mockResetCodeResponse = { status: 'success' };
    const resetCodeData: ResetCodeapi = {  resetCode: '123456' };

    service.resetCodeapi(resetCodeData).subscribe((response) => {
      expect(response).toEqual(mockResetCodeResponse);
    });

    const req = httpTestingController.expectOne('Authendpoint.VerifyResetCode');
    expect(req.request.method).toBe('POST');
    req.flush(mockResetCodeResponse);
  });

  it('should handle reset password successfully', () => {
    const mockResetPasswordResponse = { message: 'Password reset successful', token: 'mockToken' };
    const resetPasswordData = { email: 'test@example.com', newPassword: 'newPassword' };

    service.ResetPassworde(resetPasswordData).subscribe((response) => {
      expect(response).toEqual(mockResetPasswordResponse);
    });

    const req = httpTestingController.expectOne('Authendpoint.ResetPassword');
    expect(req.request.method).toBe('PUT');
    req.flush(mockResetPasswordResponse);
  });
});