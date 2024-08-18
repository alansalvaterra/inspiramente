import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { CardComponent } from '../../shared/thoughts/card/card.component';
import { FormsModule } from '@angular/forms';
import { PensamentoService } from '../../../services/pensamento.service';
import type { IPensamento } from '../../../interfaces/IPensamento';

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
  
  novopensamento: IPensamento = {
    mensagem: '',
    autor: '',
    modelo: 1
  };

  constructor(
    private navigationService: NavigationService,
    private service: PensamentoService
  ) {}

  salvaPensamento(): void {
    this.service.salvaPensamento(this.novopensamento).subscribe(() => {
      this.navigateTo('lista-pensamentos');
    });
  }
  
  navigateTo(route: string): void {
    this.navigationService.navigateTo(route);
  }
}

