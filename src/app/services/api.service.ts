import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get<T>(url: string, options?: any): Observable<T> {
    return this.http.get<T>(url, options) as Observable<T>
  }
}
