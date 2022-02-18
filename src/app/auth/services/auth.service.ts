import {Injectable} from '@angular/core';
import {ApiService} from '../../core/api/api.service';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../models/api/api-response.model';
import {User} from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  register(registerData: { name: string, surname: string, password: string, email: string }): Observable<ApiResponse<{ user: User, token: string }>> {
    return this.post(`register`, registerData);
  }

  login(loginData: { email: string, password: string }): Observable<ApiResponse<{ user: User, token: string }>> {
    return this.post(`login`, loginData);
  }

  user(): Observable<ApiResponse<User>> {
    return this.get(`user`);
  }

  logout(): Observable<any> {
    return this.delete(`logout`);
  }

}
