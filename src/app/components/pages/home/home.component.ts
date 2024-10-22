import { Component } from '@angular/core';
import { ListaCardComponent } from '../../shared/thoughts/listacard/listacard.component';
import { IPensamento } from '../../../interfaces/IPensamento';
import { PensamentoService } from '../../../services/pensamento.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListaCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  listaPensamentos: IPensamento[] = [];

  constructor(
    private service: PensamentoService
  ) { }

  ngOnInit(): void {
    this.carregarPensamentos();
  }

  carregarPensamentos(): void {
    this.listaPensamentos = this.service.listar();

    if (this.listaPensamentos.length === 0) {
      const pensamentoBoasVindas: IPensamento = {
        id: 1,
        mensagem: 'Bem-vindo ao Inspiramente!',
        autor: 'Alan S Salvaterra',
        modelo: 1
      };
      this.service.salvarPensamento(pensamentoBoasVindas);
      this.listaPensamentos = this.service.listar();
    }
  }
}