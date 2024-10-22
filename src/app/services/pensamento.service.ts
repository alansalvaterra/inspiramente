import { Injectable } from '@angular/core';
import { IPensamento } from '../interfaces/IPensamento';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PensamentoService {

  private STORAGE_KEY = 'pensamentos';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  salvarPensamento(pensamento: IPensamento): void {
    if (isPlatformBrowser(this.platformId)) {
      const pensamentosSalvos = sessionStorage.getItem(this.STORAGE_KEY);
      let pensamentos: IPensamento[] = pensamentosSalvos ? JSON.parse(pensamentosSalvos) : [];
      const novoId = pensamentos.length > 0 ? Math.max(...pensamentos.map(p => p.id || 0)) + 1 : 1; // Calcula o novo ID baseado no maior ID existente

      pensamento.id = novoId;
      pensamentos.push(pensamento);
      sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(pensamentos));
    }

  }

  listar(): IPensamento[] {

    if (isPlatformBrowser(this.platformId)) {
      const pensamentosSalvos = sessionStorage.getItem(this.STORAGE_KEY);
      return pensamentosSalvos ? JSON.parse(pensamentosSalvos) : [];
    } else {
      return [];
    }
  }

  listarPorId(id: number): IPensamento | undefined {
    if (isPlatformBrowser(this.platformId)) {
      const pensamentosSalvos = sessionStorage.getItem(this.STORAGE_KEY);

      if (pensamentosSalvos) {
        let pensamentos: IPensamento[] = JSON.parse(pensamentosSalvos);
        return pensamentos.find(p => p.id === id);
      }
      return undefined;
    }
    return undefined;
  }

  deletarPensamento(id: number): void {
    if (isPlatformBrowser(this.platformId)) {
      const pensamentosSalvos = sessionStorage.getItem(this.STORAGE_KEY);

      if (pensamentosSalvos) {
        let pensamentos: IPensamento[] = JSON.parse(pensamentosSalvos);
        pensamentos = pensamentos.filter(p => p.id !== id);
        sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(pensamentos));
      }
    }
  }

  editarPensamento(pensamentoEditado: IPensamento): void {
    if (isPlatformBrowser(this.platformId)) {
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
  }

  favoritar(id: number, favoritado: boolean): void {
    if (isPlatformBrowser(this.platformId)) {
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
  }

  listarFavoritos(): IPensamento[] {
    if (isPlatformBrowser(this.platformId)) {
      const pensamentosSalvos = sessionStorage.getItem(this.STORAGE_KEY);

      if (pensamentosSalvos) {
        let pensamentos: IPensamento[] = JSON.parse(pensamentosSalvos);
        return pensamentos.filter(p => p.favoritado === true);
      }
      return [];
    } else {
      return [];
    }
  }
}

