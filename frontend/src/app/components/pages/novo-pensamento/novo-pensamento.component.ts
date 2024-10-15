import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { PensamentoService } from '../../../services/pensamento.service';
import type { IPensamento } from '../../../interfaces/IPensamento';
import { Router } from '@angular/router';
import { FormPensamentoComponent } from '../../shared/form-pensamento/form-pensamento.component';

@Component({
  selector: 'app-novo-pensamento',
  standalone: true,
  imports: [FormPensamentoComponent],
  templateUrl: './novo-pensamento.component.html',
  styleUrl: './novo-pensamento.component.css',
})

export class NovoPensamentoComponent {
  novopensamento: IPensamento = {
    mensagem: '',
    autor: '',
    modelo: 0,
  };

  constructor(
    private service: PensamentoService,
    private navigationService: NavigationService,
    private router: Router
  ) { }

  salvaPensamento(pensamento: IPensamento): void {
    this.service.salvaPensamento(pensamento).subscribe(() => {
      alert('Pensamento salvo com sucesso!');
      this.router.navigate(['/home']);
    });
  }

  cancelar(): void {
    this.navigationService.navigateTo('/home');
  }
}
