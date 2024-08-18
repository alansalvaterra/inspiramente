import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private postAPI = 'http://localhost:3000/pensamentos'; 

  constructor(private http: HttpClient) { }

  salvaPensamento(pensamento: any): Observable<any> {
    return this.http.post(this.postAPI, pensamento);
  }
}