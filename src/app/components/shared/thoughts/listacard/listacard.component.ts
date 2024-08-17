import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-listacard',
  standalone: true,
  imports: [NgIf, NgFor, CardComponent],
  templateUrl: './listacard.component.html',
  styleUrl: './listacard.component.css'
})
export class ListaCardComponent {

  thoughts = [
    {
      mensagem: 'Testando.',
      autor: 'Alan Salvaterra 1'
    },
    {
      mensagem: 'Mensagem de card 2.',
      autor: 'Alan 2'
    },
    {
      mensagem: 'Novo Pensamento.',
      autor: 'Salvaterra 3'
    }
  ];

}
