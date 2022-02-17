import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../../models/api/api-response.model";
import {environment} from "../../../environments/environment";

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

}
