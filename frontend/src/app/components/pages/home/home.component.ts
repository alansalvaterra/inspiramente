import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { NavigationService } from '../../../services/navigation.service';
import { CardComponent } from '../../shared/thoughts/card/card.component';
import { ListaCardComponent } from '../../shared/thoughts/listacard/listacard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CardComponent, ListaCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private navigationService: NavigationService) {}

  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }
}
