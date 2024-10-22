import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPensamento } from '../../../interfaces/IPensamento';
import { PensamentoService } from '../../../services/pensamento.service';
import { FormPensamentoComponent } from '../../shared/form-pensamento/form-pensamento.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

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

  pensamentos: IPensamento[] = [];

  constructor(
    private service: PensamentoService,
    private router: Router,
    private snackBar: MatSnackBar,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const pensamentosSalvos = sessionStorage.getItem('pensamentos');
      if (pensamentosSalvos) {
        this.pensamentos = JSON.parse(pensamentosSalvos);
      }
    }

  }

  salvarPensamento(pensamento: IPensamento): void {
    this.service.salvarPensamento(pensamento);

    this.snackBar.open('Pensamento salvo com sucesso!', 'Fechar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });

    this.router.navigate(['/home']);
  }

  cancelar(): void {
    this.router.navigate(['/home']);
  }
}
