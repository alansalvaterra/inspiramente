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

  salvaPensamento(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.post<IPensamento>(this.API, pensamento);
  }

  listar(): Observable<IPensamento[]> {
    return this.http.get<IPensamento[]>(this.API)
  }

  listarFavoritos(): Observable<IPensamento[]> {
    return this.http.get<IPensamento[]>(`${this.API}?favoritado=true`);
  }

  listarPorId(id: number): Observable<IPensamento> {
    return this.http.get<IPensamento>(`${this.API}/${id}`);
  }
  
  editaPensamento(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.put<IPensamento>(`${this.API}/${pensamento.id}`, pensamento);
  }

  deletaPensamento(id: number): Observable<string> {
    return this.http.delete(`${this.API}/${id}`, { responseType: 'text' });
  }

  favoritar(id: number, favoritado: boolean): Observable<any> {
    return this.http.put(`${this.API}/${id}`, { favoritado }, { responseType: 'text' });
  }
  
}