import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { PensamentoService } from '../../../services/pensamento.service';
import { IPensamento } from '../../../interfaces/IPensamento';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute
  ) {}

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
    if(this.pensamento.id) {
      this.service.deletaPensamento(this.pensamento.id).subscribe(() => {
        alert('Pensamento excluído com sucesso!');
        this.router.navigate(['/home'])
      })
    }
  }
}
