import { Component, Input } from '@angular/core';
import { IPensamento } from '../../../../interfaces/IPensamento';
import { PensamentoService } from '../../../../services/pensamento.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() pensamento!: IPensamento;

  constructor(
    private service: PensamentoService
  ) { }

  deletaPensamento(): void {
    if (this.pensamento.id !== undefined) {
        this.service.deletaPensamento(this.pensamento.id).subscribe({
            next: (response) => {
                // Exibindo o texto retornado pelo backend
                alert(response); 
            },
            error: (error) => {
                console.error('Erro ao deletar o pensamento:', error);
                alert('Erro ao deletar o pensamento.');
            }
        });
    }
}
}
