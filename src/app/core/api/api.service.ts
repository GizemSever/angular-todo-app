import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../models/api/api-response.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService {

  protected constructor(
    private httpClient: HttpClient
  ) {
  }

  protected post(url: string, data: object): Observable<ApiResponse<any>> {
    return this.httpClient.post<ApiResponse<any>>(`${environment.api}${url}`, data);
  }

  protected get(url: string): Observable<ApiResponse<any>> {
    return this.httpClient.get<ApiResponse<any>>(`${environment.api}${url}`);
  }

  protected delete(url: string, data: object = {}): Observable<ApiResponse<any> | any> {
    return this.httpClient.delete<ApiResponse<any> | any>(`${environment.api}${url}`, data);
  }

  protected put(url: string, data: object = {}): Observable<ApiResponse<any>> {
    return this.httpClient.put<ApiResponse<any>>(`${environment.api}${url}`, data);
  }
}
