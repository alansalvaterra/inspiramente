import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [NgIf, NgFor, CardComponent],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent {

  thoughts = [
    {
      message: 'Testando mensagem de card 1.',
      author: 'Alan Salvaterra 1'
    },
    {
      message: 'Testando mensagem de card 2.',
      author: 'Alan Salvaterra 2'
    },
    {
      message: 'Testando mensagem de card 3.',
      author: 'Alan Salvaterra 3'
    },
    {
      message: 'Testando mensagem de card 4.',
      author: 'Alan Salvaterra 4'
    },
  ];

}
