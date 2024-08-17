import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { CardComponent } from '../../shared/thoughts/card/card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-novo-pensamento',
  standalone: true,
  imports: [
    ButtonComponent, 
    CardComponent,
    FormsModule
  ],
  templateUrl: './novo-pensamento.component.html',
  styleUrl: './novo-pensamento.component.css'
})
export class NovoPensamentoComponent {
  
  novopensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor(private navigationService: NavigationService) {}

  salvaPensamento(): void {
    alert('Pensamento salvo');
  }
  
  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }
}

