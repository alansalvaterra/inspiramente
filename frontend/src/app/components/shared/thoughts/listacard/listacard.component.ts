import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { IPensamento } from '../../../../interfaces/IPensamento';
import { PensamentoService } from '../../../../services/pensamento.service';

@Component({
  selector: 'app-listacard',
  standalone: true,
  imports: [NgIf, NgFor, CardComponent],
  templateUrl: './listacard.component.html',
  styleUrl: './listacard.component.css'
})
export class ListaCardComponent {

  listaPensamentos: IPensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
}
