import { Injectable } from '@angular/core';
import { IPensamento } from '../interfaces/IPensamento';

@Injectable({
  providedIn: 'root'
})

export class PensamentoService {

  private STORAGE_KEY = 'pensamentos';

  constructor() { }

  salvarPensamento(pensamento: IPensamento): void {
    const pensamentosSalvos = sessionStorage.getItem(this.STORAGE_KEY);
    let pensamentos: IPensamento[] = pensamentosSalvos ? JSON.parse(pensamentosSalvos) : [];
    const novoId = pensamentos.length > 0 ? Math.max(...pensamentos.map(p => p.id || 0)) + 1 : 1; // Calcula o novo ID baseado no maior ID existente
    
    pensamento.id = novoId;
    pensamentos.push(pensamento);
    sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(pensamentos));
  }

  listar(): IPensamento[] {
    const pensamentosSalvos = sessionStorage.getItem(this.STORAGE_KEY);
    return pensamentosSalvos ? JSON.parse(pensamentosSalvos) : [];
  }

  listarPorId(id: number): IPensamento | undefined {
    const pensamentosSalvos = sessionStorage.getItem(this.STORAGE_KEY);

    if (pensamentosSalvos) {
      let pensamentos: IPensamento[] = JSON.parse(pensamentosSalvos);
      return pensamentos.find(p => p.id === id);
    }
    return undefined;
  }

  deletarPensamento(id: number): void {
    const pensamentosSalvos = sessionStorage.getItem(this.STORAGE_KEY);

    if (pensamentosSalvos) {
      let pensamentos: IPensamento[] = JSON.parse(pensamentosSalvos);
      pensamentos = pensamentos.filter(p => p.id !== id);
      sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(pensamentos));
    }
  }

  editarPensamento(pensamentoEditado: IPensamento): void {
    const pensamentosSalvos = sessionStorage.getItem(this.STORAGE_KEY);

    if (pensamentosSalvos) {
      let pensamentos: IPensamento[] = JSON.parse(pensamentosSalvos);
      const index = pensamentos.findIndex(p => p.id === pensamentoEditado.id);
      if (index !== -1) {
        pensamentos[index] = pensamentoEditado;
        sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(pensamentos));
      }
    }
  }

  favoritar(id: number, favoritado: boolean): void {
    const pensamentosSalvos = sessionStorage.getItem(this.STORAGE_KEY);

    if (pensamentosSalvos) {
      let pensamentos: IPensamento[] = JSON.parse(pensamentosSalvos);
      const index = pensamentos.findIndex(p => p.id === id);
      if (index !== -1) {
        pensamentos[index].favoritado = favoritado;
        sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(pensamentos));
      }
    }
  }

  listarFavoritos(): IPensamento[] {
    const pensamentosSalvos = sessionStorage.getItem(this.STORAGE_KEY);

    if (pensamentosSalvos) {
      let pensamentos: IPensamento[] = JSON.parse(pensamentosSalvos);
      return pensamentos.filter(p => p.favoritado === true);
    }
    return [];
  }
}
