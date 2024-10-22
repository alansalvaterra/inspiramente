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
        mensagem: 'Seja bem-vindo ao Inspiramente! 💡\n\nAqui você pode criar, editar e favoritar os seus pensamentos.\n\nEste projeto está em constante evolução, e seu feedback é muito bem-vindo! Fale comigo pelo WhatsApp.',
        autor: 'Alan Salvaterra',
        modelo: 1
      };
      this.service.salvarPensamento(pensamentoBoasVindas);
      this.listaPensamentos = this.service.listar();
    }
  }
}