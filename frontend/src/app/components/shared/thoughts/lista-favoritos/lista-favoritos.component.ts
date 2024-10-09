import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { IPensamento } from '../../../../interfaces/IPensamento';
import { PensamentoService } from '../../../../services/pensamento.service';

@Component({
  selector: 'app-lista-favoritos',
  standalone: true,
  imports: [NgIf, NgFor, CardComponent],
  templateUrl: './lista-favoritos.component.html',
  styleUrl: './lista-favoritos.component.css'
})
export class ListaFavoritosComponent {
  listaPensamentosFavoritos: IPensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listarFavoritos().subscribe((listaPensamentosFavoritos) => {
      this.listaPensamentosFavoritos = listaPensamentosFavoritos
    })
  }
}
