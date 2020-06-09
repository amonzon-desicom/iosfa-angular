import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Legajo } from './legajo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }



  public getLegajos = (): Observable<Object> => {

    return this.http.get('http://lade.me/api/legajos');
  };

  public getLegajo = (): Observable<Object> => {

    return this.http.get('http://lade.me/api/legajos/3071429214100000105');
  };



}
