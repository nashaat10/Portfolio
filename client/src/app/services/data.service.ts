import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../components/home/about/about.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    const body = {
      email: 'Nashaat@test.com',
      password: '12345678',
    };
    return this.http.post<any>(
      'http://localhost:3000/api/v1/users/login',
      body
    );
  }

  getData(): Observable<any> {
    const header = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get<any>('http://localhost:3000/api/v1/users/me', {
      headers: header,
    });
  }
}
