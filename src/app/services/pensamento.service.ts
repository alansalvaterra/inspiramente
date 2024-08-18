import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPensamento } from '../interfaces/IPensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private API = 'http://localhost:3000/pensamentos'; 

  constructor(private http: HttpClient) { }

  listar(): Observable<IPensamento[]> {
    return this.http.get<IPensamento[]>(this.API)
  }
  
  salvaPensamento(pensamento: any): Observable<any> {
    return this.http.post(this.API, pensamento);
  }
}