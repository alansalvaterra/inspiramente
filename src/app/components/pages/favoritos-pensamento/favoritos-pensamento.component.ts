import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { CardComponent } from '../../shared/thoughts/card/card.component';
import { ListaCardComponent } from '../../shared/thoughts/listacard/listacard.component';
import { ListaFavoritosComponent } from '../../shared/thoughts/lista-favoritos/lista-favoritos.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos-pensamento',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    ListaCardComponent,
    ListaFavoritosComponent
  ],
  templateUrl: './favoritos-pensamento.component.html',
  styleUrl: './favoritos-pensamento.component.css'
})

export class FavoritosPensamentoComponent {
  constructor(
    private router: Router,
  ) { }
}
