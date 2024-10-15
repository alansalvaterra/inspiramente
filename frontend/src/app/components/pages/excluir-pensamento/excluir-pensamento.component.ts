import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPensamento } from '../../../interfaces/IPensamento';
import { PensamentoService } from '../../../services/pensamento.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [
    ButtonComponent
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
    const id = this.route.snapshot.paramMap.get('id')
    this.service.listarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.deletaPensamento(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/home'])
        this.snackBar.open('Pensamento excluído com sucesso!', 'Fechar', {
          duration: 3000
        })
      })
    }
  }
}
