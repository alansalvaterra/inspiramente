import { Component, Input } from '@angular/core';
import { IPensamento } from '../../../../interfaces/IPensamento';
import { PensamentoService } from '../../../../services/pensamento.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() pensamento!: IPensamento;
  @Input() isNew: boolean = false;

  constructor(
    private service: PensamentoService,
  ) { }

  alteraFavorito() {
    const novoFavorito = !this.pensamento.favoritado;
    this.service.favoritar(this.pensamento.id!, novoFavorito);
    this.pensamento.favoritado = novoFavorito;
  }

  excluirPensamento(): void {
    if (this.pensamento.id) {
      console.log('Excluindo pensamento com ID:', this.pensamento.id);
      this.service.deletarPensamento(this.pensamento.id);
    }
  }
}
