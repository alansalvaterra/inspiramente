import { Component, Input } from '@angular/core';
import { IPensamento } from '../../../../interfaces/IPensamento';
import { PensamentoService } from '../../../../services/pensamento.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() pensamento!: IPensamento;

  constructor(
    private service: PensamentoService
  ) { }

}
