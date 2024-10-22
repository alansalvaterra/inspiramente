import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPensamento } from '../../../interfaces/IPensamento';
import { PensamentoService } from '../../../services/pensamento.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { CardComponent } from '../../shared/thoughts/card/card.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
  ],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent {

  pensamento: IPensamento = {
    id: 0,
    mensagem: '',
    autor: '',
    modelo: 0
  };

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const pensamentoEncontrado = this.service.listarPorId(parseInt(id, 10));
      if (pensamentoEncontrado) {
        this.pensamento = pensamentoEncontrado;
      } else {
        this.snackBar.open('Pensamento não encontrado!', 'Fechar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.router.navigate(['/home']);
      }
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  excluirPensamento(): void {
    if (this.pensamento.id === 1) {
      this.snackBar.open('O pensamento padrão não pode ser deletado', 'Fechar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      },);
      this.router.navigate(['/home']);
      return;
    }

    if (this.pensamento.id) {
      this.service.deletarPensamento(this.pensamento.id);
      this.snackBar.open('Pensamento excluído com sucesso!', 'Fechar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      this.router.navigate(['/home']);
    }
  }
}
