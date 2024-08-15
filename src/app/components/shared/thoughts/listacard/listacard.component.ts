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
      mensagem: 'Testando mensagem de card 1.',
      autor: 'Alan Salvaterra 1'
    },
    {
      mensagem: 'Testando mensagem de card 2.',
      autor: 'Alan Salvaterra 2'
    },
    {
      mensagem: 'Testando mensagem de card 3.',
      autor: 'Alan Salvaterra 3'
    },
    {
      mensagem: 'Testando mensagem de card 4.',
      autor: 'Alan Salvaterra 4'
    },
    {
      mensagem: 'Testando mensagem de card 5.',
      autor: 'Alan Salvaterra 5'
    },
    {
      mensagem: 'Testando mensagem de card 6.',
      autor: 'Alan Salvaterra 6'
    },
  ];

}
