import { Component, Input } from '@angular/core';
import type { IPensamento } from '../../../../interfaces/IPensamento';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() pensamento!: IPensamento;
}
