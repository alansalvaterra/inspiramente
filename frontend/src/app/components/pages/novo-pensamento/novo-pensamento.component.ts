import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPensamento } from '../../../interfaces/IPensamento';
import { PensamentoService } from '../../../services/pensamento.service';
import { FormPensamentoComponent } from '../../shared/form-pensamento/form-pensamento.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  salvaPensamento(pensamento: IPensamento): void {
    this.service.salvaPensamento(pensamento).subscribe(() => {
      this.router.navigate(['/home']);
      this.snackBar.open('Pensamento salvo com sucesso!', 'Fechar', {
        duration: 3000,
      });
    });
  }

  cancelar(): void {
    this.router.navigate(['/home']);
  }
}
